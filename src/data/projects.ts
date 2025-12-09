export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "restaurant-site",
    title: "Restaurant Website",
    tagline: "Modern 1-Page Food Business Site",
    description:
      "A clean, responsive, high-conversion restaurant website with menu highlights, gallery, reviews, and WhatsApp ordering. Optimized for local food businesses.",
    image: "/images/restaurant.png",
    techStack: ["Next.js", "TailwindCSS", "Vercel"],
    liveUrl: "https://restro-land.vercel.app/",
    codeUrl: "https://github.com/Aman5701/flavorflow-sites",
    featured: true,
  },

  {
    id: "gym-site",
    title: "Gym/Fitness Website",
    tagline: "High-Impact Fitness Landing Page",
    description:
      "A bold, motivational fitness website for gyms and trainers. Includes programs, transformations, pricing, gallery, and WhatsApp CTA.",
    image: "/images/gym.png",
    techStack: ["Next.js", "TailwindCSS", "Shadcn/UI"],
    liveUrl: "https://gymmy-land.vercel.app/",
    codeUrl: "https://github.com/aman-5701/gym-launchpad",
    featured: false,
  },

  {
    id: "makeup-artist-site",
    title: "Makeup Artist Website",
    tagline: "Bridal & Glam Makeup Portfolio",
    description:
      "Elegant portfolio for makeup artists with bridal packages, gallery, testimonials, service list, and direct WhatsApp booking.",
    image: "/images/makeup.png",
    techStack: ["Next.js", "TailwindCSS"],
    liveUrl: "https://makeup-land.vercel.app/",
    codeUrl: "https://github.com/Aman5701/glam-site-studio",
    featured: false,
  },

  {
    id: "realestate-site",
    title: "Real Estate Agent Website",
    tagline: "Property Listings & Lead Capture",
    description:
      "Professional real estate agent website with featured listings, services, testimonials, location expertise, and lead form for conversions.",
    image: "/images/realestate.png",
    techStack: ["Next.js", "TailwindCSS"],
    liveUrl: "https://realty-land.vercel.app/",
    codeUrl: "https://github.com/Aman5701/realty-ignite",
    featured: false,
  },

  {
    id: "tutor-site",
    title: "Tutor/Coaching Centre Website",
    tagline: "Education & Coaching Landing Page",
    description:
      "A clean and trustworthy coaching center website with courses, batch timings, results, testimonials, and parent/student contact system.",
    image: "/images/tutor.png",
    techStack: ["Next.js", "TailwindCSS"],
    liveUrl: "https://tutor-land.vercel.app/",
    codeUrl: "https://github.com/Aman5701/tutorsite-accelerator",
    featured: false,
  },

  {
    id: "freelancer-portfolio",
    title: "Freelancer Portfolio",
    tagline: "Personal Brand & Client Conversion Site",
    description:
      "A modern developer portfolio showcasing services, featured projects, skills, testimonials, and strong CTAs for getting clients.",
    image: "/images/portfolio.png",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "https://client-magnet-portfolio.vercel.app/",
    codeUrl: "https://github.com/Aman5701/client-magnet-portfolio",
    featured: false,
  },
];

export const featuredProject = projects.find((p) => p.featured) || projects[0];
export const otherProjects = projects.filter((p) => !p.featured);