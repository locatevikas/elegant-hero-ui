
"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "SaaS Growth Strategy",
    "E-commerce Scaling", 
    "Real Estate Marketing",
    "Growth Audit",
    "Conscious Leadership"
  ];

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Link to="/" className="text-foreground font-bold text-3xl tracking-tight mb-6 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                Vikas
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Strategic growth partner delivering 25X revenue results for SaaS, E-commerce & Real Estate companies.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground/[0.05] backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-foreground/70" />
              </div>
              <div className="w-12 h-12 bg-foreground/[0.05] backdrop-blur-sm border border-border rounded-2xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-foreground/70" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="block text-foreground/60 hover:text-foreground transition-colors duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Services</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service} className="text-foreground/60">
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-foreground font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-foreground/50 mt-1" />
                <div>
                  <div className="text-foreground/60 text-sm">Email</div>
                  <div className="text-foreground">vikas@growthguy.in</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-foreground/50 mt-1" />
                <div>
                  <div className="text-foreground/60 text-sm">Phone</div>
                  <div className="text-foreground">+91-9595479090</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-foreground/50 mt-1" />
                <div>
                  <div className="text-foreground/60 text-sm">Location</div>
                  <div className="text-foreground">India & Global</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-foreground/50 text-sm">
            © 2024 Vikas - Fractional CMO. All rights reserved.
          </div>
          <div className="text-foreground/50 text-sm">
            Strategic growth partner for high-growth companies
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export { Footer };
