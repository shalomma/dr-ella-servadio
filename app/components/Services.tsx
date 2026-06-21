import FadeIn from "./FadeIn";
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
    <section id="services" className="py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-teal-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What I Offer
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900">
              Services
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="group bg-white rounded-2xl p-7 hover:shadow-md transition-shadow cursor-default h-full">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
