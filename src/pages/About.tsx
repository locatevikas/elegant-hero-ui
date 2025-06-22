
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen">
        <HeroGeometric 
          badge="About Vikas"
          title1="The Growth Strategist"
          title2="Behind 25X Results"
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
                "It started with a conversation that changed everything... 'We are the last generation making this craft. This is going to end.' That statement from a Kolhapuri chappal artisan sparked a mission that would eventually help 50+ companies scale from struggling startups to market leaders."
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The Transformation Journey</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  From Amazon customer service → Digital marketing exploration → E-commerce co-founder → Growth specialist → Fractional CMO
                </p>
                <p>
                  When I helped scale my own artisan e-commerce from ₹2L to ₹45L monthly revenue, I realized the power of combining strategic clarity with AI-powered execution.
                </p>
                <p className="text-xl font-semibold text-white">
                  "Growth without purpose is just numbers. True transformation happens when business strategy aligns with personal clarity."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Experience & Credentials</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• 9+ years in digital marketing and growth strategy</li>
                  <li>• Fractional CMO for 15+ companies</li>
                  <li>• Co-founder of successful e-commerce venture</li>
                  <li>• Certified in digital marketing and executive coaching</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• 25X revenue growth for e-commerce client</li>
                  <li>• 19X ROAS through strategic optimization</li>
                  <li>• 125% sales increase for manufacturing company</li>
                  <li>• Multiple property sellouts for real estate developers</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
