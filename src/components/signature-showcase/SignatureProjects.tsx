"use client";

import { motion } from "framer-motion";

import SignatureProjectCard from "./SignatureProjectCard";

const signatureProjects = [
  {
    id: "marea-resort",

    title: "Maréa Resort Experience",

    category: "Luxury Hospitality Platform",

    description:
      "An immersive luxury resort platform designed to elevate digital hospitality experiences through cinematic storytelling, AI-powered interactions, and premium booking journeys.",

    image: "/images/signatures/marea-resort.png",

    features: [
      "AI Concierge",
      "Luxury Booking Flow",
      "Immersive Storytelling",
      "Premium UX",
    ],

    liveUrl: "https://luxury-embrace.lovable.app/",
  },

  {
    id: "aurelia-jewels",

    title: "Aurelia Jewellery Commerce",

    category: "Luxury Commerce Experience",

    description:
      "A high-end jewellery platform crafted to showcase premium collections, increase customer engagement, and create a cinematic luxury shopping experience.",

    image: "/images/signatures/aurelia-jewels.png",

    features: [
      "Luxury Product Showcase",
      "WhatsApp Commerce",
      "Premium Mobile UX",
      "Bridal Campaign Funnels",
    ],

    liveUrl: "https://jewel-sales-machine.vercel.app/",
  },
];

const SignatureProjects = () => {
  return (
    <section
      id="signature-projects"
      className="
        relative
        py-36
        overflow-hidden
        border-t border-white/5
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-5xl mb-28">
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
                Signature Experiences
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
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              mb-10
            "
          >
            Crafting immersive platforms for luxury brands, modern businesses,
            and AI-powered experiences.
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
            Selected digital experiences engineered with cinematic storytelling,
            intelligent systems, premium design aesthetics, and modern web
            technologies.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-36">
          {signatureProjects.map((project, index) => (
            <SignatureProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureProjects;
