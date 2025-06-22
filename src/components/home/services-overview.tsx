
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
      subtitle: "Product positioning & go-to-market mastery",
      features: [
        "Strategic positioning workshops",
        "Growth system design",
        "AI-powered automation"
      ],
      result: "Helped Ripple.io achieve product-market fit",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🛒",
      title: "E-commerce Scaling",
      subtitle: "Performance marketing & conversion optimization",
      features: [
        "Cross-channel attribution",
        "Conversion rate optimization", 
        "Automated workflows"
      ],
      result: "25X growth for artisan e-commerce",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: "🏢",
      title: "Real Estate Leads",
      subtitle: "Quality lead generation & sales automation",
      features: [
        "Lead generation systems",
        "Campaign automation",
        "Sales enablement"
      ],
      result: "Multiple property sellouts in Pune",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="relative py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            3 High-ROI Sectors.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              1 Strategic Approach.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${service.gradient} border-white/[0.15] hover:border-white/[0.25] transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 mb-6">{service.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/80 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 bg-white/[0.05] rounded-lg border border-white/[0.1]">
                    <p className="text-white/70 text-sm font-medium">
                      <span className="text-green-400">Result:</span> {service.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-8 py-6 text-lg">
            <Link to="/services">Discover Your Growth Opportunity</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export { ServicesOverview };
