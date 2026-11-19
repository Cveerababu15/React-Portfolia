import { useEffect, useState } from "react";
import { FiArrowUpRight, FiStar, FiGitBranch } from "react-icons/fi";
import usePageTitle from "../Components/usePageTitle.js";
import { projects } from "../Data/projectsData.jsx";
import { profile as me } from "../Data/siteData.js";

const USER = me.githubUser;
const PROFILE_URL = me.github;

async function getJson(url, signal) {
  const res = await fetch(url, { signal, headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) {
    const err = new Error(res.status === 403 || res.status === 429 ? "rate-limit" : `http-${res.status}`);
    throw err;
  }
  return res.json();
}

/** Turns public events into readable activity rows. */
function toActivity(events) {
  const rows = [];
  for (const ev of events) {
    const repo = ev.repo?.name || "";
    const repoUrl = `https://github.com/${repo}`;
    const base = { id: ev.id, repo, date: ev.created_at };
    if (ev.type === "PushEvent") {
      const commits = Array.isArray(ev.payload?.commits) ? ev.payload.commits : [];
      if (commits.length) {
        commits.forEach((c) =>
          rows.push({
            ...base,
            id: `${ev.id}-${c.sha}`,
            text: c.message.split("\n")[0],
            url: `${repoUrl}/commit/${c.sha}`,
            sha: c.sha.slice(0, 7),
          })
        );
      } else {
        const branch = (ev.payload?.ref || "").replace("refs/heads/", "");
        const head = ev.payload?.head;
        rows.push({
          ...base,
          text: `Pushed to ${branch || "a branch"}`,
          url: head ? `${repoUrl}/commit/${head}` : repoUrl,
          sha: head ? head.slice(0, 7) : null,
        });
      }
    } else if (ev.type === "CreateEvent") {
      rows.push({ ...base, text: `Created ${ev.payload?.ref_type || "repository"}${ev.payload?.ref ? ` ${ev.payload.ref}` : ""}`, url: repoUrl });
    } else if (ev.type === "PullRequestEvent") {
      const pr = ev.payload?.pull_request;
      const action = ev.payload?.action || "updated";
      const verb = action.charAt(0).toUpperCase() + action.slice(1);
      rows.push({ ...base, text: `${verb} a pull request${pr?.title ? `: ${pr.title}` : ""}`, url: pr?.html_url || repoUrl });
    }
  }
  return rows.slice(0, 20);
}

function relDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function ProfileLink({ className = "btn btn-primary" }) {
  return (
    <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className={className}>
      Open GitHub profile <FiArrowUpRight aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function Notice({ children }) {
  return <p className="border border-dashed border-rule px-4 py-6 text-muted">{children}</p>;
}

export default function GithubPage() {
  usePageTitle("GitHub");
  const [status, setStatus] = useState("loading");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null); // null = failed
  const [activity, setActivity] = useState(null); // null = failed
  const [rateLimited, setRateLimited] = useState(false);
  const [avatarOk, setAvatarOk] = useState(true);
  const [chartOk, setChartOk] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    const base = `https://api.github.com/users/${USER}`;
    Promise.allSettled([
      getJson(base, ctrl.signal),
      getJson(`${base}/repos?per_page=100&sort=updated`, ctrl.signal),
      getJson(`${base}/events/public?per_page=100`, ctrl.signal),
    ]).then(([p, r, e]) => {
      if (ctrl.signal.aborted) return;
      setRateLimited([p, r, e].some((x) => x.status === "rejected" && x.reason?.message === "rate-limit"));
      setProfile(p.status === "fulfilled" ? p.value : null);

      if (r.status === "fulfilled" && Array.isArray(r.value)) {
        const list = r.value
          .filter((repo) => {
            const n = repo.name.toLowerCase();
            return !repo.fork && !n.includes("portfolio") && !n.includes("contribution");
          })
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at)
          )
          .slice(0, 6);
        setRepos(list);
      } else setRepos(null);

      setActivity(e.status === "fulfilled" && Array.isArray(e.value) ? toActivity(e.value) : null);
      setStatus("done");
    });
    return () => ctrl.abort();
  }, []);

  const allFailed = status === "done" && !profile && repos === null && activity === null;

  return (
    <div className="wrap pt-10 pb-8 md:pt-16">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="display text-5xl md:text-7xl">GitHub</h1>
          <p className="mt-4 text-lg text-muted">
            Live data from my public GitHub account, <span className="text-ink">@{USER}</span>: recent
            repositories, contributions, and activity.
          </p>
        </div>
        <ProfileLink />
      </header>

      {status === "loading" && (
        <p role="status" className="mt-12 border-t border-rule pt-6 text-muted">
          Loading GitHub data…
        </p>
      )}

      {allFailed && (
        <div role="alert" className="mt-12 border-t border-rule-strong pt-6">
          <h2 className="text-xl font-medium">GitHub data is unavailable right now</h2>
          <p className="mt-2 max-w-xl text-muted">
            {rateLimited
              ? "GitHub's public API limits how often it can be called from one network, and that limit has been reached. It resets within the hour."
              : "The GitHub API didn't respond. Please try again later."}{" "}
            Everything is still on my profile.
          </p>
          <div className="mt-5">
            <ProfileLink />
          </div>
        </div>
      )}

      {status === "done" && !allFailed && (
        <>
          {/* Profile summary */}
          <section aria-label="Profile" className="mt-12 flex flex-col gap-6 border-t border-rule-strong pt-6 sm:flex-row sm:items-center">
            {profile && avatarOk ? (
              <img
                src={profile.avatar_url}
                alt=""
                width={96}
                height={96}
                onError={() => setAvatarOk(false)}
                className="h-24 w-24 border border-rule object-cover"
              />
            ) : (
              <div aria-hidden="true" className="flex h-24 w-24 items-center justify-center border border-rule font-serif text-4xl">
                VC
              </div>
            )}
            <div className="flex-1">
              <p className="text-xl font-medium">{profile?.name || me.name}</p>
              <p className="text-muted">@{profile?.login || USER}</p>
              {profile?.bio && <p className="mt-2 max-w-xl">{profile.bio}</p>}
            </div>
            {profile && (
              <dl className="flex gap-8 sm:gap-10">
                {[
                  ["Public repos", profile.public_repos],
                  ["Followers", profile.followers],
                  ["Following", profile.following],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="font-serif text-4xl tabular-nums">{v ?? "—"}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>

          {/* Contribution graph */}
          <section aria-labelledby="contrib" className="mt-14 border-t border-rule-strong pt-6">
            <h2 id="contrib" className="display text-3xl md:text-4xl">Contributions</h2>
            <p className="mt-2 text-muted">Public contributions over the past year.</p>
            {chartOk ? (
              <div className="mt-5 overflow-x-auto border border-rule bg-[#fbfaf6] p-4">
                <img
                  src={`https://ghchart.rshah.org/2447D8/${USER}`}
                  alt={`GitHub contribution calendar for ${USER} over the past year`}
                  width={663}
                  height={104}
                  loading="lazy"
                  onError={() => setChartOk(false)}
                  className="h-auto w-full min-w-[640px]"
                />
              </div>
            ) : (
              <div className="mt-5">
                <Notice>
                  The contribution chart couldn&rsquo;t load.{" "}
                  <a className="link" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
                    See it on GitHub
                  </a>
                  .
                </Notice>
              </div>
            )}
          </section>

          {/* Repositories */}
          <section aria-labelledby="repos" className="mt-14 border-t border-rule-strong pt-6">
            <h2 id="repos" className="display text-3xl md:text-4xl">Repositories</h2>
            <div className="mt-5">
              {repos === null ? (
                <Notice>Repositories couldn&rsquo;t be loaded. They&rsquo;re all listed on my GitHub profile.</Notice>
              ) : repos.length === 0 ? (
                <Notice>No public repositories to show yet.</Notice>
              ) : (
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {repos.map((repo) => {
                    const match = projects.find(
                      (p) => p.github && p.github.replace(/\/$/, "").toLowerCase() === repo.html_url.toLowerCase()
                    );
                    const desc = match?.summary || repo.description || "No description provided.";
                    return (
                      <li key={repo.id} className="border-b border-rule py-5">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-lg font-medium hover:text-accent"
                        >
                          <span className="break-all">{repo.name}</span>
                          <FiArrowUpRight aria-hidden="true" className="shrink-0 text-muted group-hover:text-accent" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                        <p className="mt-1 text-[0.9375rem] text-muted">{desc}</p>
                        <p className="mt-2 flex flex-wrap gap-x-4 text-sm text-muted">
                          {repo.language && <span>{repo.language}</span>}
                          <span className="inline-flex items-center gap-1">
                            <FiStar aria-hidden="true" /> {repo.stargazers_count}
                            <span className="sr-only">stars</span>
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <FiGitBranch aria-hidden="true" /> {repo.forks_count}
                            <span className="sr-only">forks</span>
                          </span>
                          <span>Updated {relDate(repo.pushed_at || repo.updated_at)}</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>

          {/* Activity */}
          <section aria-labelledby="activity" className="mt-14 border-t border-rule-strong pt-6">
            <h2 id="activity" className="display text-3xl md:text-4xl">Recent activity</h2>
            <div className="mt-5">
              {activity === null ? (
                <Notice>Recent activity is unavailable right now. My latest commits are on GitHub.</Notice>
              ) : activity.length === 0 ? (
                <Notice>No public activity in the last 90 days.</Notice>
              ) : (
                <ol>
                  {activity.map((a) => (
                    <li key={a.id} className="grid gap-1 border-b border-rule py-3 sm:grid-cols-[8rem_1fr_auto] sm:gap-6">
                      <time dateTime={a.date} className="text-sm tabular-nums text-muted">{relDate(a.date)}</time>
                      <div className="min-w-0">
                        <p className="truncate text-sm text-muted">{a.repo}</p>
                        <p className="break-words">{a.text}</p>
                      </div>
                      <a href={a.url} target="_blank" rel="noopener noreferrer" className="link text-sm">
                        {a.sha ? <code>{a.sha}</code> : "View"}
                        <span className="sr-only"> on GitHub (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
