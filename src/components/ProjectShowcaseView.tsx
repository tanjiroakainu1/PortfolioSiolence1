import { profile, skills, stackSectionTitle } from "../data/portfolioData";
import { showcaseTechLead } from "../data/projectShowcaseTech";
import { ExpertiseCoverageChart } from "./ExpertiseCoverageChart";
import { StackTechPanel } from "./StackTechPanel";

export function ProjectShowcaseView({ hidden }: { hidden: boolean }) {
  return (
    <section
      id="view-project-showcase"
      className="relative z-10"
      aria-label="Project showcase"
      hidden={hidden}
    >
      <div className="relative z-[1] mx-auto w-full max-w-layout px-[max(0.75rem,min(1.5rem,4vw))] py-[clamp(1rem,3.5vw,2rem)] pb-[max(5.5rem,min(7rem,12vw))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:px-[clamp(1rem,4vw,1.5rem)] sm:pb-[max(6rem,min(7.5rem,10vw))]">
        <header className="showcase-hero text-center sm:text-left">
          <p className="showcase-hero__kicker m-0">
            <span className="showcase-hero__kicker-dot" aria-hidden />
            {profile.name}
            <span className="showcase-hero__kicker-dot" aria-hidden />
          </p>
          <h1 className="showcase-hero__title mt-2 bg-gradient-to-br from-white via-red-100 to-red-200 bg-clip-text text-[clamp(1.2rem,4.5vw,1.85rem)] font-bold tracking-tight text-transparent">
            Project showcase
          </h1>
          <p className="showcase-hero__lead mx-auto mt-3 max-w-[min(100%,40rem)] text-[clamp(0.8rem,2.2vw,0.92rem)] leading-relaxed text-slate-400 sm:mx-0 lg:max-w-[42rem]">
            {showcaseTechLead}
          </p>

          <div className="showcase-stack mx-auto mt-5 w-full max-w-[min(100%,72rem)] sm:mx-0">
            <ExpertiseCoverageChart variant="embedded" className="showcase-stack__charts" />
            <StackTechPanel
              rows={skills}
              eyebrow={stackSectionTitle}
              className="showcase-stack__list mt-4 sm:mt-5"
              listAriaLabel={`${stackSectionTitle} — delivered projects`}
            />
          </div>
        </header>
      </div>
    </section>
  );
}
