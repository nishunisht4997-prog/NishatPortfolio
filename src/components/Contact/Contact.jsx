import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaCopy,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import SEOHead from "../SEO/SEOHead";
import { SEO_CONFIGS } from "../SEO/seoConfigs";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("nnishat0079@gmail.com");
    setCopied(true);
    showToast("success", "Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  }, [showToast]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        showToast("error", "Please fill in all fields");
        return;
      }

      setIsSubmitting(true);

      try {
        if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
          // Graceful fallback to mailto if EmailJS credentials are not populated
          window.location.href = `mailto:nnishat0079@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
          showToast("success", "Opening your default email client...");
          setFormData({ name: "", email: "", message: "" });
          return;
        }

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          EMAILJS_PUBLIC_KEY
        );

        showToast("success", "Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS error:", error);
        // Fallback to mailto
        window.location.href = `mailto:nnishat0079@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        showToast("success", "Redirecting to your mail client...");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, showToast]
  );

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Direct Email",
      value: "nnishat0079@gmail.com",
      href: "mailto:nnishat0079@gmail.com",
      action: "Send Email",
    },
    {
      icon: FaPhone,
      label: "Phone / Call",
      value: "+91 7205997890",
      href: "tel:+917205997890",
      action: "Call Now",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Odisha, India",
      href: "https://maps.google.com/?q=Odisha+India",
      action: "View Map",
    },
  ];

  return (
    <>
      <SEOHead {...SEO_CONFIGS.contact} />

      <section className="section-padding py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HiSparkles />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mt-3">
              Looking for a Full-Stack Web Developer for full-time roles, contract work, or bespoke client platforms?
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-neutral-900/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-neutral-800/80 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Fill in your details below and I'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-sm transition-all"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-sm transition-all"
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 text-sm transition-all resize-none"
                      placeholder="Tell me about your project, team, or opportunity..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-neutral-950 font-bold hover:scale-[1.01] shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="text-sm animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right: Direct Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-base group-hover:scale-110 transition-transform">
                      <method.icon />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">{method.label}</p>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {method.value}
                      </p>
                    </div>
                  </div>

                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline flex-shrink-0"
                  >
                    {method.action}
                  </a>
                </div>
              ))}

              {/* Quick Copy Email Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400">Quick Copy</p>
                  <p className="text-xs font-mono text-neutral-200 mt-0.5">
                    nnishat0079@gmail.com
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <FaCopy className="text-[11px]" />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href="https://www.linkedin.com/in/nishat-anjum-a10668206"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-transparent border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 font-medium">LinkedIn Network</p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Connect with Nishat Anjum
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Connect ↗
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl backdrop-blur-md text-sm font-medium ${
                toast.type === "success"
                  ? "bg-emerald-950/90 text-emerald-300 border border-emerald-500/30"
                  : "bg-red-950/90 text-red-300 border border-red-500/30"
              }`}
            >
              {toast.type === "success" ? (
                <FaCheckCircle className="text-emerald-400" />
              ) : (
                <FaTimes className="text-red-400" />
              )}
              <span>{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

export default Contact;
