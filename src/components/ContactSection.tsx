import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@daybreaktechinnovations.com",
    href: "mailto:contact@daybreaktechinnovations.com",
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
    value: "@daybreakweb_",
    href: "https://www.instagram.com/daybreakweb_?igsh=N29xbDNyM3U0ejZp",
  },
];

export function ContactSection() {
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
            Let's build something{" "}
            <span className="text-pink-500">worth building</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Tell us about your project and we'll be in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Airtable form embed */}
          <motion.div
            className="lg:col-span-2 lg:order-2 card-glass p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="https://airtable.com/embed/appqw8HIqnTiOGWN2/pagKxDLrxgk2mOPbZ/form"
              frameBorder="0"
              width="100%"
              height="520"
              style={{ background: "transparent", border: "none" }}
              title="Contact Form"
            />
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            className="flex flex-col gap-4 lg:order-1"
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

        </div>
      </div>
    </section>
  );
}
