import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Slides a single word up from behind an overflow-hidden clip
function W({
  children,
  delay,
  className = "",
}: {
  children: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden leading-none align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900 pt-16"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute w-[700px] h-[700px] bg-gradient-to-r from-pink-500/25 to-purple-500/20 rounded-full blur-3xl top-[15%] left-[20%] animate-blob" />
        <div className="blob-2 absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/25 to-indigo-500/20 rounded-full blur-3xl bottom-[10%] right-[10%] animate-blob animation-delay-2000" />
        <div className="blob-3 absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400/20 to-teal-400/15 rounded-full blur-3xl top-[10%] left-[50%] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Headline — word-by-word reveal */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-[1.15] tracking-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-1">
          <W delay={1.6}>We</W>
          <W delay={1.7}>Ensure</W>
          <W delay={1.8}>you</W>
          <W delay={1.9} className="text-pink-500">Make</W>
          <W delay={2.0} className="text-pink-500">More,</W>
          <W delay={2.1}>while</W>
          <W delay={2.2} className="text-pink-500">Working</W>
          <W delay={2.3} className="text-pink-500">Less</W>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-xl font-semibold text-white mb-10 leading-snug text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 2.5 }}
        >
          Smart, simple solutions that{" "}
          <span className="text-pink-500">save time</span>,{" "}
          <span className="text-pink-500">cut costs</span> and let you do what
          you <span className="text-pink-500">do best</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 2.7 }}
        >
          <Link to="contact" smooth duration={600} offset={-64}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base px-8 py-3 rounded-xl"
            >
              Get a Custom Quote
            </motion.button>
          </Link>
          <Link to="portfolio" smooth duration={600} offset={-64}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-base px-8 py-3 rounded-xl"
            >
              Explore our work
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.7 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-slate-600">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-pink-500/60 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div> */}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
}
