import createGlobe from "cobe";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

// Cape Town: -33.9249, 18.4241  |  Ho Chi Minh City: 10.8231, 106.6297
function SpinningGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0.6;
    let animationId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = canvas.offsetWidth * window.devicePixelRatio;
    const globe = createGlobe(canvas, {
      devicePixelRatio: window.devicePixelRatio,
      width: size,
      height: size,
      phi,
      theta: 0.2,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 18000,
      mapBrightness: 5,
      baseColor: [0.25, 0.1, 0.35],
      markerColor: [1, 0.85, 1],
      glowColor: [0.85, 0.25, 0.65],
      markers: [
        { location: [-33.9249, 18.4241], size: 0.06 },   // Cape Town
        { location: [10.8231, 106.6297], size: 0.06 },    // Ho Chi Minh City
      ],
      onRender(state) {
        state.phi = phi;
        phi += 0.003;
        animationId = requestAnimationFrame(() => {});
      },
    });

    return () => {
      globe.destroy();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-square max-w-[380px] mx-auto"
      style={{ width: "100%", maxWidth: 380, aspectRatio: "1 / 1" }}
    />
  );
}

const stats = [
  {
    value: 98,
    suffix: "%",
    title: "On-Time Project Delivery",
    desc: "Consistently meeting deadlines with agile execution",
  },
  {
    value: 10,
    suffix: "+",
    title: "Industries Served",
    desc: "From fintech to e-commerce, SaaS, and healthtech",
  },
  {
    value: 1,
    suffix: "M+",
    title: "End-Users Impacted",
    desc: "Scalable solutions built to perform globally",
  },
  {
    value: 90,
    suffix: "%+",
    title: "Client Retention Rate",
    desc: "Happy clients who keep coming back",
  },
];

export function AboutSection() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: text left, globe right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-white/80 border border-white/30 rounded-full bg-white/10 mb-5">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              We make ambitious
              <span className="text-white underline decoration-pink-200/60"> ideas real</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-5">
              Daybreak Tech Innovations is a next-generation technology
              consultancy helping startups and growing businesses build the
              digital infrastructure they need to thrive.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              From Cape Town to Ho Chi Minh City, our team brings together deep
              technical expertise and a real understanding of how businesses work.
              We build solutions that are fast, scalable, and built to last.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Cape Town, SA", "Ho Chi Minh City, VN", "Remote-First"].map(
                (loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-white/15 border border-white/30 rounded-full"
                  >
                    {loc}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: globe */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SpinningGlobe />
          </motion.div>
        </div>

        {/* Bottom: stats row */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-white mb-2">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.title}
              </div>
              <div className="text-xs text-white/70">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


