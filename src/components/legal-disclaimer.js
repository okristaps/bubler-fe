"use client";
import React from "react";
import { motion } from "framer-motion";
import BUBLERImage from "../../public/image9.png";
import Image from "next/image";
const LegalDisclaimer = () => {
  return (
    <motion.section id="legal-disclaimer" className="max-w-6xl mx-auto px-6 sm:px-8 mt-10">
      <motion.div
        className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 flex flex-col md:flex-row items-center gap-8 md:text-left text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <Image src={BUBLERImage} alt="BUBLER Meme" width={400} height={400} className="rounded-xl" />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            Legal Disclaimer
          </h2>
          <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              “
              <span className="font-semibold">
                None of the information provided by us in the supply or in connection with our services
              </span>
              constitutes legal, financial, business, or professional advice. Please consult a qualified advisor.”
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LegalDisclaimer;
