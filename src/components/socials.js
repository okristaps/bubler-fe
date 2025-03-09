"use client";
import { motion } from "framer-motion";

const SocialsSection = () => {
  return (
    <motion.section id="socials" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <motion.div
        className="bg-[#002c2e] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8 text-center">
            Join Our Community
          </h2>

          <div className="bg-[#003e42] rounded-xl p-6 relative">
            <div className="text-center space-y-4">
              <p className="text-[#00f2fe]/90 text-lg mb-8">
                Stay connected and get the latest updates by joining our social media channels.
              </p>

              <div className="flex flex-col items-center space-y-4">
                <a
                  href="http://t.me/BUBLER_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs px-6 py-3 bg-[#003e42] hover:bg-[#004a4e] transition-all duration-300 rounded-lg text-[#00f2fe] font-semibold text-lg hover:scale-105 border border-[#00f2fe]/30 flex justify-center items-center gap-2"
                >
                  🔹 Join Telegram
                </a>
                <a
                  href="http://X.com/BUBLER_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs px-6 py-3 bg-[#003e42] hover:bg-[#004a4e] transition-all duration-300 rounded-lg text-[#00f2fe] font-semibold text-lg hover:scale-105 border border-[#00f2fe]/30 flex justify-center items-center gap-2"
                >
                  ❌ Follow on X
                </a>
                <a
                  href="https://oc.app/community/4dyju-4aaaa-aaaac-ajnga-cai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs px-6 py-3 bg-[#003e42] hover:bg-[#004a4e] transition-all duration-300 rounded-lg text-[#00f2fe] font-semibold text-lg hover:scale-105 border border-[#00f2fe]/30 flex justify-center items-center gap-2"
                >
                  💬 Join OpenChat
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SocialsSection;
