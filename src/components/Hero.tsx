import { portraitImageSrc, type Assistant, type Profile } from "../data/portfolioData";

const CHIP_STYLES = [
  "border-violet-500/40 bg-violet-600/15 text-violet-100 shadow-[0_0_22px_rgba(168, 85, 247,0.22)]",
  "border-violet-500/35 bg-violet-600/12 text-violet-50 shadow-[0_0_20px_rgba(168, 85, 247,0.18)]",
  "border-white/20 bg-white/8 text-slate-100 shadow-[0_0_16px_rgba(0,0,0,0.35)]",
  "border-netflix/50 bg-netflix/15 text-white shadow-candy-sm",
  "border-accent/40 bg-accent/12 text-white shadow-candy-sm",
];

export function Hero({ profile, assistant }: { profile: Profile; assistant: Assistant }) {
  return (
    <header className="portfolio-hero mb-[clamp(0.25rem,1vh,0.65rem)] border-b border-white/10 pb-[clamp(0.75rem,2vh,1.15rem)] pt-[clamp(0.15rem,0.8vh,0.4rem)] motion-safe:animate-envelope-letter-rise">
      <div className="relative overflow-hidden rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-600/22 via-page/95 to-[#0a0614]/95 p-[clamp(1rem,2.8vw,1.35rem)] shadow-panel ring-1 ring-violet-500/20 backdrop-blur-[2px] sm:p-7">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-action/25 to-transparent blur-3xl motion-safe:animate-galaxy-shimmer"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-gradient-to-tr from-netflix/30 to-transparent blur-3xl motion-safe:animate-galaxy-shimmer"
          style={{ animationDelay: "2s" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula/10 blur-[80px]"
          aria-hidden
        />

        <div className="relative mx-auto flex w-full max-w-[40rem] flex-col items-center antialiased">
          <div className="mb-4 flex w-full max-w-lg items-center justify-center gap-2 text-center sm:mb-5 sm:gap-3">
            <span className="h-px w-8 max-w-[2.5rem] shrink-0 bg-gradient-to-r from-transparent to-violet-400/65 sm:w-12" aria-hidden />
            <p className="m-0 min-w-0 shrink font-display text-[clamp(0.65rem,1.85vw,0.72rem)] font-semibold uppercase tracking-[0.22em] text-violet-200/95">
              {profile.year} · {profile.title}
            </p>
            <span className="h-px w-8 max-w-[2.5rem] shrink-0 bg-gradient-to-l from-transparent to-violet-400/65 sm:w-12" aria-hidden />
          </div>

          <div className="portfolio-hero__portrait-wrap">
            <div className="portfolio-hero__portrait-frame">
              <span className="portfolio-hero__portrait-glow" aria-hidden />
              <span className="portfolio-hero__portrait-ring" aria-hidden />
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

          <h1 className="portfolio-hero__title m-0 max-w-[22ch] text-balance text-center font-netflix text-[clamp(2rem,6vw,2.85rem)] font-normal uppercase leading-[1.05] tracking-[0.02em] text-white">
            {profile.name}
          </h1>
          <p className="portfolio-hero__tagline mt-3 w-full max-w-[36rem] text-balance px-2 text-center font-display text-[clamp(0.88rem,2.3vw,1.05rem)] font-medium leading-[1.42] tracking-[-0.01em] sm:mt-3.5">
            {profile.tagline}
          </p>

          <div className="portfolio-hero__bio">
            <div className="portfolio-hero__bio-panel">
              <p className="portfolio-hero__bio-lead">{profile.intro}</p>
              <p className="portfolio-hero__bio-emphasis">{profile.introClosing}</p>
              <div className="portfolio-hero__cta">
                <span className="portfolio-hero__cta-icon" aria-hidden>
                  ✦
                </span>
                <p className="portfolio-hero__cta-text">{profile.cta}</p>
              </div>
            </div>
          </div>

          <section className="portfolio-hero__stories" aria-labelledby="portfolio-hero-stories-title">
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
                      <dt>Core</dt>
                      <dd>{story.context}</dd>
                    </div>
                    <div className="portfolio-hero__story-step">
                      <dt>Implementation</dt>
                      <dd>{story.build}</dd>
                    </div>
                    <div className="portfolio-hero__story-step">
                      <dt>Outcome</dt>
                      <dd>{story.impact}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="#chat"
          className="btn-primary min-h-[44px] px-5 py-2.5 text-[clamp(0.82rem,2.3vw,0.9rem)] no-underline"
        >
          {assistant.name} · {assistant.navSubtitle}
        </a>
        <a
          href="#stack"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-[clamp(0.82rem,2.3vw,0.9rem)] font-semibold text-slate-100 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-[background,border,transform,box-shadow] hover:-translate-y-0.5 hover:border-action/40 hover:bg-action/10 hover:shadow-action-sm"
        >
          Stack &amp; tools
        </a>
      </div>
      <p className="mb-2 mt-7 text-center font-display text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-muted">
        {profile.chipsLabel}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {profile.highlights.map((t, i) => (
          <span
            key={t}
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[clamp(0.75rem,2.1vw,0.82rem)] font-medium ${CHIP_STYLES[i % CHIP_STYLES.length]}`}
          >
            {t}
          </span>
        ))}
      </div>
    </header>
  );
}
