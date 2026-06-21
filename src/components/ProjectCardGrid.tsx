import type { ProjectItem } from "../data/portfolioData";
import { portraitImageSrc } from "../data/portfolioData";
import { ExternalLinkIcon } from "../icons";
import { projectHost, projectPreviewUrl } from "../lib/projectDisplay";

export type ProjectCardItem = ProjectItem & { tag: string };

export function ProjectCardGrid({
  items,
  eagerPreviewCount = 0,
}: {
  items: ProjectCardItem[];
  eagerPreviewCount?: number;
}) {
  return (
    <ul className="project-cards__grid m-0 list-none p-0" role="list">
      {items.map((item, index) => (
        <li key={item.href} role="listitem" className="project-cards__wrap">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-cards__card group"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <span className="project-cards__thumb">
              <img
                src={projectPreviewUrl(item.href)}
                alt={`${item.label} live preview`}
                loading={index < eagerPreviewCount ? "eager" : "lazy"}
                decoding="async"
                referrerPolicy="no-referrer"
                className="project-cards__thumb-img"
                onError={(e) => {
                  e.currentTarget.src = portraitImageSrc;
                }}
              />
              <span className="project-cards__thumb-shine" aria-hidden />
              <span className="project-cards__live-pill">Live</span>
            </span>
            <span className="project-cards__body">
              <span className="project-cards__tag">{item.tag}</span>
              <span className="project-cards__label">{item.label}</span>
              <span className="project-cards__host">{projectHost(item.href)}</span>
            </span>
            <span className="project-cards__arrow" aria-hidden>
              <ExternalLinkIcon className="h-[1.2rem] w-[1.2rem] sm:h-[1.35rem] sm:w-[1.35rem]" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Category label on each card (matches group row, e.g. “Rental, e-voting”). */
export function orbitTagFromGroupTitle(title: string): string {
  const beforeAmp = title.split("&")[0]?.trim() ?? title;
  const primary = beforeAmp.split("·")[0]?.trim() ?? beforeAmp;
  if (primary.length <= 28) return primary;
  return `${primary.slice(0, 26).trim()}…`;
}
