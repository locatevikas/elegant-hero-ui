
import { Navigation } from "@/components/navigation";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    challenge: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navigation />
      
      <section className="relative min-h-screen">
        <HeroGeometric 
          badge="Contact"
          title1="Ready to Scale with"
          title2="Strategic Excellence?"
        />
        
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/60 mb-4 leading-relaxed font-light"
              >
                Limited slots available for Q1 2025. Premium growth strategies for companies committed to 10X results.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                className="text-rose-400 font-semibold mb-8"
              >
                Only 3 slots remaining this quarter
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border-white/[0.15]">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Book Your Free Strategy Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white/[0.05] border-white/[0.15] text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/[0.05] border-white/[0.15] text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/[0.05] border-white/[0.15] text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Annual Revenue Range</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white/[0.05] border border-white/[0.15] rounded-md text-white"
                        required
                      >
                        <option value="">Select revenue range</option>
                        <option value="under-10l">Under ₹10L</option>
                        <option value="10l-50l">₹10L - ₹50L</option>
                        <option value="50l-1cr">₹50L - ₹1Cr</option>
                        <option value="1cr-5cr">₹1Cr - ₹5Cr</option>
                        <option value="5cr-plus">₹5Cr+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Primary Challenge</label>
                      <select
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white/[0.05] border border-white/[0.15] rounded-md text-white"
                        required
                      >
                        <option value="">Select primary challenge</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="conversion-optimization">Conversion Optimization</option>
                        <option value="scaling-growth">Scaling Growth</option>
                        <option value="strategic-clarity">Strategic Clarity</option>
                        <option value="team-alignment">Team Alignment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-white/[0.05] border border-white/[0.15] rounded-md text-white resize-none"
                        placeholder="Tell us about your growth goals..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 py-6 text-lg"
                    >
                      Book Free Strategy Call
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-white/[0.15]">
                <CardHeader>
                  <CardTitle className="text-white">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-white/80">
                  <div>
                    <strong>WhatsApp:</strong><br />
                    +91-9595479090
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    vikas@growthguy.in
                  </div>
                  <div>
                    <strong>Response Time:</strong><br />
                    Within 24 hours
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-white/[0.15]">
                <CardHeader>
                  <CardTitle className="text-white">Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    30-day strategic clarity guarantee or full refund. We're committed to delivering measurable results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
