import { profile, skills, social, stackSectionTitle } from "../data/portfolioData";
import { showcaseTechLead, projectShowcaseFacebookPosts } from "../data/projectShowcaseTech";
import { SocialIcon } from "../icons";
import { ExpertiseCoverageChart } from "./ExpertiseCoverageChart";
import { StackTechPanel } from "./StackTechPanel";
import { SystemUiSection } from "./SystemUiSection";
import { DatabaseScreenshotsSection } from "./DatabaseScreenshotsSection";

const showcaseFacebookLinks = social.filter((s) => s.network === "facebook");

const showcaseFacebookGridLinks = [...showcaseFacebookLinks, ...projectShowcaseFacebookPosts];

const TRANSACTION_RECEIPTS_HREF = "https://www.facebook.com/share/p/1CqytMvtyU/";
const TRANSACTION_RECEIPTS_LABEL =
  "Transaction receipts of 100+ capstone systems — system development and capstone system development revision";

/** Project showcase — System UI and database galleries, Facebook links, and tech stack. */
export function ProjectShowcaseView() {
  return (
    <section id="view-project-showcase" className="relative z-10" aria-label="Project showcase">
      <div className="relative z-[1] mx-auto w-full max-w-layout px-[max(0.75rem,min(1.5rem,4vw))] py-[clamp(1rem,3.5vw,2rem)] pb-[max(5.5rem,min(7rem,12vw))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-[clamp(1rem,4vw,1.5rem)] sm:pb-[max(6rem,min(7.5rem,10vw))]">
        <header className="showcase-hero mb-[clamp(1rem,3vw,1.5rem)] border-b border-violet-500/15 pb-[clamp(0.85rem,2.5vw,1.25rem)] text-center sm:text-left">
          <p className="showcase-hero__kicker m-0">
            <span className="showcase-hero__kicker-dot" aria-hidden />
            {profile.name}
            <span className="showcase-hero__kicker-dot" aria-hidden />
          </p>
          <h1 className="showcase-hero__title mt-2 bg-gradient-to-br from-white via-violet-100 to-violet-200 bg-clip-text text-[clamp(1.2rem,4.5vw,1.85rem)] font-bold tracking-tight text-transparent">
            Project showcase
          </h1>
          <p className="showcase-hero__lead mx-auto mt-3 max-w-[min(100%,40rem)] text-[clamp(0.8rem,2.2vw,0.92rem)] leading-relaxed text-slate-400 sm:mx-0 lg:max-w-[42rem]">
            {showcaseTechLead}
          </p>

          <nav className="showcase-project-nav" aria-label="Jump to project sections">
            <a className="showcase-project-nav__link" href="#system-ui">
              System UI
            </a>
            <a className="showcase-project-nav__link" href="#database-screenshots">
              Database
            </a>
            <a className="showcase-project-nav__link" href="#project-facebook">
              Facebook
            </a>
            <a className="showcase-project-nav__link" href="#project-stack">
              Tech stack
            </a>
          </nav>
        </header>

        <SystemUiSection />

        <DatabaseScreenshotsSection />

        <div
          id="project-facebook"
          className="relative mx-auto mb-[clamp(1.25rem,3.5vw,2rem)] mt-[clamp(1.5rem,4vw,2rem)] w-full max-w-[min(100%,40rem)] scroll-mt-[calc(var(--site-header-offset,3rem)+0.5rem)] overflow-hidden rounded-[clamp(1rem,2.2vw,1.35rem)] border border-violet-400/22 bg-gradient-to-b from-surface/55 via-page/40 to-[#0a0614]/90 p-[clamp(1rem,2.8vw,1.5rem)] shadow-[0_12px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-inset ring-white/[0.06] backdrop-blur-md sm:mx-0 sm:p-6 lg:max-w-[42rem]"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent"
            aria-hidden
          />
          <p className="m-0 text-[clamp(0.62rem,1.8vw,0.68rem)] font-semibold uppercase tracking-[0.18em] text-violet-200/90">
            Facebook and receipts
          </p>

          <ul className="m-0 mt-4 grid list-none grid-cols-1 gap-3 p-0 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {showcaseFacebookGridLinks.map((link, index) => (
              <li key={link.href} className="min-w-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (opens in new tab)`}
                  className="flex h-full min-h-[5.5rem] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#130a22]/75 px-4 py-4 text-center no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#1877F2]/45 hover:bg-[#1877F2]/[0.08] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35),0_0_28px_rgba(24,119,242,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/55 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/25 to-[#0c64d4]/10 text-[#1877F2] shadow-[0_4px_16px_rgba(24,119,242,0.2)] ring-1 ring-[#1877F2]/30">
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-md bg-page/95 px-1 text-[0.55rem] font-bold tabular-nums text-violet-300 ring-1 ring-violet-400/25">
                      {index + 1}
                    </span>
                    <SocialIcon network="facebook" className="block h-7 w-7" />
                  </span>
                  <span className="text-[clamp(0.85rem,2.2vw,0.95rem)] font-semibold leading-tight tracking-tight text-slate-50">
                    {"network" in link && link.network === "facebook" ? profile.name : link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="relative mt-5 border-t border-white/[0.08] pt-5 sm:mt-6 sm:pt-6">
            <a
              href={TRANSACTION_RECEIPTS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[3.5rem] w-full items-start gap-4 overflow-hidden rounded-2xl border border-fuchsia-400/28 bg-gradient-to-r from-fuchsia-500/[0.09] via-transparent to-violet-500/[0.06] px-4 py-4 no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:border-fuchsia-400/45 hover:shadow-[0_0_32px_rgba(232, 121, 249,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400/55 sm:min-h-[4rem] sm:items-center"
            >
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-fuchsia-400/80 to-violet-400/50 opacity-90" aria-hidden />
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/15 text-[#1877F2] ring-1 ring-[#1877F2]/28">
                <SocialIcon network="facebook" className="block h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1 text-left text-[clamp(0.78rem,2.1vw,0.9rem)] font-medium leading-snug text-fuchsia-50/95 group-hover:text-white">
                {TRANSACTION_RECEIPTS_LABEL}
              </span>
            </a>
          </div>
        </div>

        <section
          id="project-stack"
          className="showcase-project-stack scroll-mt-[calc(var(--site-header-offset,3rem)+0.5rem)]"
          aria-label="Programming languages and frameworks"
        >
          <header className="mb-4 text-center sm:text-left">
            <p className="m-0 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-violet-300/80">
              Stack coverage
            </p>
            <h2 className="m-0 mt-2 text-[clamp(1rem,3vw,1.25rem)] font-bold tracking-tight text-slate-100">
              {stackSectionTitle}
            </h2>
          </header>
          <div className="showcase-stack mx-auto w-full max-w-[min(100%,72rem)] sm:mx-0">
            <ExpertiseCoverageChart variant="embedded" className="showcase-stack__charts" />
            <StackTechPanel
              rows={skills}
              eyebrow={stackSectionTitle}
              className="showcase-stack__list mt-4 sm:mt-5"
              listAriaLabel={`${stackSectionTitle} — delivered projects`}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
