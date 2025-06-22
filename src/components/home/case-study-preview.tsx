
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

function CaseStudyPreview() {
  const stats = [
    { value: "25X", label: "Revenue Growth", description: "₹2L → ₹45L monthly" },
    { value: "19X", label: "Facebook ROAS", description: "Performance marketing" },
    { value: "125%", label: "Sales Increase", description: "Manufacturing client" },
    { value: "40+", label: "Properties Sold", description: "Real estate success" }
  ];

  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/[0.08] backdrop-blur-sm border border-green-500/[0.15] rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Proven Results</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            From ₹2L to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              ₹45L Monthly
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12">
            How we transformed a traditional artisan business into a thriving e-commerce success story through strategic excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl hover:border-white/[0.15] transition-all duration-300 text-center group-hover:scale-105 h-full">
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-white/50">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-12 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-white/[0.01] backdrop-blur-xl border border-white/[0.1] rounded-3xl text-center">
            <blockquote className="text-2xl text-white/80 mb-8 leading-relaxed italic">
              "Vikas didn't just improve our marketing. He transformed our entire approach to business. The strategic clarity he brought was game-changing."
            </blockquote>
            <div className="text-white/60">— Artisan E-commerce Founder</div>
            
            <div className="mt-10">
              <Button 
                asChild 
                size="lg" 
                className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.1] transition-all duration-300 px-10 py-4 rounded-full text-lg"
              >
                <Link to="/case-studies" className="flex items-center gap-3">
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { CaseStudyPreview };
