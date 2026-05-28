import { motion } from "framer-motion";

interface FloatingMetricsProps {
  label: string;
  value: string;
  delay?: number;
}

const FloatingMetrics = ({
  label,
  value,
  delay = 0,
}: FloatingMetricsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-xl p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/5 opacity-50" />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
};

export default FloatingMetrics;