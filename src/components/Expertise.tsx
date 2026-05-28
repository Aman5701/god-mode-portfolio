"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Palette, Database, Sparkles, Globe } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    description:
      "Intelligent AI-powered workflows, assistants, and automation systems designed to streamline operations and elevate customer experiences.",
  },

  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Scalable, high-performance web applications engineered using modern technologies with clean architecture and seamless functionality.",
  },

  {
    icon: Palette,
    title: "Luxury UI/UX Design",
    description:
      "Premium interfaces inspired by cinematic storytelling, modern luxury aesthetics, and immersive digital interactions.",
  },

  {
    icon: Database,
    title: "Business Platforms",
    description:
      "Custom dashboards, management systems, admin platforms, and operational tools built for modern digital businesses.",
  },

  {
    icon: Globe,
    title: "Brand Experience Websites",
    description:
      "High-end websites crafted to strengthen digital presence, increase engagement, and position brands at a premium level.",
  },

  {
    icon: Sparkles,
    title: "Conversion-Focused Systems",
    description:
      "Strategic digital experiences engineered to generate leads, improve conversions, and maximize customer interaction.",
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative py-32 overflow-hidden border-t border-white/5"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />

        {/* Cyan Glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mb-20">
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
                Expertise • Services
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

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.04em] mb-8"
          >
            Building systems that blend
            <span className="block bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent mt-3">
              technology, design & intelligence.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-white/55 leading-relaxed max-w-3xl"
          >
            I create premium digital systems engineered for performance, luxury
            brand experiences, intelligent automation, and modern business
            growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  p-8
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />
                </div>

                {/* Blur Orb */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[100px] rounded-full" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                    w-16 h-16
                    rounded-2xl
                    border border-primary/20
                    bg-primary/10
                    flex items-center justify-center
                    mb-8
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/55 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-primary/20 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
