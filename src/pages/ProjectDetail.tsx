import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const caseStudy = {
    challenge: `The main challenge with ${project.title} was creating a seamless user experience that could handle complex data flows while maintaining exceptional performance. Users needed intuitive interfaces that would work flawlessly across all devices.`,
    solution: `I approached this by implementing a modern architecture using ${project.techStack
      .slice(0, 2)
      .join(
        " and "
      )}, focusing on component reusability and state management. The solution involved careful planning of the data structure and API design.`,
    features: [
      "Responsive design with mobile-first approach",
      "Real-time data synchronization",
      "Optimized performance with lazy loading",
      "Secure authentication and authorization",
      "Intuitive user interface with smooth animations",
    ],
    results: [
      "50% improvement in page load times",
      "95% user satisfaction rating",
      "40% increase in user engagement",
      "Zero critical bugs in production",
    ],
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="neon-strip-top" />
      <div className="neon-strip-bottom" />
      <FloatingOrbs />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <ScrollReveal>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal delay={0.1}>
                <span className="text-secondary text-sm uppercase tracking-wider font-medium">
                  {project.tagline}
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gradient mt-2 mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg glass text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-glow-pink text-primary-foreground font-semibold glow-purple"
                    >
                      View Live
                      <ArrowUpRight size={18} />
                    </motion.a>
                  )}
                  {project.codeUrl && (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-muted-foreground hover:text-foreground font-semibold"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="right">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden glass group">
                  {/* Actual Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent z-10" />
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Case Study */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                <span className="text-gradient">Case Study</span>
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Features & Results */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Results
                  </h3>
                  <ul className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <Zap className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="glass rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Interested in working together?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's discuss your project and see how I can help bring your
                  vision to life.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-glow-pink text-primary-foreground font-semibold text-lg glow-purple"
                  >
                    Get in Touch
                    <ArrowUpRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
