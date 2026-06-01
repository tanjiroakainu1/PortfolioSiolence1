import { useEffect, useMemo, useState } from "react";
import {
  portraitImageSrc,
  portfolioEnvelope,
  profile,
} from "../data/portfolioData";
import { lockPageScroll } from "../lib/lockPageScroll";
import { FloatingParticles } from "./FloatingParticles";
import { ExpertiseCoverageChart } from "./ExpertiseCoverageChart";
import { NetflixEntryHero } from "./NetflixEntryHero";
import { usePortfolioUnlock } from "../context/PortfolioUnlockContext";

function NetflixLogoMini() {
  return (
    <svg viewBox="0 0 111 30" width={88} height={24} aria-hidden className="text-netflix">
      <path
        fill="currentColor"
        d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 8.844c-1.688-.282-3.372-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.874 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-1.687-.156-3.375-.343-5.062-.5v-27h-4.78v27.25c1.313.187 2.625.375 3.937.531l4.905-27.281zm-9.374-4.843l-4.187-11.406-4.156 11.406H57.28L64.03 0h4.406l6.75 22.094h-5.72zm-14.75-9.843c-1.344 0-2.469.125-3.375.375v8.25c.906.25 2.031.375 3.375.375 2.656 0 4.781-1.031 6.375-3.094 1.594-2.063 2.406-4.781 2.406-8.156 0-3.375-.812-6.094-2.406-8.156C50.781 1.031 48.656 0 46 0c-1.344 0-2.469.125-3.375.375V0h-4.781v27.25c1.5.094 3.062.156 4.781.25V9.656c.906-.25 2.031-.375 3.375-.375 2.656 0 4.781 1.031 6.375 3.094 1.594 2.063 2.406 4.781 2.406 8.156 0 3.375-.812 6.094-2.406 8.156-1.594 2.063-3.719 3.094-6.375 3.094zM20.156 0H0v27.25c1.5.094 3.062.156 4.594.343V16.5h11.562V0z"
      />
    </svg>
  );
}

function DeveloperUnlockLoader({
  onComplete,
  liteMode,
}: {
  onComplete: () => void;
  liteMode: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const duration = portfolioEnvelope.loadingDurationMs;
  const stepIndex = Math.min(
    portfolioEnvelope.loadingSteps.length - 1,
    Math.floor((progress / 100) * portfolioEnvelope.loadingSteps.length)
  );
  const status = portfolioEnvelope.loadingSteps[stepIndex] ?? portfolioEnvelope.loadingSteps[0];
  const pct = Math.round(progress);

  useEffect(() => {
    const unlockScroll = lockPageScroll();
    const start = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      const next = t * 100;
      setProgress((prev) => (Math.abs(next - prev) >= 0.8 ? next : prev));
    };
    tick();
    const interval = window.setInterval(tick, 90);

    const doneTimer = window.setTimeout(onComplete, duration);

    return () => {
      unlockScroll();
      window.clearInterval(interval);
      window.clearTimeout(doneTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`mystery-boot-loader netflix-boot-loader ${liteMode ? "is-lite" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="netflix-boot-title"
      aria-busy="true"
    >
      <div className="mystery-boot-loader__backdrop netflix-boot-loader__backdrop" aria-hidden />
      {!liteMode ? (
        <div className="mystery-boot-loader__particles" aria-hidden>
          <FloatingParticles variant="chat" />
        </div>
      ) : null}

      <div className="mystery-boot-loader__stage netflix-boot-loader__stage">
        <div className="mystery-boot-loader__card-wrap">
          <article className="mystery-boot-loader__card netflix-boot-loader__card">
            <div className="netflix-boot-loader__brand">
              <NetflixLogoMini />
            </div>
            <p id="netflix-boot-title" className="mystery-boot-loader__eyebrow">
              {portfolioEnvelope.loadingTitle}
            </p>

            <div className="mystery-boot-loader__orbit-wrap netflix-boot-loader__portrait-wrap">
              <div className="mystery-boot-loader__portrait">
                <img src={portraitImageSrc} alt="" width={88} height={88} decoding="async" />
              </div>
            </div>

            <p className="mystery-boot-loader__name">{profile.name}</p>
            <p className="mystery-boot-loader__role">{portfolioEnvelope.role}</p>

            <div className="mystery-boot-loader__progress">
              <div className="mystery-boot-loader__progress-head">
                <span className="mystery-boot-loader__status">{status}</span>
                <span className="mystery-boot-loader__pct" aria-live="polite">
                  {pct}
                  <span className="mystery-boot-loader__pct-suffix">%</span>
                </span>
              </div>
              <div
                className="mystery-boot-loader__track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
              >
                <span className="mystery-boot-loader__fill" style={{ width: `${pct}%` }} />
              </div>
              <p className="mystery-boot-loader__foot">
                {pct >= 99 ? portfolioEnvelope.loadingComplete : portfolioEnvelope.classified}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

/** Fixed first-entry screen — Netflix-style intro. Fits viewport; no page scroll. */
export function PortfolioEntryGate() {
  const { loading, startUnlock, completeUnlock, navBlockedTick } = usePortfolioUnlock();
  const [leaving, setLeaving] = useState(false);
  const [navShake, setNavShake] = useState(false);
  const liteMode = useMemo(() => {
    if (typeof window === "undefined") return true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 960px)").matches;
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 6;
    return reducedMotion || (narrow && lowCores);
  }, []);

  useEffect(() => lockPageScroll(), []);

  useEffect(() => {
    if (navBlockedTick === 0) return;
    setNavShake(true);
    const t = window.setTimeout(() => setNavShake(false), 720);
    return () => window.clearTimeout(t);
  }, [navBlockedTick]);

  const handleUnlock = () => {
    setLeaving(true);
    window.setTimeout(startUnlock, 380);
  };

  return (
    <div
      className={`portfolio-entry-screen portfolio-entry-screen--netflix ${liteMode ? "is-lite" : ""}`}
      role="region"
      aria-label={portfolioEnvelope.screenLabel}
    >
      <div className="portfolio-entry-screen__backdrop portfolio-entry-screen__backdrop--netflix" aria-hidden />
      {!liteMode ? (
        <div className="portfolio-entry-screen__particles portfolio-entry-screen__particles--netflix" aria-hidden>
          <FloatingParticles variant="portfolio" />
        </div>
      ) : null}

      <div className="portfolio-entry-screen__frame">
        <p className="portfolio-entry-screen__label portfolio-entry-screen__label--netflix">
          <span className="portfolio-entry-screen__label-dot" aria-hidden />
          {portfolioEnvelope.screenLabel}
          <span className="portfolio-entry-screen__label-dot" aria-hidden />
        </p>

        <div className="portfolio-entry-screen__stage portfolio-entry-screen__stage--netflix">
          <div className="portfolio-entry-screen__envelope-col portfolio-entry-screen__hero-col">
            <NetflixEntryHero
              onUnlock={handleUnlock}
              unlocking={leaving || loading}
              navShake={navShake}
            />
          </div>

          <span className="portfolio-entry-screen__connector portfolio-entry-screen__connector--netflix" aria-hidden>
            <span className="portfolio-entry-screen__connector-line" />
          </span>

          <div className="portfolio-entry-screen__charts-col">
            <ExpertiseCoverageChart variant="gate" className="portfolio-entry-screen__charts expertise-coverage--netflix" />
          </div>
        </div>
      </div>

      {loading ? (
        <DeveloperUnlockLoader
          liteMode={liteMode}
          onComplete={() => {
            completeUnlock();
            window.scrollTo(0, 0);
          }}
        />
      ) : null}
    </div>
  );
}
