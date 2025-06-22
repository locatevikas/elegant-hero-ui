
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
      gradient: "from-blue-500/[0.05] to-cyan-500/[0.05]",
      iconColor: "text-blue-400",
      borderColor: "hover:border-blue-500/[0.2]"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Scale",
      description: "Performance marketing & conversion optimization that delivers results", 
      result: "25X revenue growth delivered",
      gradient: "from-purple-500/[0.05] to-pink-500/[0.05]",
      iconColor: "text-purple-400",
      borderColor: "hover:border-purple-500/[0.2]"
    },
    {
      icon: Building,
      title: "Real Estate Leads",
      description: "Quality lead generation & sales automation for property success",
      result: "Multiple property sellouts",
      gradient: "from-orange-500/[0.05] to-red-500/[0.05]",
      iconColor: "text-orange-400",
      borderColor: "hover:border-orange-500/[0.2]"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three sectors.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              One approach.
            </span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Strategic excellence tailored to your industry's unique challenges
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/[0.06] ${service.borderColor} transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/[0.02]`}>
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Result Badge */}
                  <div className="p-3 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl">
                    <p className="text-green-400 text-sm font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {service.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="group bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white hover:bg-white/[0.12] transition-all duration-300 px-8 py-4 rounded-full"
          >
            <Link to="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export { ServicesOverview };
