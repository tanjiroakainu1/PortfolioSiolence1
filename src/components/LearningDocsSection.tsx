import { learningDocsSection } from "../data/portfolioData";
import { ExternalLinkIcon, NavClientDriveIcon } from "../icons";

export function LearningDocsSection() {
  return (
    <section
      id={learningDocsSection.id}
      className="electric-panel electric-panel--learning scroll-mt-[calc(var(--site-header-offset,3rem)+0.35rem)]"
      aria-label="Learning documentation library"
    >
      <div className="learning-docs__head">
        <p className="learning-docs__kicker">
          <span className="learning-docs__kicker-dot" aria-hidden />
          {learningDocsSection.kicker}
          <span className="learning-docs__kicker-dot" aria-hidden />
        </p>
        <h2 className="electric-section-title learning-docs__title">{learningDocsSection.title}</h2>
        <p className="learning-docs__sub">{learningDocsSection.sub}</p>
      </div>

      <ul className="learning-docs__topics m-0 list-none p-0" aria-label="Topics covered in the library">
        {learningDocsSection.topics.map((topic) => (
          <li key={topic}>
            <span className="learning-docs__topic">{topic}</span>
          </li>
        ))}
      </ul>

      <a
        href={learningDocsSection.href}
        target="_blank"
        rel="noopener noreferrer"
        className="learning-docs__link electric-link-tile"
      >
        <span
          className="learning-docs__link-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1a1a1a]/80 text-action-bright"
          aria-hidden
        >
          <NavClientDriveIcon className="block h-[1.35rem] w-[1.35rem]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="hover-pop-text block text-[clamp(0.88rem,2.3vw,0.96rem)] font-semibold tracking-tight text-slate-50">
            {learningDocsSection.linkLabel}
          </span>
          <span className="mt-1 block font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-muted">
            Google Drive · learning docs only
          </span>
        </span>
        <ExternalLinkIcon className="h-[1.1rem] w-[1.1rem] shrink-0 text-slate-500" aria-hidden />
      </a>
    </section>
  );
}
