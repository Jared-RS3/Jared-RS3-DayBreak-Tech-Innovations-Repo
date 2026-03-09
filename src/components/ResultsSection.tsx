import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type PortfolioItem = {
  title: string;
  category: string;
  metric: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "AI-Powered Recruitment Platform for Red Academy",
    category: "AI & Web",
    metric: "60% faster hiring",
    image:
      "https://www.dropbox.com/scl/fi/8n34rzp7mq1gil6aalvp5/red_ac.jpeg?rlkey=mrdb8gjvbjuqj1dozsw84ofn0&st=kf2659nf&raw=1",
    description:
      "A custom AI-driven recruitment system for Red Academy, a tech education company focused on transforming raw talent into skilled software engineers.",
    challenge:
      "Red Academy needed a scalable solution to identify and onboard the right candidates for their training programs — faster, smarter, and without the manual bottlenecks of traditional recruiting.",
    solution:
      "We built a recruitment platform powered by AI that automates sourcing, screens applicants using intelligent filters, and provides structured workflows for interview scheduling and feedback.",
    results: [
      "60% reduction in manual screening efforts",
      "3× faster candidate onboarding",
      "40% increase in qualified applicant conversion",
    ],
  },
  {
    title: "AI-Powered Website & Chatbot for Mobile Coffee Catering",
    category: "AI & Web",
    metric: "50% booking automation",
    image:
      "https://www.dropbox.com/scl/fi/rz6h1a9g9ej1pbbzqhvc5/2025-04-06-02.19.30.jpg?rlkey=btln0hyvw1botjfyf2padswep&st=n7xrquj7&raw=1",
    description:
      "A responsive website integrated with an AI chatbot to transform customer engagement for a mobile coffee brand.",
    challenge:
      "The client needed to automate their booking process and provide instant customer support 24/7 without increasing operational overhead.",
    solution:
      "We built a smart AI chatbot that manages inquiries, bookings, and invoicing while integrating fully with their calendar and CRM system.",
    results: [
      "50% reduction in manual booking management",
      "24/7 customer support availability",
      "30% increase in booking conversion rate",
    ],
  },
  {
    title: "E-commerce Platform for Twigs Vintage",
    category: "Web",
    metric: "2× product views",
    image:
      "https://www.dropbox.com/scl/fi/0oezbuj97b3w7yht6pxjo/twigs.jpg?rlkey=vrwoqtv4vypr9tgjhgqljh2ns&st=dq8q410w&raw=1",
    description:
      "A visually striking, mobile-optimized Shopify store for Twigs Vintage — built to showcase curated vintage fashion with seamless checkout.",
    challenge:
      "The client needed a modern online storefront that showcased their unique vintage inventory while offering a seamless shopping experience across devices.",
    solution:
      "We built a responsive e-commerce site using Shopify, complete with custom collection layouts, detailed product pages, and a streamlined cart and checkout flow.",
    results: [
      "2× increase in online product views within first month",
      "35% boost in completed checkouts",
      "120% growth in email subscribers after launch",
    ],
  },
  {
    title: "Web & CRM Platform for Forge Lab Studios",
    category: "Web & CRM",
    metric: "Streamlined operations",
    image:
      "https://www.dropbox.com/scl/fi/ged60ebd4g3j3xkxn0dep/Fls-logo.jpg?rlkey=0yjfnig0eq3xyhy506l5pqtwc&st=2vd0lftj&raw=1",
    description:
      "A business-elegant site plus custom CRM for Forge Lab Studio to manage ad campaigns, shoot schedules, and client deliverables.",
    challenge:
      "Forge Lab Studio needed a digital platform that represented their creative services while streamlining client communication and project management.",
    solution:
      "We designed a campaign-focused website alongside a custom CRM where clients log in to view shoot schedules and project progress — all manageable via an admin dashboard.",
    results: [
      "24/7 client access to project timelines",
      "Centralized admin dashboard for studio operations",
      "Enhanced brand presence through a sleek, campaign-focused website",
    ],
  },
  {
    title: "Website for Lumi Branding",
    category: "Web",
    metric: "Enhanced brand credibility",
    image:
      "https://www.dropbox.com/scl/fi/h5c22ipfeg39iqh6bds28/PHOTO-2025-07-10-19-19-34.jpg?rlkey=tyxa6ep6ut3200cyg28yyx4z7&st=nwup7wum&raw=1",
    description:
      "A sleek, professional website for a corporate branding company showcasing their expertise in creating cohesive brand identities.",
    challenge:
      "Hello Lumi Branding needed a platform to showcase their corporate branding expertise while providing a professional, user-friendly experience for potential clients.",
    solution:
      "We designed and developed a clean, responsive website that highlights their services, portfolio, and brand identity solutions with seamless navigation.",
    results: [
      "Enhanced online brand credibility and presence",
      "Effective showcase of services and portfolio",
      "Clean, professional UX aligned with their corporate brand identity",
    ],
  },
];

function CaseStudyCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="card-glass overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
            item.title.includes("Forge") || item.title.includes("Lumi")
              ? "object-contain bg-white p-4"
              : "object-cover"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-pink-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="px-2.5 py-1 bg-navy-900/80 text-emerald-400 text-xs font-bold rounded-full backdrop-blur-sm border border-emerald-500/20">
            {item.metric}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

        {/* Expandable case study */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-2 pb-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Challenge
                  </h4>
                  <p className="text-sm text-slate-400">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Solution
                  </h4>
                  <p className="text-sm text-slate-400">{item.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Results
                  </h4>
                  <ul className="space-y-1.5">
                    {item.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm text-pink-400 font-medium hover:text-pink-300 transition-colors"
        >
          {expanded ? (
            <>
              Show Less <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              View Case Study <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export function ResultsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? portfolioItems : portfolioItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-28 bg-navy-950 relative overflow-hidden">
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
          <span className="section-badge mb-5 inline-flex">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Results that{" "}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-world outcomes from our partnerships — every project built for
            measurable business impact.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence>
            {visible.map((item, i) => (
              <CaseStudyCard key={item.title} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {portfolioItems.length > 3 && (
          <div className="text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary px-8 py-3"
            >
              {showAll ? "Show Less" : `View All ${portfolioItems.length} Projects`}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
