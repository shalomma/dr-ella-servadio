"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import Eyebrow from "./Eyebrow";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an email service (e.g. Resend or Formspree)
    setSent(true);
  }

  const inputClass =
    "w-full border border-line bg-sand rounded-2xl px-4 py-3 text-sm text-ink placeholder:text-slate/50 focus:outline-none focus:border-aqua focus:bg-white transition-colors";

  return (
    <section id="contact" className="py-28 bg-sand">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 flex flex-col items-center">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4 mb-4">
              Have a question?
            </h2>
            <p className="text-slate text-sm max-w-md">
              Send a message before booking and we&apos;ll get back to you shortly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {sent ? (
            <div className="bg-white border border-mist-deep rounded-3xl p-10 text-center shadow-sm">
              <div className="mx-auto w-12 h-12 rounded-full bg-mist text-aqua-ink grid place-items-center mb-4 text-2xl">
                ✓
              </div>
              <p className="font-display text-ink font-bold text-lg mb-1">
                Thank you for reaching out!
              </p>
              <p className="text-slate text-sm">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_18px_50px_-30px_rgba(13,43,43,0.4)] border border-line p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate uppercase tracking-wide mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate uppercase tracking-wide mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wide mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-aqua hover:bg-aqua-deep text-white py-3.5 rounded-2xl font-bold text-sm transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
