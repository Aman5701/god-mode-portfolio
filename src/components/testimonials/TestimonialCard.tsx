"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -2,
      }}
      className="
        group
        relative
        rounded-2xl
        border border-white/8
        bg-white/[0.02]
        backdrop-blur-xl
        px-6
        py-6
        transition-all
        duration-300
        hover:bg-white/[0.04]
      "
    >
      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-cyan-500/[0.03]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote size={22} strokeWidth={1.5} className="text-primary/40" />
        </div>

        {/* Quote */}
        <p
          className="
            text-base
            md:text-lg
            text-white/75
            leading-relaxed
            font-light
            tracking-[-0.01em]
            mb-6
          "
        >
          “{testimonial.quote}”
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Person */}
          <div>
            <h4 className="text-sm font-medium text-white">
              {testimonial.name}
            </h4>

            <p className="text-xs text-white/40 mt-1 tracking-wide">
              {testimonial.role}
            </p>
          </div>

          {/* Company */}
          <div
            className="
              px-3
              py-1.5
              rounded-full
              border border-white/10
              bg-white/[0.03]
            "
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;