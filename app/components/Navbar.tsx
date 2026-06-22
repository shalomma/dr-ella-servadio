"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, Activity } from "lucide-react";

const links = [
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking",  href: "#book" },
  { label: "Location", href: "#location" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 sm:top-5 inset-x-0 z-50 px-4"
    >
      <nav
        className={`mx-auto max-w-5xl rounded-full text-white flex items-center gap-2 pl-2 pr-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(13,43,43,0.6)]"
            : "bg-ink shadow-[0_18px_50px_-18px_rgba(13,43,43,0.5)]"
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 pl-2 pr-3 py-1 shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-aqua text-ink">
            <Activity size={18} strokeWidth={2.4} />
          </span>
          <span className="font-display font-bold text-[15px] leading-none tracking-tight whitespace-nowrap">
            Dr. Ella Servadio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 mx-auto">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:035050066"
          className="hidden md:inline-flex items-center gap-2 bg-aqua hover:bg-white text-ink text-sm font-bold pl-4 pr-5 py-2.5 rounded-full transition-colors shrink-0"
        >
          <Phone size={15} strokeWidth={2.4} />
          Book
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto grid place-items-center w-10 h-10 rounded-full bg-white/10 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden mx-auto max-w-5xl mt-2 rounded-3xl bg-ink text-white p-3 shadow-xl"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-2xl text-sm font-medium text-white/80 hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:035050066"
            className="mt-2 flex items-center justify-center gap-2 bg-aqua text-ink text-sm font-bold px-4 py-3 rounded-2xl"
          >
            <Phone size={15} strokeWidth={2.4} /> Book · 03-5050066
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
