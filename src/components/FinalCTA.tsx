"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import ContactModal from "./contact-modal/ContactModal";

const FinalCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="contact-cta"
      className="
        relative
        py-32
        overflow-hidden
        border-t border-white/5
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[160px] rounded-full" />

        {/* Secondary Glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2.5
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

            <span className="uppercase tracking-[0.3em] text-[11px] text-white/60">
              Let’s Create Something Exceptional
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
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
          Let’s build something unforgettable.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
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
            mx-auto
            mb-14
          "
        >
          From luxury digital experiences and AI-powered systems to premium
          business platforms — let’s turn ambitious ideas into beautifully
          engineered realities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
            mb-14
          "
        >
          {/* Main CTA */}
          <motion.a
            onClick={() => setIsOpen(true)}
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-2xl
              bg-primary
              text-primary-foreground
              font-semibold
              text-lg
              shadow-[0_0_60px_rgba(139,92,246,0.35)]
              hover:shadow-[0_0_80px_rgba(139,92,246,0.5)]
              transition-all
              duration-300
            "
          >
            Start a Project
            <ArrowUpRight size={20} />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919744334927"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-white
              font-medium
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
          >
            <MessageCircle size={18} />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-8
            text-white/40
            text-sm
          "
        >
          <div className="flex items-center gap-3">
            <Mail size={16} />

            <span>aman.shah.26266@gmail.com</span>
          </div>

          <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />

          <div>Bahrain • Available Worldwide</div>
        </motion.div>
      </div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default FinalCTA;
