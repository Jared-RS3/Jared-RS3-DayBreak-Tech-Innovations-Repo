import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a focused 30-minute call to understand your business, goals, tech stack, and pain points. No fluff, no hard sell.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    number: "02",
    title: "Technical Audit",
    description:
      "Our team performs a deep-dive review of your current infrastructure, codebase, security posture, and performance bottlenecks.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    number: "03",
    title: "Strategy Roadmap",
    description:
      "We deliver a clear, prioritized action plan covering what to build, what to fix, and what to automate. You get real timelines and honest projections.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "Our engineers execute the roadmap in focused sprints, with weekly demos and transparent updates throughout delivery.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    number: "05",
    title: "Continuous Optimization",
    description:
      "Post-launch, we monitor performance, squash bugs, and iterate based on real data — ensuring your systems keep improving.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge mb-5 inline-flex">How We Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Our <span className="text-pink-500">engagement process</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A straightforward process built around speed and honesty. From your
            first call to launch and beyond, you'll always know exactly where things stand.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Connector arrow (desktop only, not on last step) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-y-px z-10" />
              )}

              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-extrabold ${step.bg} ${step.color} border ${step.border} mb-5 mx-auto lg:mx-0`}
              >
                {step.number}
              </div>
              <div className="text-center lg:text-left px-4 lg:px-0">
                <h3 className={`text-base font-bold mb-2 ${step.color}`}>{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
