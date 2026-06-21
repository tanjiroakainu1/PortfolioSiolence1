import type { Assistant } from "../data/portfolioData";
import { contactSection } from "../data/portfolioData";

export function ContactSection({ assistant }: { assistant: Assistant }) {
  return (
    <section id="contact" className="electric-panel scroll-mt-24">
      <h2 className="electric-section-title">{contactSection.title}</h2>
      <p className="m-0 text-[clamp(0.84rem,2.4vw,0.92rem)] leading-relaxed text-slate-300">
        {contactSection.lead}{" "}
        <a href="#chat" className="font-semibold text-action-bright no-underline hover:text-action hover:underline">
          <strong>{assistant.name}</strong> {assistant.navSubtitle}
        </a>{" "}
        {contactSection.leadSuffix}
      </p>
    </section>
  );
}
