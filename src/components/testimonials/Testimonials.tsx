"use client";

import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Aman understands how to make digital products feel cinematic, luxurious, and incredibly modern. The level of polish and detail was exceptional.",

    name: "Creative Director",

    role: "Luxury Hospitality Brand",

    company: "Maréa Resorts",
  },

  {
    quote:
      "The experience felt less like a website and more like an immersive digital brand experience. Beautifully engineered from every angle.",

    name: "Founder",

    role: "Premium Jewellery Brand",

    company: "Aurelia Jewels",
  },

  {
    quote:
      "A rare combination of technical precision, visual sophistication, and modern AI thinking. The final product exceeded expectations completely.",

    name: "Managing Partner",

    role: "Automotive Experience Studio",

    company: "Meridian Auto",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="
        relative
        py-24
        overflow-hidden
        border-t border-white/5
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full" />

        {/* Cyan Glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-5xl mb-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex justify-start"
          >
            <div
              className="
      relative
      inline-flex
      items-center
      gap-4
      px-6
      py-3
      rounded-full
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      overflow-hidden
      group
    "
            >
              {/* Glow */}
              <div
                className="
        absolute inset-0
        bg-gradient-to-r
        from-primary/10
        via-violet-500/5
        to-cyan-500/10
        opacity-0
        group-hover:opacity-100
        transition duration-700
      "
              />

              {/* Animated Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        relative
        w-3 h-3
        rounded-full
        bg-primary
        shadow-[0_0_20px_rgba(139,92,246,0.8)]
      "
              />

              {/* Divider */}
              <div className="w-10 h-[1px] bg-gradient-to-r from-primary/50 to-cyan-400/50" />

              {/* Text */}
              <span
                className="
        relative
        uppercase
        tracking-[0.35em]
        text-[11px]
        sm:text-xs
        font-medium
        text-white/70
      "
              >
                Selected Impressions
              </span>

              {/* Mini Accent */}
              <div
                className="
        w-2 h-2
        rounded-full
        bg-cyan-400/70
        shadow-[0_0_18px_rgba(34,211,238,0.8)]
      "
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              mb-10
            "
          >
            Designed with intention. Engineered to leave lasting impressions.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              text-lg
              md:text-xl
              text-white/55
              leading-relaxed
              max-w-3xl
            "
          >
            Selected perspectives from collaborators, creative professionals,
            and modern businesses who value immersive digital experiences.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
