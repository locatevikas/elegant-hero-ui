
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "SaaS Growth Strategy",
      price: "₹3-5L/month",
      description: "Go-to-market excellence for SaaS companies",
      features: [
        "Strategic positioning workshops",
        "Go-to-market playbook development",
        "Automated lead generation systems",
        "Performance tracking dashboard",
        "Quarterly strategy reviews"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "E-commerce Scaling",
      price: "₹2-4L/month", 
      description: "Performance marketing & conversion optimization",
      features: [
        "Cross-channel attribution model",
        "Conversion rate optimization",
        "Marketing automation workflows",
        "Customer journey optimization",
        "Revenue growth roadmap"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Real Estate Marketing",
      price: "₹1.5-3L/month",
      description: "Quality lead generation & sales automation",
      features: [
        "Targeted lead generation systems",
        "Sales automation workflows",
        "Campaign performance optimization",
        "Sales team training & enablement",
        "ROI tracking and reporting"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Growth Audit",
      price: "₹25,000",
      description: "One-time strategic assessment",
      features: [
        "Current state analysis",
        "Growth barriers identification",
        "Competitive positioning review",
        "Revenue optimization opportunities",
        "90-day action plan"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen">
        <HeroGeometric 
          badge="Services"
          title1="Fractional CMO Services"
          title2="for High-Growth Companies"
        />
        
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light max-w-3xl mx-auto"
              >
                Why settle for generic marketing when you can have strategic excellence tailored to your specific industry challenges?
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className={`h-full bg-gradient-to-br ${service.gradient} border-white/[0.15] hover:border-white/[0.25] transition-all duration-300`}>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">
                      {service.price}
                    </div>
                    <p className="text-white/60">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-white/80 flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
