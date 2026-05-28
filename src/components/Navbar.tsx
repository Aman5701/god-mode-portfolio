import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Signature", href: "#signature-projects" },
  { name: "Systems", href: "#systems" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  // { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-[#07070c]/70
    backdrop-blur-2xl
    border-b
    border-white/5
  "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#home"
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Logo Image */}
            <div className="relative w-14 h-14 shrink-0 overflow-hidden">
              <img
                src="/images/LOGO.png"
                alt="Aman Logo"
                className="
      absolute
      inset-0
      w-full
      h-full
      object-contain
      scale-[2.5]
    "
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center leading-[1]">
              <span
                className="
        text-lg
        md:text-xl
        font-semibold
        tracking-[-0.04em]
        text-white
      "
              >
                Aman
              </span>

              <span
                className="
text-[9px]
tracking-[0.22em]
mt-1
        uppercase
        text-primary/60
      "
              >
                Digital Atelier
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="#contact-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 hover:glow-purple transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.25 }}
          className={`
    md:hidden
    absolute
    top-full
    left-0
    w-full
    z-[999]
    px-4
    pt-3
    ${isOpen ? "block" : "hidden"}
  `}
        >
          <div
            className="
      rounded-3xl
      border
      border-white/10
      bg-[#07070c]/95
      backdrop-blur-3xl
      shadow-[0_20px_80px_rgba(0,0,0,0.65)]
      overflow-hidden
    "
          >
            {/* Links */}
            <div className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
            py-4
            text-lg
            text-white/75
            border-b
            border-white/5
            hover:text-white
            transition-all
          "
                >
                  {link.name}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contact-cta"
                onClick={() => setIsOpen(false)}
                className="
          mt-6
          flex
          items-center
          justify-center
          rounded-2xl
          bg-primary
          text-white
          py-4
          font-semibold
          shadow-[0_0_40px_rgba(139,92,246,0.35)]
        "
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
