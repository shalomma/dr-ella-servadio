import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";
import { MapPin, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Sunday",    hours: "09:00 – 14:00", open: true },
  { day: "Monday",    hours: "09:00 – 15:00", open: true },
  { day: "Tuesday",   hours: "Closed",         open: false },
  { day: "Wednesday", hours: "09:00 – 15:00", open: true },
  { day: "Thursday",  hours: "13:00 – 18:00", open: true },
  { day: "Friday",    hours: "Closed",         open: false },
  { day: "Saturday",  hours: "Closed",         open: false },
];

const contacts = [
  {
    Icon: MapPin,
    label: "Clinic Address",
    body: (
      <>
        <p className="text-slate text-sm leading-relaxed">
          Derech Yitzhak Rabin 53, Floor 5<br />
          Givataim, Israel
        </p>
        <a
          href="https://maps.google.com/?q=Derech+Yitzhak+Rabin+53,+Givataim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-aqua-ink text-sm font-semibold mt-2 inline-block hover:underline"
        >
          Open in Google Maps →
        </a>
      </>
    ),
  },
  {
    Icon: Phone,
    label: "Phone",
    body: (
      <a href="tel:035050066" className="text-slate text-sm hover:text-aqua-ink transition-colors">
        03-5050066
      </a>
    ),
  },
  {
    Icon: Mail,
    label: "Email",
    body: (
      <a
        href="mailto:mishpaha.giv@gmail.com"
        className="text-slate text-sm hover:text-aqua-ink transition-colors"
      >
        mishpaha.giv@gmail.com
      </a>
    ),
  },
];

export default function Location() {
  return (
    <section id="location" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 flex flex-col items-center">
            <Eyebrow>Find us</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4">
              Location &amp; hours
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info + Hours */}
          <FadeIn direction="right">
            <div className="space-y-7">
              {contacts.map(({ Icon, label, body }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-mist text-aqua-ink flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-ink mb-1">{label}</p>
                    {body}
                  </div>
                </div>
              ))}

              {/* Hours card */}
              <div className="rounded-3xl bg-sand border border-line p-6">
                <p className="font-display font-bold text-ink mb-3">Office Hours</p>
                <div className="divide-y divide-line">
                  {hours.map(({ day, hours: h, open }) => (
                    <div key={day} className="flex justify-between py-2.5 text-sm">
                      <span className="text-slate">{day}</span>
                      <span className={open ? "text-aqua-ink font-semibold" : "text-mist-deep"}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-lg h-[540px] bg-mist border border-line">
              <iframe
                title="Clinic location"
                src="https://maps.google.com/maps?q=Derech+Yitzhak+Rabin+53,+Givataim,+Israel&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
