import { featuredProject, otherProjects } from "@/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary text-sm uppercase tracking-widest font-medium">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing my expertise in building 
              modern, scalable web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Project */}
        {featuredProject && (
          <ScrollReveal delay={0.1}>
            <div className="mb-16">
              <FeaturedProject project={featuredProject} />
            </div>
          </ScrollReveal>
        )}

        {/* Other Projects Grid */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-8">More Projects</h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 * index}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
