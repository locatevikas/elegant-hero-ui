
"use client";

import { motion } from "framer-motion";

function ProblemStatement() {
  const problems = [
    "Fragmented marketing across multiple agencies",
    "Vanity metrics instead of revenue results", 
    "Reactive growth instead of systematic scaling"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
              87% of strategies
            </span>
            <br />
            <span className="text-white">become outdated</span>
          </h2>
          <p className="text-white/60 text-xl">within 6 months</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-400 text-sm">✕</span>
              </div>
              <p className="text-white/80 text-lg">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="p-12 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-rose-500/5 backdrop-blur-sm border border-white/[0.08] rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Strategic partnership that owns your growth
            </h3>
            <p className="text-white/60 text-lg">
              Transform fragmented efforts into systematic, predictable revenue growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { ProblemStatement };
