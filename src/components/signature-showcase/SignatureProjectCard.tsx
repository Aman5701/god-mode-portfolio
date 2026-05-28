"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface SignatureProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;

  features: string[];

  liveUrl?: string;
}

interface SignatureProjectCardProps {
  project: SignatureProject;
  index: number;
}

const SignatureProjectCard = ({
  project,
  index,
}: SignatureProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative"
    >
      <div
        className={`
          grid lg:grid-cols-2 gap-14 items-center
          ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGE SIDE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-5 bg-gradient-to-r from-primary/20 via-violet-500/10 to-cyan-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700 rounded-[3rem]" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-[500px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
              <span className="uppercase tracking-[0.25em] text-[11px] text-white/70">
                {project.category}
              </span>
            </div>

            {/* Floating Bottom Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-6
                left-6
                right-6
                p-6
                rounded-3xl
                border border-white/10
                bg-black/40
                backdrop-blur-2xl
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-lg font-semibold">
                    Signature Experience
                  </p>

                  <p className="text-white/50 text-sm mt-1">
                    Premium digital platform
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <ArrowUpRight className="text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <div className="relative">

          {/* Tiny Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="uppercase tracking-[0.35em] text-primary/70 text-xs">
              Featured Experience
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              md:text-6xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              mb-8
            "
          >
            {project.title}
          </motion.h3>

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
              mb-10
              max-w-2xl
            "
          >
            {project.description}
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {project.features.map((feature) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Sparkles
                    size={16}
                    className="text-primary"
                  />
                </div>

                <span className="text-white/75">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
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
                shadow-[0_0_50px_rgba(139,92,246,0.3)]
                hover:shadow-[0_0_70px_rgba(139,92,246,0.45)]
                transition-all
                duration-300
              "
            >
              View Experience

              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default SignatureProjectCard;