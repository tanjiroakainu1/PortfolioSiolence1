import type { Assistant } from "../data/portfolioData";
import type { SocialLink } from "../data/portfolioData";
import { SocialIcon } from "../icons";

export function ContactSection({
  assistant,
  social,
}: {
  assistant: Assistant;
  social: SocialLink[];
}) {
  return (
    <section id="contact" className="electric-panel scroll-mt-24">
      <h2 className="electric-section-title">Contact & social</h2>
      <p className="mb-5 flex flex-wrap items-start gap-3 text-[clamp(0.84rem,2.4vw,0.92rem)] leading-relaxed text-neutral-300">
        <span className="flex shrink-0 gap-2 pt-0.5" aria-hidden>
          <span className="rounded-lg border border-white/15 bg-white/5 p-1.5 text-neutral-200 shadow-ion-sm">
            <SocialIcon network="youtube" className="block" />
          </span>
          <span className="rounded-lg border border-white/15 bg-white/5 p-1.5 text-neutral-200 shadow-ion-sm">
            <SocialIcon network="facebook" className="block" />
          </span>
        </span>
        <span>
          YouTube demos and updates — or message on Facebook for commissions, quotes, and project ideas.
          Open{" "}
          <a href="#chat" className="font-semibold text-white no-underline hover:text-neutral-200 hover:underline">
            <strong>{assistant.name}</strong> {assistant.navSubtitle}
          </a>{" "}
          in the nav anytime — polite help on any topic, plus Raminder’s portfolio when you need it.
        </span>
      </p>
      <ul className="m-0 flex list-none flex-col gap-3 p-0" role="list">
        {social.map((x) => (
          <li key={x.href + x.label} role="listitem">
            <a
              href={x.href}
              target="_blank"
              rel="noopener noreferrer"
              className="electric-link-tile"
            >
              <span className="social-ic flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-black/40 text-neutral-200">
                <SocialIcon network={x.network} className="block" />
              </span>
              <span className="hover-pop-text min-w-0 text-[clamp(0.84rem,2.3vw,0.91rem)] font-semibold tracking-tight">{x.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
