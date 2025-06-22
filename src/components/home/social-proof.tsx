
"use client";

import { motion } from "framer-motion";

function SocialProof() {
  const companies = [
    "Artociti", "Pammsoft", "DaMensch", "Reepl", "Niamh Ventures"
  ];

  return (
    <section className="relative py-16 bg-[#030303] border-t border-white/[0.08]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-lg mb-8">
            Trusted by 50+ companies across India and globally
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white/[0.03] border border-white/[0.08] rounded-full"
              >
                <span className="text-white/80 font-medium tracking-wide">
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
