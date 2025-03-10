"use client";
import React from "react";
import { motion } from "framer-motion";
import BUBLERImage from "../../public/btc.png";
import Image from "next/image";

const LegalDisclaimer = () => {
  return (
    <motion.section id="legal-disclaimer" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <motion.div
        className="bg-[#002c2e] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={BUBLERImage}
              alt="ODINCASH Meme"
              width={400}
              height={400}
              className="rounded-xl"
              style={{
                filter: "drop-shadow(0 0 10px rgba(0, 242, 254, 0.3))",
              }}
            />
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8 text-center md:text-left">
              Legal Disclaimer
            </h2>
            <div className="bg-[#003e42] rounded-xl p-6 relative">
              <p className="text-[#00f2fe]/90 text-lg text-center md:text-left">
                "
                <span className="font-bold">
                  ODINCASH is a gaming platform designed for entertainment purposes. While we strive to provide an
                  engaging and rewarding experience
                </span>
                , participation in our game should be approached responsibly. Players are encouraged to familiarize
                themselves with our terms of service and game mechanics before participating."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LegalDisclaimer;
