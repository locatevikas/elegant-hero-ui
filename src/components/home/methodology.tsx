
"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, Bot, TrendingUp } from "lucide-react";

function Methodology() {
  const phases = [
    {
      icon: BarChart3,
      number: "01",
      title: "Audit",
      description: "Deep-dive analysis of current state",
      points: ["Growth barriers identification", "Competitive positioning", "Revenue optimization opportunities"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Target,
      number: "02", 
      title: "Alignment",
      description: "Strategic clarity & team synchronization",
      points: ["Vision & messaging alignment", "Team structure optimization", "Success metrics definition"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Bot,
      number: "03",
      title: "Automation", 
      description: "AI-powered workflow implementation",
      points: ["Marketing automation setup", "Lead scoring & nurturing", "Performance tracking systems"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Scale",
      description: "Predictable revenue growth execution", 
      points: ["System optimization", "Performance monitoring", "Continuous improvement"],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#030303] to-[#050505] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            The 4-Phase{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Growth Transformation
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            A systematic approach to scaling your business with strategic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`p-8 bg-gradient-to-br ${phase.color} backdrop-blur-xl border border-white/[0.1] rounded-3xl hover:border-white/[0.2] transition-all duration-500 group-hover:scale-[1.02] h-full`}>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] flex items-center justify-center">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white/20">{phase.number}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-white/70 mb-6 text-lg">
                  {phase.description}
                </p>
                
                <div className="space-y-3">
                  {phase.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/60">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Methodology };
