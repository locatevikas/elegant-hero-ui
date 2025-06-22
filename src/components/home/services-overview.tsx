
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, ShoppingCart, Building, ArrowRight } from "lucide-react";

function ServicesOverview() {
  const services = [
    {
      icon: Rocket,
      title: "SaaS Growth",
      description: "Go-to-market strategy & product positioning for sustainable scaling",
      result: "Product-market fit achieved",
      iconColor: "text-blue-400",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Scale",
      description: "Performance marketing & conversion optimization that delivers results", 
      result: "25X revenue growth delivered",
      iconColor: "text-purple-400",
    },
    {
      icon: Building,
      title: "Real Estate Leads",
      description: "Quality lead generation & sales automation for property success",
      result: "Multiple property sellouts",
      iconColor: "text-orange-400",
    }
  ];

  return (
    <section className="py-32 bg-[#030303] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Three sectors.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              One approach.
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Strategic excellence tailored to your industry's unique challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] rounded-3xl hover:border-white/[0.2] hover:bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.02] h-full">
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="p-4 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl">
                  <p className="text-green-400 font-medium flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    {service.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.1] transition-all duration-300 px-10 py-4 rounded-full text-lg"
          >
            <Link to="/services" className="flex items-center gap-3">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export { ServicesOverview };
