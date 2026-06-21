import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <FadeIn direction="right">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100 shadow-lg">
              {/* Replace with: <Image src="/about.jpg" fill alt="Dr. Ella Servadio" className="object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-300 flex items-center justify-center">
                <p className="text-stone-400 text-xs">[ Photo ]</p>
              </div>
            </div>
            {/* Accent stripe */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-3xl border-2 border-teal-200 -z-10" />
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn direction="left" delay={0.1}>
          <p className="text-teal-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            About Dr. Servadio
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-7">
            Your health,<br />in caring hands
          </h2>
          <div className="space-y-4 text-stone-500 leading-relaxed">
            <p>
              Dr. Ella Servadio is a board-certified family medicine specialist
              practicing at Maccabi Health Services in Givataim. She brings expertise
              in both internal and general medicine to every patient she sees.
            </p>
            <p>
              Her approach is simple: listen first. She takes the time to understand
              each patient as a whole person — not just a set of symptoms — and
              builds lasting relationships grounded in trust, transparency, and respect.
            </p>
            <p>
              Whether you need preventive care, management of a chronic condition,
              or just a knowledgeable doctor to turn to, Dr. Servadio is here for
              you and your family.
            </p>
          </div>

          <div className="mt-8 flex gap-8 pt-8 border-t border-stone-100">
            <div>
              <p className="font-playfair text-3xl font-bold text-teal-700">He & En</p>
              <p className="text-xs text-stone-400 mt-1">Hebrew · English</p>
            </div>
            <div className="w-px bg-stone-100" />
            <div>
              <p className="font-playfair text-3xl font-bold text-teal-700">Maccabi</p>
              <p className="text-xs text-stone-400 mt-1">Health Services</p>
            </div>
            <div className="w-px bg-stone-100" />
            <div>
              <p className="font-playfair text-3xl font-bold text-teal-700">Free</p>
              <p className="text-xs text-stone-400 mt-1">No co-pay</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
