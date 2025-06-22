
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ProblemStatement() {
  const problems = [
    "Fragmented marketing efforts across multiple agencies",
    "Vanity metrics that don't translate to revenue",
    "Outdated strategies in AI-powered business landscape", 
    "Lack of strategic alignment between teams",
    "Reactive approach instead of predictable growth systems"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
              87% of Growth Strategies
            </span>
            <br />
            <span className="text-white">Become Outdated Within 6 Months</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.08] rounded-xl"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center mt-1">
                  <span className="text-rose-400 text-sm font-bold">✕</span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-rose-500/10 border border-white/[0.15] rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              What if you had a single strategic partner who owns your growth results?
            </h3>
            <p className="text-white/60 text-lg">
              Transform fragmented efforts into systematic, predictable growth with proven frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ProblemStatement };
