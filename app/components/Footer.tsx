import { Activity, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-aqua text-ink">
                <Activity size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-white text-lg">
                Dr. Ella Servadio
              </span>
            </a>
            <p className="text-sm text-white/50 mt-4 max-w-xs leading-relaxed">
              Family medicine in Givataim — warm, attentive care for you and your
              whole family.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-white mb-4">Get in touch</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:035050066" className="flex items-center gap-2.5 hover:text-aqua transition-colors">
                  <Phone size={15} strokeWidth={2} className="text-aqua" /> 03-5050066
                </a>
              </li>
              <li>
                <a href="mailto:mishpaha.giv@gmail.com" className="flex items-center gap-2.5 hover:text-aqua transition-colors">
                  <Mail size={15} strokeWidth={2} className="text-aqua" /> mishpaha.giv@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} strokeWidth={2} className="text-aqua" /> Derech Yitzhak Rabin 53, Givataim
              </li>
            </ul>
          </div>

          {/* Hours summary */}
          <div>
            <p className="font-display font-bold text-white mb-4">Clinic hours</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex justify-between max-w-[220px]"><span>Sun · Mon · Wed</span><span className="text-white/80">Morning–afternoon</span></li>
              <li className="flex justify-between max-w-[220px]"><span>Thursday</span><span className="text-white/80">13:00 – 18:00</span></li>
              <li className="flex justify-between max-w-[220px]"><span>Tue · Fri · Sat</span><span className="text-white/40">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© 2026 Dr. Ella Servadio. All rights reserved.</p>
          <p>Maccabi Health Services · License 1-145645</p>
        </div>
      </div>
    </footer>
  );
}
