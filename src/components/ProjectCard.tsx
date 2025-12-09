import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative glass rounded-2xl overflow-hidden card-hover h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Actual Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs text-secondary uppercase tracking-wider font-medium">
          {project.tagline}
        </span>
        <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
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
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-primary/30" />
      </div>
    </motion.article>
  );
};

export default ProjectCard;
