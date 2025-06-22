
"use client";

import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <HeroGeometric 
        badge="Fractional CMO"
        title1="Strategic Growth Partner"
        title2="25X Revenue Results"
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-white/70 font-light max-w-2xl mx-auto"
            >
              Transforming SaaS, E-commerce & Real Estate companies from ₹10L to ₹50Cr+ revenue
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3"
              >
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white/90 hover:bg-white/10 backdrop-blur-lg px-8 py-3"
              >
                <Link to="/case-studies">View Results</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16"
            >
              {[
                { value: "25X", label: "Revenue Growth" },
                { value: "19X", label: "ROAS Achieved" },
                { value: "125%", label: "Sales Increase" },
                { value: "50+", label: "Companies Scaled" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeHero };
