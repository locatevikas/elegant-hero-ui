import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current state, opportunities, and growth barriers",
      duration: "Week 1-2"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom growth strategy aligned with your business goals and market position",
      duration: "Week 3-4"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Systematic execution of strategies with AI-powered automation and optimization",
      duration: "Month 2+"
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Continuous improvement and scaling based on performance data and market feedback",
      duration: "Ongoing"
    }
  ];

  const industries = [
    { name: "SaaS & Technology", description: "Go-to-market excellence and growth acceleration" },
    { name: "E-commerce", description: "Performance marketing and conversion optimization" },
    { name: "Real Estate", description: "Lead generation and sales automation systems" },
    { name: "Professional Services", description: "Authority building and client acquisition" }
  ];

  const guarantees = [
    "Strategic clarity within 30 days or full refund",
    "Measurable results within 90 days",
    "Dedicated fractional CMO support",
    "AI-powered tools and automation included"
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-rose-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-full mb-8">
              <Target className="w-4 h-4 text-indigo-400" />
              <span className="text-white/80 text-sm font-medium">Fractional CMO Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Strategic Excellence for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                High-Growth Companies
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
              Why settle for generic marketing when you can have strategic excellence tailored to your specific industry challenges?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Industry Specialization
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-6">
                  <CardContent className="p-0">
                    <h3 className="text-white font-semibold text-lg mb-2">{industry.name}</h3>
                    <p className="text-white/70">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#030303]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Service Packages
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Choose the engagement model that fits your growth stage and objectives
            </p>
          </motion.div>

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

      {/* Process Section */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Strategic{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Engagement Process
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results across all engagements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-8">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold text-lg min-w-[60px] text-center">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <span className="text-indigo-400 text-sm font-medium">{step.duration}</span>
                        </div>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 -bottom-6 w-px h-12 bg-gradient-to-b from-white/20 to-transparent transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-32 bg-[#030303]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Commitment to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Your Success
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] p-6">
                  <CardContent className="p-0 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{guarantee}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-12 py-6 text-lg font-medium rounded-full">
              <Link to="/contact" className="flex items-center gap-3">
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
