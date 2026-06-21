import FadeIn from "./FadeIn";
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

export default function Location() {
  return (
    <section id="location" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-teal-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Find Us
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900">
              Location & Hours
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info + Hours */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 mb-1">Clinic Address</p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Derech Yitzhak Rabin 53, Floor 5<br />
                    Givataim, Israel
                  </p>
                  <a
                    href="https://maps.google.com/?q=Derech+Yitzhak+Rabin+53,+Givataim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 text-sm font-medium mt-2 inline-block hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 mb-1">Phone</p>
                  <a href="tel:035050066" className="text-stone-500 text-sm hover:text-teal-700 transition-colors">
                    03-5050066
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-stone-800 mb-1">Email</p>
                  <a
                    href="mailto:mishpaha.giv@gmail.com"
                    className="text-stone-500 text-sm hover:text-teal-700 transition-colors"
                  >
                    mishpaha.giv@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours table */}
              <div>
                <p className="font-semibold text-stone-800 mb-3">Office Hours</p>
                <div className="divide-y divide-stone-100">
                  {hours.map(({ day, hours: h, open }) => (
                    <div key={day} className="flex justify-between py-2.5 text-sm">
                      <span className="text-stone-600">{day}</span>
                      <span className={open ? "text-teal-700 font-medium" : "text-stone-300"}>
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
            <div className="rounded-3xl overflow-hidden shadow-md h-[500px] bg-stone-100">
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
