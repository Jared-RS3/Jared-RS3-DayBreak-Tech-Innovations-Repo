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
              <div className="text-4xl lg:text-5xl font-extrabold text-pink-500 mb-1.5">
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
        {/* Marquee — two rows, opposite directions */}
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5 text-center">
            Technologies We Work With
          </p>

          {/* Row 1 — left */}
          <div className="overflow-hidden mask-fade-x">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="inline-flex items-center gap-3 mx-3 shrink-0">
                  <span className="px-4 py-2 text-sm font-medium text-slate-400 bg-navy-800 border border-navy-700/60 rounded-lg hover:border-pink-500/40 hover:text-white transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                  <span className="text-pink-500/25 text-xs">◆</span>
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 — right */}
          <div className="overflow-hidden mask-fade-x">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
                <span key={i} className="inline-flex items-center gap-3 mx-3 shrink-0">
                  <span className="px-4 py-2 text-sm font-medium text-slate-500 bg-navy-800/60 border border-navy-700/40 rounded-lg hover:border-pink-500/30 hover:text-slate-300 transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                  <span className="text-purple-500/20 text-xs">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
