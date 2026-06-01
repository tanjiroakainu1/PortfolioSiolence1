import type { ProjectGroup } from "../data/portfolioData";
import type { ProjectGroupIconKey } from "../data/portfolioData";
import { ProjectGroupIcon } from "../icons";
import { orbitTagFromGroupTitle, ProjectCardGrid } from "./ProjectCardGrid";

function iconKey(group: ProjectGroup): ProjectGroupIconKey {
  return group.icon ?? "globe";
}

export function ProjectSections({
  groups,
  featuredCount = 0,
}: {
  groups: ProjectGroup[];
  featuredCount?: number;
}) {
  const galaxyCount = groups.reduce((n, g) => n + g.items.length, 0);
  const totalProjects = galaxyCount + featuredCount;

  return (
    <div className="projects-universe">
      <header className="projects-universe__hero">
        <p className="projects-universe__kicker">
          <span className="projects-universe__kicker-dot" aria-hidden />
          My list · production builds
          <span className="projects-universe__kicker-dot" aria-hidden />
        </p>
        <h2 className="projects-universe__title">Continue watching</h2>
        <p className="projects-universe__sub">
          {featuredCount > 0 ? (
            <>
              {featuredCount} trending titles above · {galaxyCount} more across {groups.length} rows —{" "}
              {totalProjects} live links total. Every card shows a live preview — select to open.
            </>
          ) : (
            <>
              {galaxyCount} shipped links across {groups.length} rows — every card shows a live preview.
            </>
          )}
        </p>
      </header>

      {groups.map((g, groupIndex) => {
        const key = iconKey(g);
        const orbitTag = orbitTagFromGroupTitle(g.title);
        const cards = g.items.map((item) => ({ ...item, tag: orbitTag }));

        return (
          <section
            key={g.title}
            className="electric-panel electric-panel--projects projects-universe__group"
            style={{ animationDelay: `${groupIndex * 80}ms` }}
          >
            <h3 className="electric-section-title electric-section-title--ion projects-universe__group-title">
              <span
                className="projects-universe__group-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-400/45 bg-gradient-to-br from-red-500/25 to-red-500/18 text-red-100 shadow-ion-sm"
                aria-hidden
              >
                <ProjectGroupIcon name={key} className="h-[1.05rem] w-[1.05rem]" />
              </span>
              <span className="min-w-0 flex-1">{g.title}</span>
              <span className="projects-universe__count" aria-label={`${g.items.length} projects`}>
                {g.items.length}
              </span>
            </h3>
            <ProjectCardGrid items={cards} variant="galaxy" />
          </section>
        );
      })}
    </div>
  );
}
