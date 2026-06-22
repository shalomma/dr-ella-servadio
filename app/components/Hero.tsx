"use client";
import { motion } from "framer-motion";
import { Star, MapPin, CalendarCheck, Phone, Stethoscope } from "lucide-react";
import Pulse from "./Pulse";

const ease = [0.22, 1, 0.36, 1] as const;
function rise(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.15 + i * 0.09, ease },
  };
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20">
      {/* ambient wash + drifting blobs */}
      <div className="aura absolute inset-0 -z-10" />
      <div className="absolute -z-10 top-24 -left-24 w-80 h-80 rounded-full bg-mist blur-3xl opacity-70 blob-drift" />
      <div className="absolute -z-10 bottom-0 -right-20 w-72 h-72 rounded-full bg-coral/10 blur-3xl blob-drift" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* eyebrow pill */}
        <motion.div {...rise(0)} className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-white border border-line rounded-full pl-2 pr-4 py-1.5 text-sm font-semibold text-slate shadow-sm">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-mist text-aqua-ink">
              <Stethoscope size={13} strokeWidth={2.4} />
            </span>
            Family Medicine · Givataim
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          {...rise(1)}
          className="font-display font-extrabold text-ink leading-[1.08] mt-7 text-xl min-[360px]:text-2xl sm:text-6xl lg:text-7xl"
        >
          I&apos;m Dr. Ella Servadio,
          <br />
          <span className="relative inline-block">
            <span className="text-aqua">your family&apos;s doctor.</span>
            <Pulse className="absolute -bottom-3 left-0 w-full h-4" duration={1.6} />
          </span>
        </motion.h1>

        <motion.p
          {...rise(2)}
          className="text-slate text-lg leading-relaxed max-w-xl mx-auto mt-9"
        >
          Listen first, treat the whole person — not just the symptom.
          Warm, attentive care for every age, right in the heart of Givataim.
        </motion.p>
      </div>

      {/* portrait + flanking chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
        className="relative max-w-md mx-auto mt-14 px-6"
      >
        {/* coral arch outline behind, for depth */}
        <div className="absolute inset-x-10 -top-3 bottom-10 rounded-t-[150px] border-2 border-coral/30 -z-10" />

        {/* arch portrait */}
        <div className="relative mx-auto w-[280px] sm:w-[330px] aspect-[4/5] rounded-t-[150px] rounded-b-[2.25rem] overflow-hidden shadow-[0_30px_60px_-25px_rgba(13,43,43,0.45)]">
          {/* Replace this block with:
              <Image src="/doctor.jpg" fill alt="Dr. Ella Servadio" className="object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-mist via-aqua/40 to-aqua-deep" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="grid place-items-center w-16 h-16 rounded-full bg-white/90 text-aqua-deep shadow-lg">
              <Stethoscope size={28} strokeWidth={2} />
            </span>
            <p className="font-display font-bold text-white text-xl mt-4 drop-shadow-sm">
              Dr. Ella Servadio
            </p>
            <p className="text-white/85 text-xs font-medium mt-1">
              Add portrait → /doctor.jpg
            </p>
          </div>
        </div>

        {/* rating chip — top left */}
        <div className="float-soft absolute -left-1 sm:-left-4 top-10 bg-white rounded-2xl shadow-lg px-4 py-3 text-left">
          <div className="flex gap-0.5 text-amber mb-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-ink text-sm font-bold leading-none">Trusted care</p>
          <p className="text-slate text-[11px] mt-1">Board-certified</p>
        </div>

        {/* location chip — top right */}
        <div className="float-soft-2 absolute -right-1 sm:-right-4 top-24 bg-ink text-white rounded-2xl shadow-lg px-4 py-3 text-left">
          <div className="flex items-center gap-1.5 text-aqua mb-1">
            <MapPin size={13} strokeWidth={2.4} />
            <span className="text-[11px] font-bold uppercase tracking-wide">Maccabi</span>
          </div>
          <p className="text-sm font-semibold leading-none">Givataim Clinic</p>
          <p className="text-white/60 text-[11px] mt-1">No co-pay</p>
        </div>

        {/* segmented Book / Call pill — overlapping bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 flex items-center gap-1 bg-white rounded-full p-1.5 shadow-xl border border-line">
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-aqua hover:bg-aqua-deep text-white text-sm font-bold pl-4 pr-5 py-2.5 rounded-full transition-colors"
          >
            <CalendarCheck size={15} strokeWidth={2.4} />
            Book a visit
          </a>
          <a
            href="tel:035050066"
            className="inline-flex items-center gap-2 text-ink/70 hover:text-ink text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            <Phone size={14} strokeWidth={2.4} />
            Call
          </a>
        </div>
      </motion.div>

      {/* trust strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-20 text-sm text-slate font-medium"
      >
        <span>Hebrew &amp; English</span>
        <span className="w-1 h-1 rounded-full bg-mist-deep" />
        <span>Maccabi Health Services</span>
        <span className="w-1 h-1 rounded-full bg-mist-deep" />
        <span>License 1-145645</span>
      </motion.div>
    </section>
  );
}
