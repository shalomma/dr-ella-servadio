import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Call or Book Online",
    description:
      "Call Maccabi's central line at *3555, or book online through the Maccabi website or mobile app. Both options let you see available slots instantly.",
  },
  {
    number: "02",
    title: "Come to the Clinic",
    description:
      "Visit us at Derech Yitzhak Rabin 53, Givataim — Floor 5. The visit is fully covered for Maccabi members, with no co-payment required.",
  },
  {
    number: "03",
    title: "Or Meet Remotely",
    description:
      "Remote video appointments are available for follow-ups and non-urgent concerns. Ask for a remote slot when you book.",
  },
];

export default function HowToBook() {
  return (
    <section id="book" className="py-28 bg-teal-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-teal-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Getting Started
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              How to Book
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map(({ number, title, description }, i) => (
            <FadeIn key={number} delay={i * 0.1}>
              <div className="relative pl-2">
                <p className="font-playfair text-7xl font-bold text-teal-600/30 leading-none mb-4 select-none">
                  {number}
                </p>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-teal-200 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 text-center">
            <a
              href="tel:3555"
              className="inline-block bg-white text-teal-800 font-semibold px-10 py-4 rounded-full hover:bg-teal-50 transition-colors text-base"
            >
              Call *3555
            </a>
            <a
              href="tel:035050066"
              className="inline-block border border-teal-500 text-white font-semibold px-10 py-4 rounded-full hover:bg-teal-700 transition-colors text-base"
            >
              Direct: 03-5050066
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
