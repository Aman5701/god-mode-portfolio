import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface ConversionBadgeProps {
  text: string;
}

const ConversionBadge = ({ text }: ConversionBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
      bg-primary/10 border border-primary/30 backdrop-blur-md"
    >
      <Zap size={14} className="text-primary" />
      <span className="text-xs font-medium text-primary tracking-wide uppercase">
        {text}
      </span>
    </motion.div>
  );
};

export default ConversionBadge;