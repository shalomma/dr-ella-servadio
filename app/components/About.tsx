import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import { Stethoscope, Quote } from "lucide-react";

const facts = [
  { value: "He · En", label: "Hebrew & English" },
  { value: "Maccabi", label: "Health Services" },
  { value: "No co-pay", label: "Fully covered" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <FadeIn direction="right">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-x-6 -top-3 bottom-8 rounded-t-[130px] bg-mist -z-10" />
            <div className="relative aspect-[4/5] rounded-t-[130px] rounded-b-[2rem] overflow-hidden shadow-xl">
              {/* Replace with: <Image src="/about.jpg" fill alt="Dr. Ella Servadio" className="object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-b from-aqua/30 via-aqua/50 to-aqua-deep" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-white/90 text-aqua-deep shadow">
                  <Stethoscope size={24} strokeWidth={2} />
                </span>
              </div>
            </div>
            {/* floating quote card */}
            <div className="absolute -bottom-5 -right-3 bg-ink text-white rounded-2xl shadow-xl px-5 py-4 max-w-[220px]">
              <Quote size={16} className="text-aqua mb-1.5" fill="currentColor" strokeWidth={0} />
              <p className="text-sm leading-snug font-medium">
                &ldquo;You&apos;re a whole person — not a chart.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn direction="left" delay={0.1}>
          <Eyebrow>About Dr. Servadio</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-[1.08] mt-4 mb-7">
            Your health,
            <br />
            in caring hands.
          </h2>
          <div className="space-y-4 text-slate leading-relaxed">
            <p>
              Dr. Ella Servadio is a board-certified family medicine specialist
              practicing at Maccabi Health Services in Givataim, bringing expertise
              in both internal and general medicine to every patient she sees.
            </p>
            <p>
              Her approach is simple: listen first. She takes the time to understand
              each patient as a whole person — not just a set of symptoms — and
              builds lasting relationships grounded in trust, transparency, and respect.
            </p>
            <p>
              Whether you need preventive care, management of a chronic condition,
              or just a knowledgeable doctor to turn to, she&apos;s here for you and
              your family.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {facts.map(({ value, label }) => (
              <div
                key={value}
                className="flex-1 min-w-[100px] rounded-2xl bg-sand border border-line px-3 py-4 text-center"
              >
                <p className="font-display text-lg font-bold text-aqua-ink">{value}</p>
                <p className="text-[11px] text-slate mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
