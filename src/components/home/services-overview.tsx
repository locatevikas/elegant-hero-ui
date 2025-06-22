
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ServicesOverview() {
  const services = [
    {
      icon: "🚀",
      title: "SaaS Growth",
      description: "Go-to-market strategy & product positioning",
      result: "Product-market fit achieved",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: "🛒", 
      title: "E-commerce Scale",
      description: "Performance marketing & conversion optimization",
      result: "25X revenue growth delivered",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: "🏢",
      title: "Real Estate Leads",
      description: "Quality lead generation & sales automation", 
      result: "Multiple property sellouts",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Three sectors.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              One approach.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group-hover:scale-[1.02]`}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                    <p className="text-green-400 text-sm font-medium">
                      {service.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export { ServicesOverview };
