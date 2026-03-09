import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springCfg = { damping: 22, stiffness: 500, mass: 0.4 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener("mousemove", onMove);

    const bindInteractive = () => {
      document.querySelectorAll("button, a, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindInteractive();
    const observer = new MutationObserver(bindInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []); // eslint-disable-line

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none hidden lg:block">
      {/* Trailing glow ring */}
      <motion.div
        className="absolute rounded-full border border-pink-400/50"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 52 : 36,
          height: hovering ? 52 : 36,
          borderColor: hovering
            ? "rgba(244,114,182,0.8)"
            : "rgba(244,114,182,0.4)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      {/* Exact-position dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-pink-400"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
