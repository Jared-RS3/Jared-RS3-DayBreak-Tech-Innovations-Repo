import { motion } from "framer-motion";

const metrics = [
  {
    value: "50+",
    label: "Projects Delivered",
    desc: "From MVPs to enterprise platforms",
  },
  {
    value: "99.9%",
    label: "Uptime Architecture",
    desc: "Enterprise-grade reliability",
  },
  {
    value: "10+",
    label: "Industries Served",
    desc: "Fintech, e-commerce, SaaS & more",
  },
  {
    value: "90%+",
    label: "Client Retention",
    desc: "Long-term partners, not one-offs",
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "OpenAI",
  "Shopify",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Next.js",
  "Tailwind CSS",
];

export function TrustSection() {
  return (
    <section className="py-20 border-y border-white/5 relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-1.5">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
              <div className="text-xs text-slate-500">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-12" />

        {/* Tech stack */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-6">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium text-slate-400 bg-navy-800 border border-navy-500 rounded-lg hover:border-pink-500/40 hover:text-slate-200 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
