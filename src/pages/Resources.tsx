
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, BookOpen, Calculator, Zap, Target, ArrowRight, CheckCircle } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "The 25X Growth Framework",
      description: "Complete methodology for scaling businesses with strategic excellence. 47-page comprehensive guide.",
      type: "Strategic Guide",
      icon: Target,
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      features: ["4-phase methodology", "Case study examples", "Implementation templates"]
    },
    {
      title: "SaaS Go-to-Market Playbook", 
      description: "Step-by-step guide for SaaS product positioning and successful market entry strategies.",
      type: "Playbook",
      icon: Zap,
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      features: ["Market research templates", "Positioning frameworks", "Launch checklists"]
    },
    {
      title: "E-commerce Scaling Toolkit",
      description: "Complete toolkit with optimization checklists, automation workflows, and growth tactics.",
      type: "Toolkit",
      icon: BookOpen,
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      features: ["47-point optimization checklist", "Conversion templates", "Analytics setup guide"]
    },
    {
      title: "Real Estate Lead Generation System",
      description: "Proven system for generating high-quality leads and automating the sales process.",
      type: "System",
      icon: Users,
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      features: ["Campaign templates", "Lead scoring system", "Follow-up sequences"]
    },
    {
      title: "AI Marketing Tools Directory",
      description: "Curated collection of 50+ essential AI tools for marketing automation and optimization.",
      type: "Directory",
      icon: Zap,
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20",
      features: ["Tool comparisons", "Use case guides", "Implementation tips"]
    },
    {
      title: "Growth Potential Calculator",
      description: "Interactive assessment tool to identify your biggest growth opportunities and bottlenecks.",
      type: "Interactive Tool",
      icon: Calculator,
      gradient: "from-rose-500/10 to-pink-500/10",
      borderColor: "border-rose-500/20",
      features: ["Growth assessment", "Opportunity mapping", "Action plan generator"]
    }
  ];

  const categories = [
    { name: "Strategy Guides", count: 8 },
    { name: "Templates & Tools", count: 12 },
    { name: "Case Studies", count: 15 },
    { name: "Video Content", count: 6 }
  ];

  const testimonials = [
    {
      quote: "The 25X Growth Framework completely transformed how we approach scaling. Within 6 months, we saw 300% growth.",
      author: "Sarah Chen",
      company: "TechFlow SaaS"
    },
    {
      quote: "These resources saved us months of trial and error. The templates are incredibly practical and well-designed.",
      author: "Michael Rodriguez", 
      company: "GrowthCo E-commerce"
    }
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
              <Download className="w-4 h-4 text-indigo-400" />
              <span className="text-white/80 text-sm font-medium">Free Resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Growth Resources for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Ambitious Leaders
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
              Free frameworks, tools, and strategies to accelerate your growth journey with proven methodologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-full"
                >
                  <span className="text-white/80 text-sm font-medium">{category.name} ({category.count})</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br ${resource.gradient} backdrop-blur-xl border ${resource.borderColor} hover:border-white/30 transition-all duration-300 group-hover:scale-[1.02]`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] rounded-2xl flex items-center justify-center">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-indigo-400 font-medium">{resource.type}</div>
                    </div>
                    <CardTitle className="text-white text-xl leading-tight">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 mb-6 leading-relaxed">{resource.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {resource.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-white/60 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.1] transition-all duration-300 rounded-2xl">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Leaders Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] p-8 h-full">
                  <CardContent className="p-0">
                    <blockquote className="text-white/90 text-lg italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-indigo-500/10 to-rose-500/10 backdrop-blur-xl border border-white/[0.15] p-12">
              <CardContent className="p-0">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get All Resources + Weekly Insights
                </h3>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  Subscribe to receive all growth resources, plus exclusive case studies and strategic insights delivered weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-8 py-4 text-lg rounded-full">
                    Subscribe for Free Access
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/[0.15] bg-transparent text-white/90 hover:bg-white/[0.05] backdrop-blur-xl px-8 py-4 text-lg rounded-full">
                    <a href="/contact" className="flex items-center gap-2">
                      Get Premium Support
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-white/40 text-sm mt-6">No spam. Unsubscribe anytime. 5,000+ growth leaders trust us.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
