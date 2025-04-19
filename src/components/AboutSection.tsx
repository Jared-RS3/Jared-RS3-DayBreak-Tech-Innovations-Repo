import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

export function AboutSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const isInView = useInView(heroRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
      desc: "Happy clients come back — again and again",
    },
  ];

  return (
    <section
      id="about"
      ref={heroRef}
      className="min-h-screen relative py-20 px-4 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white"
    >
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide uppercase">
            We Make Things Happen
          </h2>
          <p className="text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Crafting innovative solutions and pushing boundaries in the digital
            space. Let's turn ideas into reality!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="flex flex-col items-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-5xl font-bold mb-4">
                {isInView ? (
                  <CountUp end={stat.value} duration={5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>
              <p className="text-xl font-semibold mb-2">{stat.title}</p>
              <p className="text-lg">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
