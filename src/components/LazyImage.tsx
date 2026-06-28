import { useEffect, useRef, useState } from "react";

export function LazyImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  sizes,
  rootMargin = "280px",
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  return (
    <img
      ref={ref}
      src={shouldLoad ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading="lazy"
      decoding="async"
      draggable={false}
      onLoad={() => setLoaded(true)}
      className={`lazy-image ${loaded ? "lazy-image--loaded" : "lazy-image--pending"} ${className}`.trim()}
    />
  );
}
