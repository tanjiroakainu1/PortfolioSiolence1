import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import type { DatabaseTechItem } from "../data/databaseScreenshotsImages";
import type { ShowcaseGalleryImage, ShowcaseGallerySectionMeta } from "../data/showcaseGallery";
import { DatabaseTechStackPanel } from "./DatabaseTechStackPanel";
import { LazyImage } from "./LazyImage";

const SWIPE_MIN_PX = 48;

export type ShowcaseGalleryVariant = "system-ui" | "database";

export function ShowcaseImageGallerySection({
  section,
  images,
  variant,
  techStack,
}: {
  section: ShowcaseGallerySectionMeta;
  images: ShowcaseGalleryImage[];
  variant: ShowcaseGalleryVariant;
  techStack?: DatabaseTechItem[];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const suppressBackdropCloseRef = useRef(false);

  const total = images.length;
  const rootClass = `showcase-gallery showcase-gallery--${variant}`;

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : Math.min(i + 1, total - 1)));
  }, [total]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : Math.max(i - 1, 0)));
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    return () => setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null || lightboxIndex === null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end === undefined) return;
    const dx = end - start;
    if (dx < -SWIPE_MIN_PX) {
      suppressBackdropCloseRef.current = true;
      goNext();
      window.setTimeout(() => {
        suppressBackdropCloseRef.current = false;
      }, 450);
    } else if (dx > SWIPE_MIN_PX) {
      suppressBackdropCloseRef.current = true;
      goPrev();
      window.setTimeout(() => {
        suppressBackdropCloseRef.current = false;
      }, 450);
    }
  };

  const onBackdropPointerUp = () => {
    if (suppressBackdropCloseRef.current) return;
    closeLightbox();
  };

  const open = lightboxIndex !== null;
  const current = open ? images[lightboxIndex] : null;
  const canPrev = open && lightboxIndex > 0;
  const canNext = open && lightboxIndex < total - 1;

  return (
    <div id={section.id} className={`${rootClass} scroll-mt-[calc(var(--site-header-offset,3rem)+0.35rem)]`}>
      <header
        className={`showcase-gallery__hero ${variant === "database" && techStack?.length ? "showcase-gallery__hero--split" : ""}`}
      >
        <div className="showcase-gallery__hero-main">
          <p className="showcase-gallery__kicker">
            <span className="showcase-gallery__kicker-dot" aria-hidden />
            {section.kicker}
            <span className="showcase-gallery__kicker-dot" aria-hidden />
          </p>
          <h2 className="showcase-gallery__title">{section.title}</h2>
          <p className="showcase-gallery__sub">{section.sub}</p>
          <p className="showcase-gallery__count" aria-live="polite">
            <span className="showcase-gallery__count-num">{total}</span> {section.countLabel}
          </p>
        </div>

        {variant === "database" && techStack?.length && section.stackTitle && section.stackSub ? (
          <DatabaseTechStackPanel title={section.stackTitle} subtitle={section.stackSub} items={techStack} />
        ) : null}
      </header>

      <section className="electric-panel electric-panel--projects showcase-gallery__panel">
        <div className="showcase-gallery__grid" aria-label={`${section.title} gallery`}>
          {images.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="showcase-gallery__card group"
              aria-label={`Open ${section.title} ${item.number} of ${total} in fullscreen`}
            >
              <div className="showcase-gallery__thumb">
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  priority={i < 6}
                  width={1280}
                  height={800}
                  sizes="(max-width: 419px) 100vw, (max-width: 899px) 50vw, (max-width: 1399px) 33vw, 25vw"
                  className="showcase-gallery__thumb-img"
                />
                <span className="showcase-gallery__thumb-badge" aria-hidden>
                  {item.number}
                </span>
              </div>
              <span className="showcase-gallery__label">
                {variant === "database" ? (
                  <>
                    <span className="showcase-gallery__label-tag">Schema</span>
                    {section.cardLabelPrefix} {item.number}
                  </>
                ) : (
                  <>
                    {section.cardLabelPrefix} {item.number}
                  </>
                )}
              </span>
            </button>
          ))}
        </div>
      </section>

      {open && current ? (
        <>
          <div
            className="fixed inset-0 z-[100] cursor-pointer bg-black/96 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md"
            aria-hidden
            onClick={onBackdropPointerUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />
          <div
            className="fixed inset-0 z-[110] flex max-h-[100dvh] flex-col items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain pointer-events-none px-[max(0.35rem,env(safe-area-inset-left,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pr-[max(0.35rem,env(safe-area-inset-right,0px))] pt-[max(0.65rem,env(safe-area-inset-top,0px))] min-[400px]:px-3 min-[400px]:pb-4 min-[400px]:pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:px-6 sm:pb-6 sm:pt-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Fullscreen ${section.title} image`}
          >
            <button
              type="button"
              className="pointer-events-auto absolute left-[max(0.5rem,env(safe-area-inset-left,0px))] top-[max(0.5rem,env(safe-area-inset-top,0px))] z-[120] flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-2.5 text-[0.8rem] font-semibold text-slate-200 shadow-sm transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400/60 min-[380px]:justify-start min-[380px]:px-3.5 sm:left-[max(0.75rem,env(safe-area-inset-left))] sm:top-[max(0.75rem,env(safe-area-inset-top))] sm:px-4 sm:text-[0.85rem]"
              onClick={closeLightbox}
              aria-label={`Back to ${section.title} gallery`}
            >
              <span className="text-lg leading-none opacity-90" aria-hidden>
                ←
              </span>
              <span className="max-[379px]:sr-only">Back</span>
            </button>

            <button
              type="button"
              className="pointer-events-auto absolute right-[max(0.5rem,env(safe-area-inset-right,0px))] top-[max(0.5rem,env(safe-area-inset-top,0px))] z-[120] flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400/60 sm:right-[max(0.75rem,env(safe-area-inset-right))] sm:top-[max(0.75rem,env(safe-area-inset-top))]"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <span className="text-2xl leading-none" aria-hidden>
                ×
              </span>
            </button>

            <div
              className="pointer-events-auto my-auto flex w-full min-w-0 max-w-[min(100vw-0.5rem,72rem)] shrink-0 flex-col items-stretch justify-center py-2 sm:py-4"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="flex min-h-0 w-full min-w-0 flex-col items-stretch justify-center gap-2 min-[520px]:min-h-[min(70dvh,32rem)] min-[520px]:flex-row min-[520px]:items-center min-[520px]:gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={!canPrev}
                  className="order-2 flex min-h-[44px] w-full shrink-0 items-center justify-center rounded-xl border border-action/30 bg-surface/80 py-2 text-action-bright shadow-sm transition-colors hover:enabled:bg-action/15 disabled:cursor-not-allowed disabled:opacity-35 min-[520px]:order-1 min-[520px]:h-12 min-[520px]:w-11 min-[520px]:min-w-[44px] min-[520px]:max-w-[3rem] sm:h-12 sm:w-12"
                  aria-label="Previous image"
                >
                  <span className="text-xl font-light min-[520px]:text-lg" aria-hidden>
                    ‹
                  </span>
                  <span className="ml-1 text-xs font-medium min-[520px]:sr-only">Previous</span>
                </button>

                <div className="order-1 flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden px-0.5 min-[520px]:order-2 min-[520px]:px-1">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-[min(50dvh,420px)] w-auto max-w-full object-contain object-center shadow-2xl ring-1 ring-white/10 min-[400px]:max-h-[min(58dvh,520px)] min-[520px]:max-h-[min(72dvh,calc(100dvh-10rem))] sm:max-h-[min(78dvh,calc(100dvh-9rem))]"
                    width={1600}
                    height={1000}
                    sizes="100vw"
                    decoding="async"
                    draggable={false}
                  />
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canNext}
                  className="order-3 flex min-h-[44px] w-full shrink-0 items-center justify-center rounded-xl border border-action/30 bg-surface/80 py-2 text-action-bright shadow-sm transition-colors hover:enabled:bg-action/15 disabled:cursor-not-allowed disabled:opacity-35 min-[520px]:h-12 min-[520px]:w-11 min-[520px]:min-w-[44px] min-[520px]:max-w-[3rem] sm:h-12 sm:w-12"
                  aria-label="Next image"
                >
                  <span className="mr-1 text-xs font-medium min-[520px]:sr-only">Next</span>
                  <span className="text-xl font-light min-[520px]:text-lg" aria-hidden>
                    ›
                  </span>
                </button>
              </div>

              <p className="mt-2 shrink-0 px-1 text-center text-[clamp(0.72rem,2.5vw,0.82rem)] tabular-nums leading-snug text-slate-400 sm:mt-3">
                <span className="text-slate-200">{lightboxIndex + 1}</span>
                <span className="text-slate-500"> / {total}</span>
                <span className="mt-0.5 block text-[clamp(0.62rem,2.2vw,0.7rem)] text-slate-600 min-[480px]:mt-0 min-[480px]:inline min-[480px]:before:content-['·_']">
                  Swipe or ← → · Back (top left) or Esc to exit
                </span>
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
