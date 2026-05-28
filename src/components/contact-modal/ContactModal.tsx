"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    currency: "BHD",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          name_initial: formData.name.charAt(0).toUpperCase(),
          reply_to: formData.email,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          currency: formData.currency,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        projectType: "",
        currency: "BHD",
        budget: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const budgetOptions = {
    BHD: ["100 - 300 BHD", "300 - 700 BHD", "700 - 1500 BHD", "1500+ BHD"],

    INR: ["₹10K - ₹25K", "₹25K - ₹60K", "₹60K - ₹1.2L", "₹1.2L+"],

    AED: [
      "AED 500 - AED 2000",
      "AED 2000 - AED 5000",
      "AED 5000 - AED 10000",
      "AED 10000+",
    ],

    USD: ["$100 - $300", "$300 - $700", "$700 - $1500", "$1500+"],

    EUR: ["€100 - €300", "€300 - €700", "€700 - €1500", "€1500+"],
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-md
            p-6
          "
        >
          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="
    relative
    w-full
    max-w-2xl

    max-h-[92vh]
    overflow-y-auto

    rounded-[2rem]
    border
    border-white/10

    bg-[#07070c]/95
    backdrop-blur-3xl

    p-5
    sm:p-6
    md:p-10

    shadow-[0_0_80px_rgba(139,92,246,0.12)]

    scrollbar-thin
    scrollbar-thumb-white/10
    scrollbar-track-transparent
  "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10" />

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                top-5
                right-5
                w-10
                h-10
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                flex
                items-center
                justify-center
                text-white/60
                hover:text-white
                transition-all
              "
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10">
              {/* Heading */}
              <div className="mb-10">
                <p className="uppercase tracking-[0.3em] text-[11px] text-primary/70 mb-4">
                  Collaboration Inquiry
                </p>

                <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-[-0.04em] mb-4">
                  Build Your Signature Experience.
                </h2>

                <p className="text-white/50 leading-relaxed">
                  Tell me about your vision, business, or idea — let’s create
                  something unforgettable.
                </p>
              </div>

              {/* Success */}
              {success ? (
                <div
                  className="
                    rounded-2xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    p-6
                    text-center
                  "
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Inquiry Sent Successfully
                  </h3>

                  <p className="text-white/60">I’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inputs */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="premium-input"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="premium-input"
                    />
                  </div>

                  {/* Selects */}
                  <div className="relative">
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="
      premium-input
      appearance-none
      bg-[#111118]
      text-white
      pr-14
      cursor-pointer
    "
                    >
                      <option value="" className="bg-[#111118] text-white">
                        Select Project Type
                      </option>

                      <option className="bg-[#111118] text-white">
                        Luxury Website
                      </option>

                      <option className="bg-[#111118] text-white">
                        AI System
                      </option>

                      <option className="bg-[#111118] text-white">
                        Business Platform
                      </option>

                      <option className="bg-[#111118] text-white">
                        Brand Experience
                      </option>

                      <option className="bg-[#111118] text-white">Other</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="
      absolute
      right-5
      top-1/2
      -translate-y-1/2
      text-white/40
      pointer-events-none
    "
                    />
                  </div>

                  <div className="grid grid-cols-[120px_1fr] gap-4">
                    {/* Currency Switch */}
                    <div className="relative">
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="
        premium-input
        appearance-none
        bg-[#111118]
        text-white
        pr-10
        cursor-pointer
      "
                      >
                        <option value="BHD" className="bg-[#111118] text-white">🇧🇭 BHD</option>
                        <option value="INR" className="bg-[#111118] text-white">🇮🇳 INR</option>
                        <option value="AED" className="bg-[#111118] text-white">🇦🇪 AED</option>
                        <option value="USD" className="bg-[#111118] text-white">🇺🇸 USD</option>
                        <option value="EUR" className="bg-[#111118] text-white">🇪🇺 EUR</option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-white/40
        pointer-events-none
      "
                      />
                    </div>

                    {/* Budget Dropdown */}
                    <div className="relative">
                      <select
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="
        premium-input
        appearance-none
        bg-[#111118]
        text-white
        pr-14
        cursor-pointer
      "
                      >
                        <option value="" className="bg-[#111118] text-white">
                          Budget Range
                        </option>

                        {budgetOptions[
                          formData.currency as keyof typeof budgetOptions
                        ].map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="bg-[#111118] text-white"
                          >
                            {option}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={18}
                        className="
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-white/40
        pointer-events-none
      "
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={handleChange}
                    className="premium-input resize-none"
                  />

                  {/* Submit */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    disabled={loading}
                    type="submit"
                    className="
                      group
                      relative
                      w-full
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      px-8
                      py-4
                      rounded-2xl
                      bg-primary
                      text-primary-foreground
                      font-semibold
                      text-lg
                      shadow-[0_0_60px_rgba(139,92,246,0.35)]
                      hover:shadow-[0_0_90px_rgba(139,92,246,0.55)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 to-transparent" />

                    <span className="relative z-10">
                      {loading ? "Sending..." : "Start The Collaboration"}
                    </span>

                    <ArrowUpRight size={20} className="relative z-10" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
