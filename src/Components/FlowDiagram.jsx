/**
 * A numbered sequence of labelled steps, drawn with rules.
 * Vertical on phones, a horizontal row on wide screens when `horizontal`.
 */
export default function FlowDiagram({ title, steps, horizontal = false, className = "" }) {
  return (
    <div className={className}>
      {title && <p className="eyebrow mb-4">{title}</p>}
      <ol
        className={
          horizontal
            ? "grid gap-0 border-t border-rule-strong sm:grid-cols-2 lg:grid-cols-4"
            : "border-t border-rule-strong"
        }
      >
        {steps.map((s, i) => (
          <li
            key={s.label}
            className={`relative border-b border-rule py-4 ${
              horizontal ? "sm:pr-5 lg:border-b-0 lg:border-r lg:pl-5 lg:first:pl-0 lg:last:border-r-0" : ""
            }`}
          >
            <p className="flex items-baseline gap-2 text-sm font-medium text-accent">
              <span className="tabular-nums" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink">{s.label}</span>
            </p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
