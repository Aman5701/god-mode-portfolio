"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 40,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        group
      "
    >
      {/* Outer Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[1.8rem]
          bg-primary/30
          blur-2xl
          opacity-70
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* Main Button */}
      <div
        className="
          relative
          w-16
          h-16
          rounded-[1.8rem]
          border
          border-white/10
          bg-[#07070c]/80
          backdrop-blur-2xl
          overflow-hidden
          flex
          items-center
          justify-center
          shadow-[0_10px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Animated Gradient */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            bg-gradient-to-br
            from-primary/20
            via-transparent
            to-cyan-400/20
          "
        />

        {/* Ring */}
        <div
          className="
            absolute
            inset-[6px]
            rounded-[1.3rem]
            border
            border-white/5
          "
        />

        {/* Icon */}
        <ArrowUp
          size={22}
          className="
            relative
            z-10
            text-white/85
            group-hover:-translate-y-1
            transition-all
            duration-300
          "
        />

        {/* Tiny Glow Dot */}
        <div
          className="
            absolute
            top-3
            right-3
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-400
            animate-pulse
          "
        />
      </div>
    </motion.button>
  );
};

export default BackToTop;