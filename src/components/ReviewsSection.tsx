import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

// ── Airtable config ──────────────────────────────────────────────────────────
const AIRTABLE_BASE_ID = "appqw8HIqnTiOGWN2";
const AIRTABLE_TABLE_ID = "tbl2R9Fvefi9RFG5p";
const AIRTABLE_VIEW_ID = "viwKLSfHlST8L8bOQ";
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN as string | undefined;

const AIRTABLE_API_URL =
  `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}` +
  `?view=${AIRTABLE_VIEW_ID}`;

// ── Placeholder reviews (shown when no Airtable token is configured) ────────
const PLACEHOLDER_REVIEWS: Review[] = [
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

const NAME_KEYS = ["Name", "Client Name", "Reviewer", "Full Name"];
const COMMENT_KEYS = ["Comments", "Comment", "Review", "Feedback", "Message", "Notes"];
const RATING_KEYS = ["Rating", "Stars", "Score", "Star Rating"];
const ROLE_KEYS = ["Role", "Position", "Title", "Job Title", "Company"];

// ── Types ────────────────────────────────────────────────────────────────────
type AirtableRow = { id: string; fields: Record<string, unknown> };
type Review = { id: string; name: string; comment: string; rating: number; role?: string };

// ── Helpers ───────────────────────────────────────────────────────────────────
function pick(fields: Record<string, unknown>, keys: string[]): string | undefined {
  for (const key of keys) {
    const found = Object.keys(fields).find(
      (k) => k.trim().toLowerCase() === key.toLowerCase()
    );
    if (found) {
      const val = fields[found];
      if (typeof val === "string" && val.trim()) return val.trim();
      if (typeof val === "number") return String(val);
    }
  }
  return undefined;
}

function parseRating(fields: Record<string, unknown>): number {
  const raw = pick(fields, RATING_KEYS);
  if (!raw) return 5;
  const n = Number(raw);
  return Number.isFinite(n) ? Math.min(5, Math.max(1, Math.round(n))) : 5;
}

function mapRow(row: AirtableRow): Review | null {
  const name = pick(row.fields, NAME_KEYS);
  const comment = pick(row.fields, COMMENT_KEYS);
  if (!name || !comment) return null;
  return {
    id: row.id,
    name,
    comment,
    rating: parseRating(row.fields),
    role: pick(row.fields, ROLE_KEYS),
  };
}

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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!AIRTABLE_TOKEN) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchReviews() {
      try {
        const allReviews: Review[] = [];
        let offset: string | undefined;
        do {
          const url = offset
            ? `${AIRTABLE_API_URL}&offset=${offset}`
            : AIRTABLE_API_URL;

          const res = await fetch(url, {
            signal: controller.signal,
            headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
          });

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            throw new Error(
              (body as { error?: { message?: string } })?.error?.message ||
                `Airtable API error ${res.status}`
            );
          }

          const data = (await res.json()) as {
            records: AirtableRow[];
            offset?: string;
          };

          for (const row of data.records) {
            const review = mapRow(row);
            if (review) allReviews.push(review);
          }
          offset = data.offset;
        } while (offset);

        setReviews(allReviews);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
    return () => controller.abort();
  }, []);

  const airtablePublicUrl = `https://airtable.com/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}/${AIRTABLE_VIEW_ID}`;

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
            Real feedback from the people we've worked with, submitted directly and updated live.
          </p>
        </motion.div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card-glass h-52 animate-pulse" />
            ))}
          </div>
        )}

        {/* Placeholder reviews (no token configured) */}
        {!loading && !AIRTABLE_TOKEN && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEHOLDER_REVIEWS.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center">
            <p className="text-sm text-red-400 mb-3">{error}</p>
            <a
              href={airtablePublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-pink-400 hover:text-pink-300 transition-colors"
            >
              View on Airtable <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Reviews grid */}
        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        )}

        {/* Leave a review CTA */}
        {/* {!loading && (
          <div className="text-center mt-12">
            <a
              href={airtablePublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-6 py-2.5 inline-flex"
            >
              Leave a Review <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )} */}
      </div>
    </section>
  );
}

