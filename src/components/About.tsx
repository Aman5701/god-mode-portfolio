"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden border-t border-white/5"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
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
                  About • Philosophy
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
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.04em] mb-8"
            >
              I don’t just build websites.
              <span className="block bg-gradient-to-r from-primary via-violet-400 to-cyan-400 bg-clip-text text-transparent mt-3">
                I craft digital experiences.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl"
            >
              My work lives at the intersection of design, engineering, luxury
              branding, and AI innovation. I create immersive digital systems
              that feel cinematic, perform flawlessly, and leave lasting
              impressions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/45 leading-relaxed mb-12 max-w-2xl"
            >
              From AI-powered platforms and luxury business websites to
              intelligent automation systems and premium user experiences —
              every detail is engineered with intention, precision, and
              obsession.
            </motion.p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

              <p className="relative text-2xl md:text-3xl font-medium leading-relaxed text-white/90">
                “The future belongs to digital experiences that feel effortless,
                intelligent, and unforgettable.”
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />

              {/* Floating Blur */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/20 blur-[100px] rounded-full" />

              {/* Content */}
              <div className="relative z-10 space-y-10">
                {/* Item */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary text-2xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Premium Digital Systems
                    </h3>

                    <p className="text-white/55 leading-relaxed">
                      Scalable platforms engineered with modern architecture,
                      performance-first development, and seamless UX.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-2xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      AI & Automation
                    </h3>

                    <p className="text-white/55 leading-relaxed">
                      Intelligent workflows, AI assistants, and automation
                      systems designed to simplify operations and amplify
                      growth.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center text-violet-300 text-2xl">
                    ✦
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Luxury Experience Design
                    </h3>

                    <p className="text-white/55 leading-relaxed">
                      Interfaces inspired by cinematic storytelling, luxury
                      aesthetics, and emotionally engaging interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
