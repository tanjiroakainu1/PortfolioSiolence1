import { useEffect, useMemo, useState } from "react";
import {
  assistant,
  portfolioEnvelope,
  profile,
} from "../data/portfolioData";
import { lockPageScroll } from "../lib/lockPageScroll";
import { preferLiteEffects } from "../lib/preferLiteEffects";
import { FloatingParticles } from "./FloatingParticles";
import { ExpertiseCoverageChart } from "./ExpertiseCoverageChart";
import { NetflixEntryHero } from "./NetflixEntryHero";
import { usePortfolioUnlock } from "../context/PortfolioUnlockContext";

function GalaxyLoaderBrand() {
  return (
    <div className="galaxy-boot-loader__brand" aria-hidden>
      <span className="galaxy-boot-loader__brand-orbit" />
      <span className="galaxy-boot-loader__brand-glyph">✦</span>
      <span className="galaxy-boot-loader__brand-name">{assistant.name}</span>
    </div>
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
    const interval = window.setInterval(tick, 160);

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
        <div className="mystery-boot-loader__grid netflix-boot-loader__grid" aria-hidden />
      ) : null}
      {!liteMode ? (
        <div className="mystery-boot-loader__nebula netflix-boot-loader__nebula" aria-hidden />
      ) : null}
      {!liteMode ? (
        <div className="mystery-boot-loader__particles" aria-hidden>
          <FloatingParticles variant="chat" />
        </div>
      ) : null}

      <div className="mystery-boot-loader__stage netflix-boot-loader__stage">
        <div className="mystery-boot-loader__card-wrap">
          {!liteMode ? <span className="mystery-boot-loader__card-orbit" aria-hidden /> : null}
          <article className="mystery-boot-loader__card netflix-boot-loader__card">
            <div className="mystery-boot-loader__card-glow" aria-hidden />
            <div className="netflix-boot-loader__card-shine" aria-hidden />
            <GalaxyLoaderBrand />
            <div className="galaxy-boot-loader__eyebrow-wrap">
              <span className="galaxy-boot-loader__eyebrow-line" aria-hidden />
              <p id="netflix-boot-title" className="mystery-boot-loader__eyebrow galaxy-boot-loader__eyebrow">
                {portfolioEnvelope.loadingTitle}
              </p>
              <span className="galaxy-boot-loader__eyebrow-line" aria-hidden />
            </div>

            <div className="mystery-boot-loader__orbit-wrap netflix-boot-loader__orbit" aria-hidden>
              <span className="mystery-boot-loader__ring mystery-boot-loader__ring--outer" />
              <span className="mystery-boot-loader__ring mystery-boot-loader__ring--mid" />
              <span className="mystery-boot-loader__ring mystery-boot-loader__ring--inner" />
              <span className="mystery-boot-loader__emblem netflix-boot-loader__emblem">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2l2.09 6.26L20.18 9.3l-4.77 3.47L16.82 19 12 15.77 7.18 19l1.41-6.23L3.82 9.3l6.09-1.04L12 2z" />
                </svg>
              </span>
            </div>

            <p className="mystery-boot-loader__name netflix-boot-loader__name">{profile.name}</p>
            <p className="mystery-boot-loader__role netflix-boot-loader__role">{portfolioEnvelope.role}</p>

            <div className="mystery-boot-loader__progress netflix-boot-loader__progress">
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
                {!liteMode ? <span className="mystery-boot-loader__scan" aria-hidden /> : null}
              </div>
              <p className="mystery-boot-loader__foot netflix-boot-loader__foot">
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
  const liteMode = useMemo(() => preferLiteEffects(), []);

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
