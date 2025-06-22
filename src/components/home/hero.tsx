
"use client";

import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="relative">
      <HeroGeometric 
        badge="Fractional CMO"
        title1="Fractional CMO Who Delivered"
        title2="25X Revenue Growth"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light max-w-2xl mx-auto"
            >
              Strategic excellence for SaaS, E-commerce & Real Estate companies 
              ready to scale from ₹10L to ₹50Cr+ revenue
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-8 py-6 text-lg">
                <Link to="/contact">Book Your Growth Strategy Call</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">25X</div>
                <div className="text-sm text-white/60">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">19X</div>
                <div className="text-sm text-white/60">Facebook ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">125%</div>
                <div className="text-sm text-white/60">Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">40+</div>
                <div className="text-sm text-white/60">Properties Sold</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeHero };
