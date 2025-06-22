
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Shield } from "lucide-react";

function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#050505] to-[#030303] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/[0.08] backdrop-blur-sm border border-rose-500/[0.15] rounded-full mb-8">
            <Calendar className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 text-sm font-medium">Limited Availability</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Scale with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Strategic Excellence?
            </span>
          </h2>
          
          <p className="text-xl text-white/60 mb-4 leading-relaxed">
            Limited slots available for Q1 2025. Premium growth strategies for companies committed to 10X results.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/[0.08] backdrop-blur-sm border border-orange-500/[0.15] rounded-full mb-12">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-300 text-sm font-medium">Only 3 slots remaining this quarter</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="group bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.15] transition-all duration-300 px-12 py-6 text-lg font-medium rounded-full"
            >
              <Link to="/contact" className="flex items-center gap-3">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="group border-white/[0.15] bg-transparent text-white/90 hover:bg-white/[0.05] backdrop-blur-xl px-12 py-6 text-lg font-medium rounded-full"
            >
              <Link to="/resources" className="flex items-center gap-3">
                Download Growth Framework
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-green-400">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">30-day strategic clarity guarantee or full refund</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { FinalCTA };
