import { useState } from "react";

export function LazyImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  sizes,
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  /** When true, loads immediately (above-the-fold gallery rows). */
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      draggable={false}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`lazy-image ${loaded ? "lazy-image--loaded" : "lazy-image--pending"} ${failed ? "lazy-image--error" : ""} ${className}`.trim()}
    />
  );
}
