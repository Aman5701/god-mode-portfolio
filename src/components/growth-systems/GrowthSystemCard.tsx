import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

import ConversionBadge from "./ConversionBadge";

interface GrowthSystem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;

  features: string[];

  metrics?: {
    label: string;
    value: string;
  }[];

  liveUrl?: string;
}

interface GrowthSystemCardProps {
  system: GrowthSystem;
  index: number;
}

const GrowthSystemCard = ({ system, index }: GrowthSystemCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      h-full
      flex
      flex-col
    "
    >
      {/* Glow */}
      <div
        className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-700
      "
      >
        <div
          className="
          absolute inset-0
          bg-gradient-to-br
          from-primary/10
          via-cyan-500/5
          to-primary/10
        "
        />
      </div>

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={system.image}
          alt={system.title}
          className="
          w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
        />

        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
        />

        {/* Badge */}
        <div className="absolute top-4 right-4 z-20">
          <ConversionBadge text={system.category} />
        </div>

        {/* Floating Metric */}
        {system.metrics?.[0] && (
          <div
            className="
            absolute bottom-4 right-4
            px-4 py-2
            rounded-xl
            bg-black/50
            backdrop-blur-md
            border border-white/10
            z-20
          "
          >
            <p className="text-primary text-xl font-bold">
              {system.metrics[0].value}
            </p>

            <p className="text-[10px] text-white/60 uppercase tracking-wider">
              {system.metrics[0].label}
            </p>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="
          text-2xl font-bold mb-3
          text-white
          group-hover:text-primary
          transition-colors
        "
        >
          {system.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {system.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {system.features.slice(0, 4).map((feature) => (
            <div
              key={feature}
              className="
              flex items-center gap-2
              text-sm text-white/80
            "
            >
              <Sparkles size={13} className="text-primary shrink-0" />

              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between">
          {/* Small Metrics */}
          {system.metrics?.[1] && (
            <div>
              <p className="text-lg font-bold text-primary">
                {system.metrics[1].value}
              </p>

              <p className="text-xs text-muted-foreground">
                {system.metrics[1].label}
              </p>
            </div>
          )}

          {/* CTA */}
          {system.liveUrl && (
            <motion.a
              href={system.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="
              inline-flex items-center gap-2
              px-5 py-3
              rounded-xl
              bg-primary/15
              border border-primary/20
              text-primary
              font-semibold
              hover:bg-primary/20
              transition-all
            "
            >
              View System
              <ExternalLink size={15} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default GrowthSystemCard;