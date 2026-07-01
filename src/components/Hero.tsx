import { portraitImageSrc, type Assistant, type Profile } from "../data/portfolioData";

const CHIP_STYLES = [
  "border-white/25 bg-white/10 text-neutral-100",
  "border-white/20 bg-white/8 text-neutral-200",
  "border-neutral-500/40 bg-neutral-500/12 text-neutral-100",
  "border-white/30 bg-white/12 text-white",
  "border-neutral-400/35 bg-neutral-400/10 text-neutral-100",
];

export function Hero({ profile, assistant }: { profile: Profile; assistant: Assistant }) {
  return (
    <header className="portfolio-hero mb-[clamp(0.5rem,1.5vh,1rem)] border-b border-white/10 pb-[clamp(1rem,2.5vh,1.5rem)] pt-[clamp(0.25rem,1vh,0.5rem)]">
      <div className="relative overflow-hidden rounded-xl border border-white/12 bg-[#0a0a0a] p-[clamp(1.25rem,3vw,2rem)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:p-8">
        <div className="relative mx-auto flex w-full max-w-[42rem] flex-col items-center">
          <p className="m-0 mb-5 font-mono text-[clamp(0.62rem,1.8vw,0.72rem)] font-medium uppercase tracking-[0.2em] text-neutral-400">
            {profile.year} · {profile.title}
          </p>

          <div className="portfolio-hero__portrait-wrap">
            <div className="portfolio-hero__portrait-frame">
              <img
                src={portraitImageSrc}
                alt=""
                width={240}
                height={240}
                decoding="async"
                loading="eager"
                className="portfolio-hero__portrait-img"
              />
            </div>
          </div>

          <h1 className="portfolio-hero__title m-0 mt-5 max-w-[22ch] text-balance text-center font-sans text-[clamp(1.85rem,5.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {profile.name}
          </h1>
          <p className="portfolio-hero__tagline mt-3 w-full max-w-[36rem] text-balance px-2 text-center text-[clamp(0.92rem,2.3vw,1.05rem)] font-medium leading-[1.5] text-neutral-300">
            {profile.tagline}
          </p>

          <div className="portfolio-hero__bio mt-6 w-full">
            <div className="portfolio-hero__bio-panel">
              <p className="portfolio-hero__bio-lead">{profile.intro}</p>
              <p className="portfolio-hero__bio-emphasis">{profile.introClosing}</p>
              <div className="portfolio-hero__cta">
                <p className="portfolio-hero__cta-text">{profile.cta}</p>
              </div>
            </div>
          </div>

          <section className="portfolio-hero__stories mt-6 w-full" aria-labelledby="portfolio-hero-stories-title">
            <header className="portfolio-hero__stories-head">
              <span className="portfolio-hero__stories-line" aria-hidden />
              <h2 id="portfolio-hero-stories-title" className="portfolio-hero__stories-title">
                {profile.storyLead}
              </h2>
              <span className="portfolio-hero__stories-line" aria-hidden />
            </header>
            <div className="portfolio-hero__story-grid">
              {profile.developmentStories.map((story, index) => (
                <article key={story.title} className="portfolio-hero__story-card">
                  <div className="portfolio-hero__story-head">
                    <span className="portfolio-hero__story-index" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="portfolio-hero__story-title">{story.title}</h3>
                  </div>
                  <dl className="portfolio-hero__story-steps">
                    <div className="portfolio-hero__story-step">
                      <dt>Client need</dt>
                      <dd>{story.context}</dd>
                    </div>
                    <div className="portfolio-hero__story-step">
                      <dt>What I built</dt>
                      <dd>{story.build}</dd>
                    </div>
                    <div className="portfolio-hero__story-step">
                      <dt>Result</dt>
                      <dd>{story.impact}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#chat"
          className="btn-primary min-h-[44px] px-6 py-2.5 text-[clamp(0.82rem,2.3vw,0.9rem)] no-underline"
        >
          {assistant.name} · {assistant.navSubtitle}
        </a>
        <a
          href="#stack"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-2.5 text-[clamp(0.82rem,2.3vw,0.9rem)] font-semibold text-neutral-100 no-underline transition-[background,border-color,transform] hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
        >
          Stack &amp; tools
        </a>
      </div>

      <p className="mb-2 mt-8 text-center font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-neutral-500">
        {profile.chipsLabel}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {profile.highlights.map((t, i) => (
          <span
            key={t}
            className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[clamp(0.75rem,2.1vw,0.82rem)] font-medium ${CHIP_STYLES[i % CHIP_STYLES.length]}`}
          >
            {t}
          </span>
        ))}
      </div>
    </header>
  );
}
