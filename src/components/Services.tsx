import { motion, useMotionValue, useSpring } from "framer-motion";
import { Bot, Code2, Cpu, MessageCircle, Smartphone, Workflow } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Link } from "react-scroll";

// 3-D tilt card wrapper
function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const ry = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(-py * 12);
  };
  const onLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: 1000 }}>
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, smart, and scalable websites built around your goals. Whether you're selling online or running your operations, we make it work.",
    benefits: [
      "E-commerce & storefront builds",
      "Scalable web applications",
      "Performance-optimised delivery",
    ],
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Bot,
    title: "AI Implementation",
    description:
      "Make better decisions and save time by automating repetitive tasks with intelligent AI solutions designed to streamline your workflow and boost performance.",
    benefits: [
      "Custom AI model integration",
      "Intelligent decision engines",
      "Workflow performance boosts",
    ],
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Connect your systems, cut down on manual work, and keep things running smoothly with automation that frees up your team to focus on what matters.",
    benefits: [
      "Cross-system integrations",
      "60%+ reduction in manual tasks",
      "24/7 automated operations",
    ],
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Deliver a seamless experience to your users with beautiful, fast, and reliable mobile apps that drive engagement and keep your brand in their pocket.",
    benefits: [
      "iOS & Android development",
      "Smooth, native-feel UI",
      "Push notifications & analytics",
    ],
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Cpu,
    title: "Custom CRMs",
    description:
      "Manage your customer relationships smarter with a CRM built the way you work. Real-time insights, cleaner sales pipelines, and no more missed follow-ups.",
    benefits: [
      "Real-time sales insights",
      "Automated follow-up workflows",
      "Seamless API integrations",
    ],
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    icon: MessageCircle,
    title: "Chatbots",
    description:
      "Support your customers 24/7 with AI-powered chatbots that answer questions instantly, guide users, and turn conversations into conversions.",
    benefits: [
      "24/7 instant customer support",
      "Lead capture & qualification",
      "Multi-platform deployment",
    ],
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-pink-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge mb-5 inline-flex">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            What we{" "}
            <span className="text-pink-500">do for you</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Smart technology built around how your business actually works.
            We handle the complexity so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((svc) => (
            <motion.div key={svc.title} variants={item}>
              <TiltCard className="card-glass p-6 flex flex-col h-full">
                <div className={`inline-flex p-3 rounded-xl ${svc.iconBg} mb-5 w-fit`}>
                  <svc.icon className={`w-6 h-6 ${svc.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {svc.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {svc.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-pink-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-64}
                  className="inline-flex items-center gap-1.5 text-sm text-pink-400 font-medium hover:text-pink-300 transition-colors cursor-pointer mt-auto"
                >
                  Get started <span className="text-xs">→</span>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
