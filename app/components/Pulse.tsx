"use client";
import { motion } from "framer-motion";

/**
 * The signature ECG / heartbeat line. Draws itself once on enter.
 * Reused as a hero underline, a booking-path connector, and a section divider.
 */
export default function Pulse({
  className = "",
  color = "var(--color-aqua)",
  width = 2.5,
  duration = 1.5,
}: {
  className?: string;
  color?: string;
  width?: number;
  duration?: number;
}) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M0 13 H64 l5 -9 l6 16 l7 -20 l7 24 l6 -11 H150 l5 -7 l6 10 H240"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </svg>
  );
}
