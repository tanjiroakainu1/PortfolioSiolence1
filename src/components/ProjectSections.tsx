import type { ProjectGroup } from "../data/portfolioData";
import type { ProjectGroupIconKey } from "../data/portfolioData";
import { projectsSection } from "../data/portfolioData";
import { ProjectGroupIcon } from "../icons";
import { orbitTagFromGroupTitle, ProjectCardGrid } from "./ProjectCardGrid";

function iconKey(group: ProjectGroup): ProjectGroupIconKey {
  return group.icon ?? "globe";
}

export function ProjectSections({ groups }: { groups: ProjectGroup[] }) {
  const totalProjects = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="projects-section">
      <header className="projects-section__hero">
        <p className="projects-section__kicker">
          <span className="projects-section__kicker-dot" aria-hidden />
          {projectsSection.kicker}
          <span className="projects-section__kicker-dot" aria-hidden />
        </p>
        <h2 className="projects-section__title">{projectsSection.title}</h2>
        <p className="projects-section__sub">
          {totalProjects} links across {groups.length} categories — {projectsSection.sub}
        </p>
      </header>

      <div className="projects-section__groups">
      {groups.map((g, groupIndex) => {
        const key = iconKey(g);
        const orbitTag = orbitTagFromGroupTitle(g.title);
        const cards = g.items.map((item) => ({ ...item, tag: orbitTag }));

        return (
          <section
            key={g.title}
            className="electric-panel electric-panel--projects projects-section__group"
            style={{ animationDelay: `${groupIndex * 80}ms` }}
            aria-labelledby={`project-group-${groupIndex}`}
          >
            <h3
              id={`project-group-${groupIndex}`}
              className="electric-section-title electric-section-title--ion projects-section__group-title"
            >
              <span
                className="projects-section__group-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/45 bg-gradient-to-br from-violet-500/25 to-violet-500/18 text-violet-100 shadow-ion-sm sm:h-12 sm:w-12"
                aria-hidden
              >
                <ProjectGroupIcon name={key} className="h-[1.2rem] w-[1.2rem] sm:h-[1.35rem] sm:w-[1.35rem]" />
              </span>
              <span className="min-w-0 flex-1">{g.title}</span>
              <span className="projects-section__count" aria-label={`${g.items.length} projects`}>
                {g.items.length}
              </span>
            </h3>
            <ProjectCardGrid
              items={cards}
              eagerPreviewCount={groupIndex < 2 ? 6 : groupIndex < 4 ? 3 : 0}
            />
          </section>
        );
      })}
      </div>
    </div>
  );
}
