
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "25X Revenue Growth: Wall Art E-commerce",
      client: "Artisan E-commerce Startup",
      timeframe: "18 months",
      challenge: "Traditional crafts business struggling with online presence",
      results: [
        { metric: "Revenue", before: "₹2L", after: "₹45L", growth: "25X" },
        { metric: "Website Traffic", growth: "300%" },
        { metric: "Customer LTV", growth: "15X" }
      ],
      testimonial: "Vikas didn't just improve our marketing. He transformed our entire approach to business.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "19X ROAS: Manufacturing E-commerce",
      client: "Artociti",
      timeframe: "6 months", 
      challenge: "Low return on advertising spend and ineffective Facebook campaigns",
      results: [
        { metric: "Facebook ROAS", before: "1.2X", after: "19X", growth: "1583%" },
        { metric: "Cost per acquisition", reduction: "75%" },
        { metric: "Sales Growth", growth: "125%" }
      ],
      testimonial: "The systematic approach to campaign optimization delivered results beyond our expectations.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Multiple Property Sellouts: Real Estate",
      client: "Pune Real Estate Developer",
      timeframe: "12 months",
      challenge: "High-quality lead generation for premium residential projects",
      results: [
        { metric: "Lead Quality", growth: "300%" },
        { metric: "Sales Conversion", growth: "45%" },
        { metric: "Projects Sold Out", count: "3 consecutive" }
      ],
      testimonial: "The strategic lead generation system transformed our sales process completely.",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen">
        <HeroGeometric 
          badge="Case Studies"
          title1="Proven Results"
          title2="Real Growth Stories"
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
                Real companies. Real challenges. Real transformation through strategic excellence.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${study.gradient} border-white/[0.15]`}>
                  <CardHeader>
                    <CardTitle className="text-white text-2xl mb-4">{study.title}</CardTitle>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-white/60">
                      <div><strong>Client:</strong> {study.client}</div>
                      <div><strong>Timeframe:</strong> {study.timeframe}</div>
                    </div>
                    <p className="text-white/80 mt-4"><strong>Challenge:</strong> {study.challenge}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-white/[0.05] rounded-lg">
                          <div className="text-2xl font-bold text-white mb-2">
                            {result.growth || result.reduction || result.count}
                          </div>
                          <div className="text-white/60 text-sm">{result.metric}</div>
                          {result.before && result.after && (
                            <div className="text-xs text-white/40 mt-1">
                              {result.before} → {result.after}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 bg-white/[0.02]">
                      <p className="text-white/80 italic">"{study.testimonial}"</p>
                    </blockquote>
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

export default CaseStudies;
