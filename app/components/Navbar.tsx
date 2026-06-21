"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-playfair text-xl font-semibold text-teal-800 tracking-tight"
        >
          Dr. Ella Servadio
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-500">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-teal-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:035050066"
          className="hidden md:inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Book Appointment
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-stone-600 hover:text-teal-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:035050066"
            className="block text-sm font-medium text-teal-700 mt-2"
          >
            📞 03-5050066
          </a>
        </div>
      )}
    </motion.header>
  );
}
