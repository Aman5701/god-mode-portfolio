import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative glass rounded-3xl overflow-hidden group"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden block">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent z-10" />

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/30 border border-primary/40 backdrop-blur-sm z-20">
            <Star size={14} className="text-primary fill-primary" />
            <span className="text-xs font-medium text-primary">
              Featured Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-secondary text-sm uppercase tracking-wider font-medium mb-2"
          >
            {project.tagline}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-muted-foreground text-lg mb-6"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* ONLY Live URL Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold 
             text-primary border border-primary/40 bg-primary/10 
             hover:bg-primary/20 hover:border-primary shadow-[0_0_15px_rgba(140,0,255,0.3)] 
             transition-all duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Border-glow hover effect */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, hsl(270 91% 58% / 0.3), hsl(187 94% 43% / 0.3))",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
    </motion.article>
  );
};

export default FeaturedProject;
