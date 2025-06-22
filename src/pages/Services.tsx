
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { CheckCircle } from "lucide-react";

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
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
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
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
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
      gradient: "from-orange-500/10 to-red-500/10", 
      borderColor: "border-orange-500/20"
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
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center">
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

      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`h-full p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-xl border ${service.borderColor} hover:border-white/30 rounded-3xl transition-all duration-500 group-hover:scale-[1.02]`}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400 mb-4">
                      {service.price}
                    </div>
                    <p className="text-white/70 text-lg">{service.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.1] transition-all duration-300 py-4 rounded-2xl text-lg font-medium"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
