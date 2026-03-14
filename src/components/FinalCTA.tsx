import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-scroll";

export function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.15) 0%, transparent 60%), linear-gradient(180deg, #111827 0%, #1F2937 50%, #111827 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge mb-8 inline-flex">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-white leading-tight mb-8">
            Let's build something{" "}
            <span className="text-pink-500">
              worth
              <span className="block mt-5">building</span>
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Join 50+ startups and businesses who've trusted Daybreak to build
            the right systems and actually get things moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="contact" smooth duration={600} offset={-64}>
              {/* Pulse ring wrapper */}
              <div className="relative inline-flex">
                <span className="absolute inset-0 rounded-xl bg-pink-500/40 animate-pulse-ring" />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary text-base px-8 py-4 rounded-xl relative"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Your Free Consultation
                </motion.button>
              </div>
            </Link>
            <Link to="services" smooth duration={600} offset={-64}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-base px-8 py-4 rounded-xl"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
