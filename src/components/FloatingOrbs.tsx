import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary purple orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 91% 58% / 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "60%",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(187 94% 43% / 0.4) 0%, transparent 70%)",
          top: "50%",
          left: "10%",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Pink orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(330 80% 60% / 0.4) 0%, transparent 70%)",
          bottom: "10%",
          right: "20%",
          filter: "blur(50px)",
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(270 91% 58% / 0.5) 0%, transparent 70%)",
          top: "70%",
          left: "50%",
          filter: "blur(40px)",
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
