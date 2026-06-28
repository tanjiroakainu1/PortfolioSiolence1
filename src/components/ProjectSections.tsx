import type { ProjectGroup } from "../data/portfolioData";
import type { ProjectGroupIconKey } from "../data/portfolioData";
import { ProjectGroupIcon } from "../icons";
import { orbitTagFromGroupTitle, ProjectCardGrid } from "./ProjectCardGrid";

function iconKey(group: ProjectGroup): ProjectGroupIconKey {
  return group.icon ?? "globe";
}

export function ProjectSections({ groups }: { groups: ProjectGroup[] }) {
  const totalCount = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="projects-universe">
      <header className="projects-universe__hero">
        <p className="projects-universe__kicker">
          <span className="projects-universe__kicker-dot" aria-hidden />
          My list · production builds
          <span className="projects-universe__kicker-dot" aria-hidden />
        </p>
        <h2 className="projects-universe__title">Live projects</h2>
        <p className="projects-universe__sub">
          {totalCount} shipped links across {groups.length} rows — select any card to open the live demo on Vercel.
        </p>
      </header>

      {groups.map((g) => {
        const key = iconKey(g);
        const orbitTag = orbitTagFromGroupTitle(g.title);
        const cards = g.items.map((item) => ({ ...item, tag: orbitTag }));

        return (
          <section
            key={g.title}
            className="electric-panel electric-panel--projects projects-universe__group"
          >
            <h3 className="electric-section-title electric-section-title--ion projects-universe__group-title">
              <span
                className="projects-universe__group-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/45 bg-gradient-to-br from-violet-500/25 to-violet-500/18 text-violet-100 shadow-ion-sm"
                aria-hidden
              >
                <ProjectGroupIcon name={key} className="h-[1.05rem] w-[1.05rem]" />
              </span>
              <span className="min-w-0 flex-1">{g.title}</span>
              <span className="projects-universe__count" aria-label={`${g.items.length} projects`}>
                {g.items.length}
              </span>
            </h3>
            <ProjectCardGrid items={cards} />
          </section>
        );
      })}
    </div>
  );
}
