
"use client";

import { motion } from "framer-motion";

function SocialProof() {
  const companies = [
    "Artociti", "Pammsoft", "DaMensch", "Reepl", "Niamh Ventures"
  ];

  return (
    <section className="py-24 bg-[#030303]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/50 text-lg mb-12">
            Trusted by 50+ companies globally
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-8 py-4 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-full hover:border-white/[0.15] transition-all duration-300"
              >
                <span className="text-white/70 font-medium text-sm tracking-wide">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { SocialProof };
