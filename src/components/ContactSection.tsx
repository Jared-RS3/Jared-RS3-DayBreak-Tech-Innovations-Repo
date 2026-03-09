import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Daybreaktechinnovations@gmail.com",
    href: "mailto:Daybreaktechinnovations@gmail.com",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Cape Town, SA · Ho Chi Minh City, VN",
    href: null,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@daybreak_tech_innovations",
    href: "https://www.instagram.com/daybreak_tech_innovations?igsh=N29xbDNyM3U0ejZp",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:Daybreaktechinnovations@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return (
    <section id="contact" className="py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge mb-5 inline-flex">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Let's <span className="gradient-text">build something</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Tell us about your project and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="card-glass p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-pink-500/10 rounded-xl flex-shrink-0">
                  <info.icon className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-slate-300 hover:text-white transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Response guarantee */}
            <div className="card-glass p-5 border-pink-500/20">
              <p className="text-xs font-semibold text-pink-400 uppercase tracking-wider mb-1">
                Response Time
              </p>
              <p className="text-sm text-slate-300">
                We respond to all inquiries within{" "}
                <span className="text-white font-semibold">24 hours</span>.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-2 card-glass p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <p className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</p>
                <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Company / Project Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-3 text-sm">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
