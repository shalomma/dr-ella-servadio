"use client";
import { motion } from "framer-motion";

function stagger(i: number) {
  return { duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const };
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-stone-50 flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0)}
            className="text-teal-700 text-sm font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Family Medicine Specialist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(1)}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-6"
          >
            Dr. Ella<br />Servadio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(2)}
            className="text-stone-500 text-lg leading-relaxed max-w-md mb-10"
          >
            Compassionate, comprehensive care for you and your whole family —
            right in the heart of Givataim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(3)}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#book"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="#about"
              className="border border-stone-300 hover:border-teal-600 text-stone-600 hover:text-teal-700 px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex items-center gap-6 text-sm text-stone-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">✓</span>
              Maccabi Health Services
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">✓</span>
              No co-pay
            </span>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Decorative circle behind */}
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-teal-100 -z-10" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-amber-100 -z-10" />

          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-teal-50 relative shadow-xl">
            {/* Replace this div with <Image src="/doctor.jpg" fill alt="Dr. Ella Servadio" className="object-cover" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-300 to-teal-700 flex flex-col items-center justify-end p-8">
              <p className="text-white/50 text-xs">[ Doctor photo goes here ]</p>
            </div>
          </div>

          {/* Floating credential card */}
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-stone-400 leading-none mb-0.5">Certified Specialist</p>
              <p className="text-sm font-semibold text-stone-800">Family Medicine</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
