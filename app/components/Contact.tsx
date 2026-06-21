"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an email service (e.g. Resend or Formspree)
    setSent(true);
  }

  const inputClass =
    "w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-teal-500 transition-colors";

  return (
    <section id="contact" className="py-28 bg-stone-50">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-teal-700 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Contact
            </h2>
            <p className="text-stone-400 text-sm">
              Have a question before booking? Send a message and we'll get back
              to you shortly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {sent ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
              <p className="text-teal-800 font-semibold text-lg mb-1">
                Thank you for reaching out!
              </p>
              <p className="text-teal-600 text-sm">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
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
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
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
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
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
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3.5 rounded-xl font-medium text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
