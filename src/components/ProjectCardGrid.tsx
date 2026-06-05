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
    <ul className="project-cards__grid project-cards__grid--galaxy m-0 list-none p-0" role="list">
      {items.map((item, index) => (
        <li key={item.href} role="listitem" className="project-cards__wrap">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-cards__card project-cards__card--galaxy group"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <span className="project-cards__thumb">
              <img
                src={projectPreviewUrl(item.href)}
                alt={`${item.label} preview`}
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
              <ExternalLinkIcon className="h-[1rem] w-[1rem]" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Short orbit label for galaxy card tags. */
export function orbitTagFromGroupTitle(title: string): string {
  const primary = title.split("·")[0]?.split("&")[0]?.trim() ?? title;
  if (primary.length <= 22) return primary;
  return `${primary.slice(0, 20).trim()}…`;
}
