"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/image6.png";

const AboutBUBLER = () => {
  return (
    <motion.section
      id="about-BUBLER"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="bg-[#002c2e] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>

        <div className="relative z-10">
          {/* Mobile Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8 md:hidden text-center">
            What is BUBLER?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="w-[280px] md:w-[200px] lg:w-[240px] flex-shrink-0 flex justify-center mx-auto">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="w-full"
              >
                <Image
                  src={BUBLERImage}
                  alt="BUBLER Meme"
                  width={280}
                  height={280}
                  className="rounded-xl w-full h-auto"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(0, 242, 254, 0.3))",
                  }}
                  priority
                />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              {/* Desktop Header - Hidden on mobile */}
              <h2 className="hidden md:block text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8">
                What is BUBLER?
              </h2>

              <div className="bg-[#003e42] rounded-xl p-6 relative">
                <p className="text-[#00f2fe]/90 text-lg mb-6">
                  <span className="font-bold tracking-wide uppercase">BUBLER the Meme Catcher</span> isn't your average
                  token. It's a meme-powered adventure with <span className="font-bold">gameplay utility</span>. Hunt,
                  catch, and collect BUBLER tokens in our fast-paced game, where skill meets luck.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00f2fe] opacity-70 mt-2.5"></div>
                    <p className="text-[#00f2fe]/90 text-lg flex-1">
                      Every time BUBLER <span className="font-bold">drops in-game</span>, score the highest points and
                      claim your crypto rewards
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00f2fe] opacity-70 mt-2.5"></div>
                    <p className="text-[#00f2fe]/90 text-lg flex-1">
                      Built on the blazing-fast <span className="font-bold">ICP chain</span>, BUBLER combines viral fun
                      with seamless transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutBUBLER;
