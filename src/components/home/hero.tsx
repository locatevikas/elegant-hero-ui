
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
        
        {/* Floating Glass Elements */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-40 right-20 w-24 h-24 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-white/70 text-sm font-medium">Fractional CMO</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Strategic Growth</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Partner
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24"></div>
              <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                25X Revenue Results
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-24"></div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/60 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transforming SaaS, E-commerce & Real Estate companies from ₹10L to ₹50Cr+ revenue through strategic excellence
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white hover:bg-white/[0.15] transition-all duration-300 px-8 py-4 text-base font-medium rounded-full"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Book Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group border-white/[0.15] bg-transparent text-white/90 hover:bg-white/[0.05] backdrop-blur-sm px-8 py-4 text-base font-medium rounded-full"
            >
              <Link to="/case-studies" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                View Results
              </Link>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "25X", label: "Revenue Growth", color: "from-blue-400 to-cyan-400" },
              { value: "19X", label: "ROAS Achieved", color: "from-purple-400 to-pink-400" },
              { value: "125%", label: "Sales Increase", color: "from-green-400 to-emerald-400" },
              { value: "50+", label: "Companies Scaled", color: "from-orange-400 to-red-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl hover:border-white/[0.15] transition-all duration-300 text-center group hover:scale-105"
              >
                <div className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}

export { HomeHero };
