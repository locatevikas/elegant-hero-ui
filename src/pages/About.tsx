
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, TrendingUp, Award, Lightbulb, Globe } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: TrendingUp, label: "25X Revenue Growth", value: "Delivered for clients" },
    { icon: Users, label: "50+ Companies", value: "Scaled globally" },
    { icon: Award, label: "9+ Years", value: "Digital marketing expertise" },
    { icon: Globe, label: "3 Continents", value: "Active client base" }
  ];

  const journey = [
    {
      year: "2015",
      title: "Amazon Customer Service",
      description: "Started career understanding customer psychology and pain points"
    },
    {
      year: "2017", 
      title: "Digital Marketing Exploration",
      description: "Discovered the power of strategic digital marketing and automation"
    },
    {
      year: "2019",
      title: "E-commerce Co-founder",
      description: "Scaled artisan business from ₹2L to ₹45L monthly revenue"
    },
    {
      year: "2021",
      title: "Growth Specialist",
      description: "Helped 20+ companies achieve 10X+ growth through strategic excellence"
    },
    {
      year: "2024",
      title: "Fractional CMO",
      description: "Leading growth transformations for high-growth companies globally"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Every decision backed by data and strategic thinking"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Combining AI-powered tools with human insight"
    },
    {
      icon: Users,
      title: "People-Centric",
      description: "Growth strategies that put customers and teams first"
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
              <span className="text-white/80 text-sm font-medium">About Vikas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              The Growth Strategist Behind{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                25X Results
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
              From Amazon customer service to scaling companies globally - a journey of strategic excellence and transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-6 text-center">
                  <CardContent className="p-0">
                    <achievement.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.label}</h3>
                    <p className="text-white/60 text-sm">{achievement.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-[#030303]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                The Transformation Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-br from-indigo-500/5 to-rose-500/5 backdrop-blur-xl border border-white/[0.1] p-8">
                <CardContent className="p-0">
                  <blockquote className="text-2xl text-white/90 italic leading-relaxed text-center">
                    "We are the last generation making this craft. This is going to end."
                  </blockquote>
                  <p className="text-white/60 text-center mt-6">
                    - Kolhapuri chappal artisan whose words sparked a mission
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 text-white/80 text-lg leading-relaxed"
            >
              <p>
                That conversation changed everything. What started as helping traditional artisans preserve their craft became a journey of discovering how strategic clarity combined with digital excellence can transform any business.
              </p>
              <p>
                From scaling my own artisan e-commerce from ₹2L to ₹45L monthly revenue, I realized the power of combining human insight with AI-powered execution. This methodology has since helped 50+ companies achieve exponential growth.
              </p>
              <p className="text-xl font-semibold text-white">
                "Growth without purpose is just numbers. True transformation happens when business strategy aligns with human impact."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              The Journey to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Excellence
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {journey.map((item, index) => (
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
                      <div className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < journey.length - 1 && (
                  <div className="absolute left-1/2 -bottom-6 w-px h-12 bg-gradient-to-b from-white/20 to-transparent transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Core Values
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The principles that guide every strategic decision and client partnership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-8 h-full">
                  <CardContent className="p-0 text-center">
                    <value.icon className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Growth Story?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Let's discuss how strategic excellence can unlock your company's true potential
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 px-12 py-6 text-lg font-medium rounded-full">
              <Link to="/contact" className="flex items-center gap-3">
                Start Your Transformation
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

export default About;
