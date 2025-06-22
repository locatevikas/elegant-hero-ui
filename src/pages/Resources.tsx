
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      title: "The 25X Growth Framework",
      description: "Complete methodology for scaling businesses with strategic excellence",
      type: "PDF Guide",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "SaaS Go-to-Market Playbook", 
      description: "Step-by-step guide for SaaS product positioning and launch",
      type: "Strategic Guide",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "E-commerce Scaling Checklist",
      description: "47-point optimization checklist for e-commerce growth",
      type: "Checklist",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Real Estate Lead Generation Blueprint",
      description: "Campaign setup guide for quality lead generation",
      type: "Blueprint",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AI-Powered Marketing Tools",
      description: "50+ recommended tools for automation and optimization",
      type: "Tool List",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Growth Potential Calculator",
      description: "Assess your scaling opportunity with this interactive tool",
      type: "Calculator",
      gradient: "from-rose-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen">
        <HeroGeometric 
          badge="Resources"
          title1="Growth Resources"
          title2="for Ambitious Leaders"
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
                Free resources, guides, and tools to accelerate your growth journey with proven frameworks and strategies.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className={`h-full bg-gradient-to-br ${resource.gradient} border-white/[0.15] hover:border-white/[0.25] transition-all duration-300`}>
                  <CardHeader>
                    <div className="text-sm text-indigo-400 font-medium mb-2">{resource.type}</div>
                    <CardTitle className="text-white text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 mb-6">{resource.description}</p>
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0">
                      Download Free
                    </Button>
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
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border-white/[0.15]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Access to All Resources
                </h3>
                <p className="text-white/60 mb-6">
                  Subscribe to receive all growth resources, plus exclusive insights and case studies delivered weekly.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-8">
                  Subscribe for Free Access
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
