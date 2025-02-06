"use client";
import { motion } from "framer-motion";

const LegalDisclaimer = () => {
  return (
    <motion.section
      id="legal-disclaimer"
      className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500 drop-shadow-lg">
        Legal Disclaimer
      </h2>
      <div className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
        <p>
          “
          <span className="font-semibold">
            None of the information provided by us in the supply or in connection with our services
          </span>
          constitutes legal, financial, business, or professional advice. Please consult a qualified advisor.”
        </p>
      </div>
    </motion.section>
  );
};

export default LegalDisclaimer;
