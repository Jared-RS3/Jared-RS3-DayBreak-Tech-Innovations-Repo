import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// ── Hardcoded reviews ─────────────────────────────────────────────────────────
const REVIEWS: Review[] = [
  {
    id: "p1",
    name: "",
    role: "Marketing Team, Naughty Berry",
    comment:
      "Daybreak built a powerful giveaway platform that helped us run engaging promotions and grow our audience quickly. The system was smooth, easy for our customers to use, and gave us valuable insights into participation and engagement. It made running campaigns far more efficient and helped us expand our reach online",
    rating: 5,
  },
  {
    id: "p2",
    name: "",
    role: "Founder of Lumi Branding",
    comment:
      "The Daybreak team exceeded our expectations. Their creative approach and advanced tech solutions helped elevate our brand online and gave us tools that save hours of manual work every week",
    rating: 5,
  },
  {
    id: "p3",
    name: "",
    role: "Founder of EON General",
    comment:
      "We partnered with Daybreak Tech Innovations to develop our new website and implement a custom CRM system, and the results exceeded our expectations. The website is modern, fast, and perfectly represents our brand, while the CRM has streamlined how we manage leads, clients, and internal workflows",
    rating: 5,
  },
];

// ── Types ────────────────────────────────────────────────────────────────────
type Review = { id: string; name: string; comment: string; rating: number; role?: string };

// ── Sub-components ────────────────────────────────────────────────────────────
function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      className="card-glass p-6 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <Quote className="w-7 h-7 text-pink-400/40 mb-4" />
      <StarRow count={review.rating} />
      <p className="text-sm text-slate-300 flex-1 mb-5 leading-relaxed italic">
        "{review.comment}"
      </p>
      <div className="border-t border-white/5 pt-4">
        <p className="text-sm font-semibold text-white">{review.name}</p>
        {review.role && (
          <p className="text-xs text-slate-500 mt-0.5">{review.role}</p>
        )}
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 bg-navy-900 relative overflow-hidden">
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
          <span className="section-badge mb-5 inline-flex">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Trusted by teams who{" "}
            <span className="text-pink-500">ship with us</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Real feedback from the people we've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

