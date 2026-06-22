import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import Pulse from "./Pulse";
import { Phone, MapPin, Video } from "lucide-react";

const steps = [
  {
    Icon: Phone,
    title: "Call or book online",
    description:
      "Reach Maccabi's central line at *3555, or book through the Maccabi website or app. Both show open slots instantly.",
  },
  {
    Icon: MapPin,
    title: "Come to the clinic",
    description:
      "Visit us at Derech Yitzhak Rabin 53, Givataim — Floor 5. Fully covered for Maccabi members, with no co-payment.",
  },
  {
    Icon: Video,
    title: "Or meet remotely",
    description:
      "Prefer to stay home? Remote video appointments are available for follow-ups and non-urgent concerns. Just ask.",
  },
];

export default function HowToBook() {
  return (
    <section id="book" className="relative py-28 bg-ink text-white overflow-hidden">
      <div className="aura absolute inset-0 opacity-40 -z-0" />
      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 flex flex-col items-center">
            <Eyebrow tone="light">Getting started</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Three ways in
            </h2>
          </div>
        </FadeIn>

        {/* pulse connector across the steps (desktop) */}
        <div className="hidden md:block absolute left-0 right-0 px-24 top-[238px]">
          <Pulse className="w-full h-6" color="var(--color-aqua)" width={2} duration={2} />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map(({ Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className="relative text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-5">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua text-ink shrink-0">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-white/10 leading-none select-none">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:3555"
              className="inline-flex items-center justify-center gap-2 bg-aqua hover:bg-white text-ink font-bold px-9 py-4 rounded-full transition-colors"
            >
              <Phone size={17} strokeWidth={2.4} /> Call *3555
            </a>
            <a
              href="tel:035050066"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-aqua hover:text-aqua text-white font-semibold px-9 py-4 rounded-full transition-colors"
            >
              Direct line · 03-5050066
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
