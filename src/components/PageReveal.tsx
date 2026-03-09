import { AnimatePresence, motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function PageReveal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#08090c" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 8px rgba(236,72,153,0.5))",
                    "drop-shadow(0 0 22px rgba(236,72,153,0.9))",
                    "drop-shadow(0 0 8px rgba(236,72,153,0.5))",
                  ],
                }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-10 h-10 text-pink-500" />
              </motion.div>
              <span className="text-2xl font-bold text-white tracking-tight">
                DayBreak<span className="text-pink-500 font-bold"> Tech-Innovations</span>
              </span>
            </div>

            {/* Loading bar */}
            <div className="w-52 h-px bg-white/8 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #ec4899, #a855f7, #6366f1)",
                }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.34, 1.0, 0.64, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

