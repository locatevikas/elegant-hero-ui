
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Shield, Star, MessageCircle, Calendar } from "lucide-react";

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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick response via WhatsApp",
      value: "+91-9595479090",
      action: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed discussions via email",
      value: "vikas@growthguy.in",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct consultation call",
      value: "+91-9595479090",
      action: "Call Now"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free strategy call?",
      answer: "30-minute assessment of your current growth challenges, identification of key opportunities, and a preliminary roadmap for achieving your goals."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most clients see initial improvements within 30-60 days, with significant transformation typically occurring within 6-12 months."
    },
    {
      question: "Do you work with companies outside India?",
      answer: "Yes, we work with companies globally. Our strategic approach adapts to different markets and time zones."
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
              <Calendar className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm font-medium">Limited Availability</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Ready to Scale with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                Strategic Excellence?
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-3xl mx-auto">
              Limited slots available for Q1 2025. Premium growth strategies for companies committed to 10X results.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/[0.08] backdrop-blur-sm border border-orange-500/[0.15] rounded-full">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 text-sm font-medium">Only 3 slots remaining this quarter</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to Connect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 p-6 text-center h-full">
                  <CardContent className="p-0">
                    <method.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{method.description}</p>
                    <p className="text-white/80 font-medium mb-4">{method.value}</p>
                    <Button className="w-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] text-white hover:bg-white/[0.1] transition-all duration-300 rounded-2xl">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-32 bg-[#030303]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-indigo-500/5 to-rose-500/5 backdrop-blur-xl border border-white/[0.15]">
                  <CardHeader>
                    <CardTitle className="text-white text-3xl mb-4">Book Your Free Strategy Call</CardTitle>
                    <p className="text-white/70">Let's discuss your growth challenges and explore how strategic excellence can transform your business.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-3">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 rounded-xl h-12"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white/80 text-sm font-medium mb-3">Email *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 rounded-xl h-12"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">Company *</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-white/[0.05] border-white/[0.15] text-white placeholder:text-white/40 rounded-xl h-12"
                          placeholder="Your company name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-3">Annual Revenue Range *</label>
                        <select
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white h-12"
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
                        <label className="block text-white/80 text-sm font-medium mb-3">Primary Challenge *</label>
                        <select
                          name="challenge"
                          value={formData.challenge}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white h-12"
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
                        <label className="block text-white/80 text-sm font-medium mb-3">Tell us about your goals</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.15] rounded-xl text-white placeholder:text-white/40 resize-none"
                          placeholder="What specific results are you looking to achieve? What's your biggest growth challenge right now?"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white border-0 py-6 text-lg font-medium rounded-xl"
                      >
                        Book Free Strategy Call
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-xl border border-white/[0.15]">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-white/80">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">WhatsApp: Within 2 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Email: Within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Strategy calls: Same week</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl border border-white/[0.15]">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <Shield className="w-5 h-5 text-purple-400" />
                      Our Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm leading-relaxed">
                      30-day strategic clarity guarantee or full refund. We're committed to delivering measurable results and strategic excellence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 backdrop-blur-xl border border-white/[0.15]">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <Star className="w-5 h-5 text-orange-400" />
                      Client Success
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="text-white/80">• 25X average revenue growth</div>
                      <div className="text-white/80">• 50+ companies transformed</div>
                      <div className="text-white/80">• 95% client retention rate</div>
                      <div className="text-white/80">• Global client base</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
