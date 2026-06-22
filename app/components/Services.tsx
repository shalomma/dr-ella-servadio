import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import {
  Stethoscope,
  HeartPulse,
  Users,
  FlaskConical,
  Video,
  Brain,
} from "lucide-react";

const services = [
  {
    Icon: Stethoscope,
    title: "Preventive Care",
    description:
      "Annual checkups, health screenings, and vaccinations — keeping you well before problems arise.",
  },
  {
    Icon: HeartPulse,
    title: "Chronic Disease Management",
    description:
      "Ongoing care for diabetes, hypertension, thyroid disorders, and other long-term conditions.",
  },
  {
    Icon: Users,
    title: "Family Medicine",
    description:
      "Comprehensive care for every member of your family, from young children to older adults.",
  },
  {
    Icon: FlaskConical,
    title: "Diagnostics & Referrals",
    description:
      "Lab orders, imaging, and specialist referrals — coordinated clearly and followed through.",
  },
  {
    Icon: Video,
    title: "Remote Consultations",
    description:
      "Video appointments available for follow-ups and non-urgent concerns — no travel needed.",
  },
  {
    Icon: Brain,
    title: "Mental Health Support",
    description:
      "Initial assessment and ongoing support for anxiety, depression, and stress-related concerns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 flex flex-col items-center">
            <Eyebrow>What I offer</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4">
              Care for every chapter
            </h2>
            <p className="text-slate mt-4 max-w-lg">
              From a first vaccination to managing a lifelong condition — one
              doctor who knows your story.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="group bg-white rounded-3xl p-7 border border-line hover:border-aqua/40 hover:shadow-[0_18px_40px_-22px_rgba(13,43,43,0.35)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-2xl bg-mist text-aqua-ink flex items-center justify-center mb-5 group-hover:bg-aqua group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{title}</h3>
                <p className="text-slate text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
