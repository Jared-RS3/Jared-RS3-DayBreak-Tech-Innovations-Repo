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

// Flexible field-name matching — covers whatever column names you used
const NAME_KEYS = ["Name", "Client Name", "Reviewer", "Full Name"];
const COMMENT_KEYS = ["Comments", "Comment", "Review", "Feedback", "Message", "Notes"];
const RATING_KEYS = ["Rating", "Stars", "Score", "Star Rating"];
const ROLE_KEYS = ["Role", "Position", "Title", "Job Title", "Company"];

// ── Types ────────────────────────────────────────────────────────────────────
type AirtableRow = {
  id: string;
  fields: Record<string, unknown>;
};

type Review = {
  id: string;
  name: string;
  comment: string;
  rating: number;
  role?: string;
};

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

// ── Sub-components ─────────────────────────────────────────────────────────────
function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
    >
      <Quote className="w-8 h-8 text-pink-500 mb-4 opacity-80" />
      <StarRow count={review.rating} />
      <p className="text-gray-300 flex-1 mb-6 leading-relaxed">
        "{review.comment}"
      </p>
      <div className="border-t border-gray-700 pt-4">
        <p className="font-semibold text-white">{review.name}</p>
        {review.role && (
          <p className="text-sm text-gray-400">{review.role}</p>
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
      setError("VITE_AIRTABLE_TOKEN is not set in your .env file.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchReviews() {
      try {
        // Paginate through all records
        const allReviews: Review[] = [];
        let offset: string | undefined;

        do {
          const url = offset
            ? `${AIRTABLE_API_URL}&offset=${offset}`
            : AIRTABLE_API_URL;

          const res = await fetch(url, {
            signal: controller.signal,
            headers: {
              Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
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
    <section id="reviews" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Real results from real people — submitted directly through Airtable.
          </p>
       
        </motion.div>

        {/* States */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl border border-gray-700 h-52 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-500/30 bg-red-900/20 p-5 text-red-300 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && reviews.length === 0 && (
          <p className="text-gray-400 text-center">
            No reviews found in the Airtable view yet.
          </p>
        )}

        {!loading && !error && reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
