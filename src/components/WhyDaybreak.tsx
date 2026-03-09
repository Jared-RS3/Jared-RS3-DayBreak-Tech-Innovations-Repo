import { motion } from "framer-motion";
import { DollarSign, Layers, Lock, Rocket, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Startup-Friendly Pricing",
    description:
      "Enterprise-quality work at pricing that respects where you are in your journey. No bloated agency retainers.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Rocket,
    title: "AI-First Approach",
    description:
      "Every solution we build starts with the question: where can AI create the biggest leverage for your business?",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Layers,
    title: "Cloud-Native Architecture",
    description:
      "We design for the cloud from day one. Scalable, containerized, and built to grow as your user base does.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Shield,
    title: "Security-First Engineering",
    description:
      "Security is never an afterthought here. We build it into every layer, from infrastructure design right through to code review.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. Our 90%+ client retention rate says more about how we work than anything else we could tell you.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Lock,
    title: "Transparent Communication",
    description:
      "Weekly updates, clear timelines, honest conversations. You always know exactly what's happening and why.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export function WhyDaybreak() {
  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Subtle center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge mb-5 inline-flex">Why Daybreak</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Why ambitious companies
            <br />
            <span className="text-pink-500">choose us</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            We have the technical depth to solve hard problems and the
            business sense to know which ones actually matter.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="card-glass p-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${reason.bg} h-fit flex-shrink-0`}>
                <reason.icon className={`w-5 h-5 ${reason.color}`} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
