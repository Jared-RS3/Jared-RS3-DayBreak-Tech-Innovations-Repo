import { motion } from "framer-motion";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-900"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top Left Blob – similar to blob-1 */}
        <div className="blob-1 absolute w-[700px] h-[700px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full filter blur-3xl top-[15%] left-[20%] animate-blob"></div>

        {/* Bottom Right Blob – similar to blob-2 */}
        <div className="blob-2 absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full filter blur-3xl bottom-[10%] right-[10%] animate-blob animation-delay-2000"></div>

        {/* Mid Blob – background blend layer like ambient blob */}
        <div className="blob-3 absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-full filter blur-3xl top-[10%] left-[50%] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Ensure you <span className="text-pink-500">Make More</span>, while{" "}
          <span className="text-pink-500">Working Less</span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-all duration-300"
            >
              Get a Custom Quote
            </motion.button>
          </a>
          <a href="#portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-pink-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600/10 transition-all duration-300 border-2 border-pink-500"
            >
              Explore our work
            </motion.button>
          </a>
        </div>
      </div>
      {/* Floating Code Block */}
      <motion.div
        id="floating-code-shape"
        className="absolute bottom-10 transform -translate-x-1/2 z-10"
        animate={{
          rotateY: [0, 5, -5, 5, 0],
          rotateX: [0, 3, -3, 3, 0],
          x: ["0%", "2%", "-2%", "0%"],
          y: ["0%", "3%", "-2%", "0%"],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "center" }}
      >
        <div className="bg-[#1e1e1e] text-white p-4 rounded-xl shadow-xl font-mono text-sm h-[150px] overflow-hidden flex flex-col">
          <div className="bg-[#252526] text-white p-4 rounded-xl shadow-xl font-mono text-sm h-[150px] overflow-hidden flex flex-col whitespace-pre">
            <span>{`<div className='app'>`}</span>
            <span>{`  <h1>Tech That Works For You</h1>`}</span>
            <span>{`      <p>Smart, simple solutions that save time, cut costs`}</span>
            <span>{`      and let you do what you do best.</p>`}</span>
            <span>{`</div>`}</span>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            #floating-code-shape {
              transform: scale(0.7);
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
