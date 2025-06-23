
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Clock, Target, Star, Award } from "lucide-react";

const CaseStudies = () => {
  const stats = [
    { icon: TrendingUp, value: "25X", label: "Average Revenue Growth" },
    { icon: Users, value: "50+", label: "Companies Transformed" },
    { icon: Clock, value: "6-18", label: "Months to Results" },
    { icon: Award, value: "95%", label: "Client Retention Rate" }
  ];

  const caseStudies = [
    {
      title: "25X Revenue Growth: Wall Art E-commerce",
      client: "Artisan E-commerce Startup",
      industry: "E-commerce",
      timeframe: "18 months",
      challenge: "Traditional crafts business struggling with online presence and modern marketing approaches",
      solution: "Implemented strategic positioning, automated marketing funnels, and AI-powered customer journey optimization",
      results: [
        { metric: "Monthly Revenue", before: "₹2L", after: "₹45L", growth: "25X", color: "text-green-400" },
        { metric: "Website Traffic", growth: "300%", color: "text-blue-400" },
        { metric: "Customer LTV", growth: "15X", color: "text-purple-400" },
        { metric: "Profit Margin", growth: "280%", color: "text-orange-400" }
      ],
      testimonial: "Vikas didn't just improve our marketing. He transformed our entire approach to business strategy and customer relationships.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "19X ROAS: Manufacturing E-commerce",
      client: "Artociti",
      industry: "Manufacturing",
      timeframe: "6 months", 
      challenge: "Extremely low return on advertising spend with ineffective Facebook campaigns and poor lead quality",
      solution: "Complete campaign restructure, advanced audience targeting, conversion optimization, and automated nurturing sequences",
      results: [
        { metric: "Facebook ROAS", before: "1.2X", after: "19X", growth: "1583%", color: "text-green-400" },
        { metric: "Cost per Acquisition", reduction: "75%", color: "text-blue-400" },
        { metric: "Sales Growth", growth: "125%", color: "text-purple-400" },
        { metric: "Lead Quality Score", growth: "400%", color: "text-orange-400" }
      ],
      testimonial: "The systematic approach to campaign optimization delivered results we never thought possible. ROI went through the roof.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Multiple Property Sellouts: Real Estate",
      client: "Pune Real Estate Developer",
      industry: "Real Estate",
      timeframe: "12 months",
      challenge: "Struggling to generate high-quality leads for premium residential projects in competitive market",
      solution: "Strategic lead generation system, premium audience targeting, sales process automation, and nurturing workflows",
      results: [
        { metric: "Lead Quality", growth: "300%", color: "text-green-400" },
        { metric: "Sales Conversion", growth: "45%", color: "text-blue-400" },
        { metric: "Projects Sold Out", count: "3 consecutive", color: "text-purple-400" },
        { metric: "Time to Sale", reduction: "60%", color: "text-orange-400" }
      ],
      testimonial: "The strategic lead generation system completely transformed our sales process and project launch success rate.",
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "B2B SaaS Scale-Up Success",
      client: "TechFlow Platform",
      industry: "SaaS",
      timeframe: "10 months",
      challenge: "Struggling with product positioning, low trial-to-paid conversion, and unclear go-to-market strategy",
      solution: "Complete GTM strategy overhaul, positioning refinement, onboarding optimization, and growth loop implementation",
      results: [
        { metric: "Trial to Paid", before: "8%", after: "32%", growth: "400%", color: "text-green-400" },
        { metric: "Monthly Recurring Revenue", growth: "550%", color: "text-blue-400" },
        { metric: "Customer Acquisition Cost", reduction: "65%", color: "text-purple-400" },
        { metric: "User Engagement", growth: "180%", color: "text-orange-400" }
      ],
      testimonial: "Strategic clarity around positioning and customer journey made all the difference. We finally found our product-market fit.",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  const industries = [
    { name: "E-commerce", projects: 15 },
    { name: "SaaS", projects: 12 },
    { name: "Real Estate", projects: 8 },
    { name: "Manufacturing", projects: 10 },
    { name: "Professional Services", projects: 6 }
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
              <Star className="w-4 h-4 text-indigo-400" />
              <span className="text-white/80 text-sm font-medium">Proven Results</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Real Growth Stories,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Real Results
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover how strategic excellence has transformed companies across industries, delivering measurable growth and lasting impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="px-3 md:px-4 py-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] rounded-full"
                >
                  <span className="text-white/80 text-xs md:text-sm font-medium">{industry.name} ({industry.projects})</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-4 md:p-6 text-center">
                  <CardContent className="p-0">
                    <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-indigo-400 mx-auto mb-3 md:mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-[#030303]">
        <div className="container mx-auto px-6">
          <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/[0.15] hover:border-white/30 transition-all duration-300`}>
                  <CardHeader className="pb-0">
                    <div className="flex flex-wrap gap-3 md:gap-4 mb-6 text-sm">
                      <div className="px-3 py-1 bg-white/[0.1] rounded-full">
                        <span className="text-white/80 text-xs md:text-sm">{study.industry}</span>
                      </div>
                      <div className="px-3 py-1 bg-white/[0.1] rounded-full">
                        <span className="text-white/80 text-xs md:text-sm">{study.timeframe}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl mb-4 leading-tight">{study.title}</CardTitle>
                    <div className="text-white/60 mb-6 text-sm md:text-base">
                      <strong className="text-white/80">Client:</strong> {study.client}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 md:space-y-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-sm md:text-base">Challenge</h4>
                        <p className="text-white/70 leading-relaxed text-sm md:text-base">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-sm md:text-base">Solution</h4>
                        <p className="text-white/70 leading-relaxed text-sm md:text-base">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-4 md:mb-6 text-sm md:text-base">Results</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-4 md:p-6 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-2xl border border-white/[0.05]">
                            <div className={`text-lg md:text-2xl font-bold mb-2 ${result.color}`}>
                              {result.growth || result.reduction || result.count}
                            </div>
                            <div className="text-white/60 text-xs md:text-sm font-medium">{result.metric}</div>
                            {result.before && result.after && (
                              <div className="text-xs text-white/40 mt-2">
                                {result.before} → {result.after}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Card className="bg-[#0a0a0a]/30 border border-white/[0.05] p-4 md:p-6">
                      <CardContent className="p-0">
                        <blockquote className="text-white/90 text-sm md:text-lg italic leading-relaxed">
                          "{study.testimonial}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Preview */}
      <section className="py-20 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Strategic Method
              </span>
              {" "}Behind Results
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 leading-relaxed">
              Every success story follows our proven 4-phase growth transformation methodology
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
              <Card className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/[0.1] p-6 text-left">
                <CardContent className="p-0">
                  <Target className="w-6 md:w-8 h-6 md:h-8 text-indigo-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Strategic Clarity First</h3>
                  <p className="text-white/70 text-xs md:text-sm">Deep analysis and positioning before any execution</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/[0.1] p-6 text-left">
                <CardContent className="p-0">
                  <TrendingUp className="w-6 md:w-8 h-6 md:h-8 text-rose-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Systematic Execution</h3>
                  <p className="text-white/70 text-xs md:text-sm">AI-powered automation with human strategic oversight</p>
                </CardContent>
              </Card>
            </div>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-medium rounded-full">
              <Link to="/contact" className="flex items-center gap-3">
                Start Your Success Story
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
