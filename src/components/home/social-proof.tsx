
"use client";

import { motion } from "framer-motion";

function SocialProof() {
  const companies = [
    "Artociti", "Pammsoft", "DaMensch", "Reepl", "Niamh Ventures"
  ];

  return (
    <section className="py-20 bg-[#030303] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40 text-lg mb-12 font-light">
            Trusted by 50+ companies globally
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="px-6 py-3 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-full hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300">
                  <span className="text-white/60 group-hover:text-white/80 font-medium text-sm tracking-wide transition-colors duration-300">
                    {company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { SocialProof };
