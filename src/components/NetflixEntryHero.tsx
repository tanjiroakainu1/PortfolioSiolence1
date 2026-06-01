import { portraitImageSrc, portfolioEnvelope, profile } from "../data/portfolioData";

function NetflixLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 111 30"
      width={111}
      height={30}
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 8.844c-1.688-.282-3.372-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.874 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-1.687-.156-3.375-.343-5.062-.5v-27h-4.78v27.25c1.313.187 2.625.375 3.937.531l4.905-27.281zm-9.374-4.843l-4.187-11.406-4.156 11.406H57.28L64.03 0h4.406l6.75 22.094h-5.72zm-14.75-9.843c-1.344 0-2.469.125-3.375.375v8.25c.906.25 2.031.375 3.375.375 2.656 0 4.781-1.031 6.375-3.094 1.594-2.063 2.406-4.781 2.406-8.156 0-3.375-.812-6.094-2.406-8.156C50.781 1.031 48.656 0 46 0c-1.344 0-2.469.125-3.375.375V0h-4.781v27.25c1.5.094 3.062.156 4.781.25V9.656c.906-.25 2.031-.375 3.375-.375 2.656 0 4.781 1.031 6.375 3.094 1.594 2.063 2.406 4.781 2.406 8.156 0 3.375-.812 6.094-2.406 8.156-1.594 2.063-3.719 3.094-6.375 3.094zM20.156 0H0v27.25c1.5.094 3.062.156 4.594.343V16.5h11.562V0z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="netflix-entry__play-icon"
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5.14v13.72L18.5 12 8 5.14z" />
    </svg>
  );
}

export function NetflixEntryHero({
  onUnlock,
  unlocking,
  navShake,
}: {
  onUnlock: () => void;
  unlocking: boolean;
  navShake: boolean;
}) {
  return (
    <div
      className={`netflix-entry ${unlocking ? "is-leaving" : ""} ${navShake ? "is-shake" : ""}`}
      aria-label={portfolioEnvelope.screenLabel}
    >
      <div className="netflix-entry__cinema" aria-hidden>
        <div className="netflix-entry__cinema-gradient" />
        <div className="netflix-entry__cinema-noise" />
        <div className="netflix-entry__cinema-scan" />
      </div>

      <header className="netflix-entry__top">
        <NetflixLogo className="netflix-entry__logo motion-safe:animate-netflix-logo-glow" />
        <span className="netflix-entry__badge">{portfolioEnvelope.entryBadge}</span>
      </header>

      <div className="netflix-entry__hero">
        <p className="netflix-entry__eyebrow">{portfolioEnvelope.eyebrow}</p>
        <h1 className="netflix-entry__title">{profile.name}</h1>
        <p className="netflix-entry__role">{portfolioEnvelope.role}</p>
        <p className="netflix-entry__tagline">{portfolioEnvelope.netflixTagline}</p>

        <div className="netflix-entry__meta">
          <span className="netflix-entry__match">98% Match</span>
          <span className="netflix-entry__year">{profile.year}</span>
          <span className="netflix-entry__rating">{portfolioEnvelope.maturityRating}</span>
        </div>
      </div>

      <div className="netflix-entry__profiles">
        <div className="netflix-entry__profile netflix-entry__profile--active">
          <span className="netflix-entry__profile-ring" aria-hidden />
          <img
            src={portraitImageSrc}
            alt=""
            width={72}
            height={72}
            decoding="async"
            className="netflix-entry__profile-img"
          />
          <span className="netflix-entry__profile-name">{portfolioEnvelope.profileLabel}</span>
        </div>
        <div className="netflix-entry__profile netflix-entry__profile--ghost" aria-hidden>
          <span className="netflix-entry__profile-placeholder">
            <span className="netflix-entry__profile-plus">+</span>
          </span>
          <span className="netflix-entry__profile-name">{portfolioEnvelope.addProfileLabel}</span>
        </div>
      </div>

      <div className="netflix-entry__actions">
        <div className="netflix-entry__actions-primary">
          <button
            type="button"
            className={`netflix-entry__play ${navShake ? "is-pulse" : ""}`}
            onClick={onUnlock}
            disabled={unlocking}
            aria-label={portfolioEnvelope.unlockAria}
          >
            <span className="netflix-entry__play-shine" aria-hidden />
            <span className="netflix-entry__play-inner">
              <span className="netflix-entry__play-icon-wrap" aria-hidden>
                <PlayIcon />
              </span>
              <span className="netflix-entry__play-label">{portfolioEnvelope.unlockLabel}</span>
            </span>
          </button>
        </div>
        <button type="button" className="netflix-entry__info" disabled={unlocking} tabIndex={-1} aria-hidden>
          <span className="netflix-entry__info-icon">i</span>
          <span>More info</span>
        </button>
      </div>

      <p className="netflix-entry__hint">{portfolioEnvelope.unlockHint}</p>
      <p className="netflix-entry__note">{portfolioEnvelope.stuckNote}</p>
      <p className="netflix-entry__classified">{portfolioEnvelope.classified}</p>
    </div>
  );
}
