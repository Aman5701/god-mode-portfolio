import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aman.shah.26266@gmail.com",
    href: "mailto:aman.shah.26266@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+973 3502 4141 / +91 97443 34927",
    href: "https://wa.me/97335024141",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manama, Bahrain",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary text-sm uppercase tracking-widest font-medium">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="text-foreground">Let's Work </span>
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="glass rounded-2xl p-6 flex items-center gap-6 card-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:glow-purple transition-all duration-300 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg text-foreground font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Additional Info */}
            <ScrollReveal delay={0.3}>
              <div className="glass rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Working Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                  <p>Weekend: Available for urgent projects</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} direction="right">
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
