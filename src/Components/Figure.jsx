import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

/**
 * Sharply framed screenshot with the site's signature caption:
 * a short cobalt rule followed by one sentence about what is visible.
 *
 * crop: optional detail view { aspect: "16 / 7", position: "20% 90%", scale: 1.6 }
 * The full image is always available via the Enlarge dialog.
 */
export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  label,
  crop,
  mobileCrop,
  priority = false,
  enlargeable = true,
  className = "",
  frameClassName = "",
  sizes,
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // mobileCrop: detail crop below 768px, full image from 768px up (one <img>).
  const mc = !crop && mobileCrop;

  const imgProps = {
    src,
    alt,
    width,
    height,
    decoding: "async",
    loading: priority ? "eager" : "lazy",
    ...(priority ? { fetchpriority: "high" } : {}),
    sizes,
  };

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden border border-rule bg-sunken ${
          mc ? "aspect-[var(--crop-aspect)] md:aspect-auto" : ""
        } ${frameClassName}`}
        style={
          crop
            ? { aspectRatio: crop.aspect }
            : mc
            ? {
                "--crop-aspect": mc.aspect.replace(/\s/g, ""),
                "--crop-pos": mc.position,
                "--crop-scale": mc.scale || 1,
              }
            : undefined
        }
      >
        {mc ? (
          <img
            {...imgProps}
            className="absolute inset-0 h-full w-full object-cover [object-position:var(--crop-pos)] [transform-origin:var(--crop-pos)] [transform:scale(var(--crop-scale))] md:static md:block md:h-auto md:[transform:none]"
          />
        ) : crop ? (
          <img
            {...imgProps}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: crop.position,
              transform: `scale(${crop.scale || 1})`,
              transformOrigin: crop.position,
            }}
          />
        ) : (
          <img {...imgProps} className="block h-auto w-full" />
        )}

        {enlargeable && (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="absolute right-2 bottom-2 inline-flex items-center gap-1.5 bg-bg/90 px-2.5 py-1.5 text-xs font-medium text-ink border border-rule hover:border-ink"
            aria-label={`Enlarge image: ${alt}`}
          >
            <FiMaximize2 aria-hidden="true" />
            <span>Enlarge</span>
          </button>
        )}
      </div>

      {(caption || label) && (
        <figcaption className="mt-3 flex gap-3 text-[0.9375rem] leading-snug text-muted">
          <span aria-hidden="true" className="mt-[0.6em] h-[2px] w-6 shrink-0 bg-accent" />
          <span>
            {label && <span className="font-medium text-ink">{label}. </span>}
            {caption}
          </span>
        </figcaption>
      )}

      {enlargeable && (
        <dialog
          ref={dialogRef}
          onClose={() => {
            setOpen(false);
            triggerRef.current?.focus();
          }}
          onClick={(e) => {
            if (e.target === dialogRef.current) setOpen(false);
          }}
          aria-label={alt}
          className="m-auto max-h-[92vh] w-[min(96vw,1600px)] max-w-none bg-bg p-0 text-ink backdrop:bg-black/75"
        >
          <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-rule bg-bg px-4 py-2">
            <p className="truncate text-sm text-muted">{label || alt}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn btn-quiet min-h-0 px-3 py-1.5 text-sm"
              autoFocus
            >
              <FiX aria-hidden="true" /> Close
            </button>
          </div>
          {/* On phones the full-resolution image can be scrolled sideways */}
          <div className="overflow-auto">
            {open && (
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="block h-auto w-full min-w-[900px] md:min-w-0"
              />
            )}
          </div>
        </dialog>
      )}
    </figure>
  );
}
