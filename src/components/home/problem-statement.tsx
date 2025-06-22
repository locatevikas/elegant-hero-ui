
"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingUp } from "lucide-react";

function ProblemStatement() {
  const problems = [
    "Fragmented marketing across multiple agencies",
    "Vanity metrics instead of revenue results", 
    "Reactive growth instead of systematic scaling"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#030303] to-[#050505] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/[0.08] backdrop-blur-sm border border-rose-500/[0.15] rounded-full mb-8">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 text-sm font-medium">The Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">
              87% of strategies
            </span>
            <br />
            <span className="text-white">become outdated</span>
          </h2>
          <p className="text-white/50 text-xl">within 6 months</p>
        </motion.div>

        {/* Problems Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-6 p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl hover:border-red-500/[0.2] hover:bg-red-500/[0.02] transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-rose-500/[0.15] flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/[0.25] transition-colors duration-300">
                    <span className="text-rose-400 text-lg">✕</span>
                  </div>
                  <p className="text-white/70 group-hover:text-white/90 text-lg transition-colors duration-300">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-green-500/[0.03] via-blue-500/[0.03] to-purple-500/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/[0.1] to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/[0.1] to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/[0.08] backdrop-blur-sm border border-green-500/[0.15] rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">The Solution</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Strategic partnership that owns your growth
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Transform fragmented efforts into systematic, predictable revenue growth
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { ProblemStatement };
