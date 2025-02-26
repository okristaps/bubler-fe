"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ICPImage from "../../public/icp.png";

const ICPInfo = () => {
  return (
    <motion.section id="game-infrastructure" className="max-w-6xl mx-auto px-6 sm:px-8 mt-10">
      <motion.div
        className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full flex justify-center">
          <Image src={ICPImage} alt="ICP Platform" width={150} height={150} className="rounded-xl" />
        </div>
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            Game Powered by ICP
          </h2>
          <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              Our game’s random seed generation is powered by the ICP platform, ensuring a unique experience for players
              every time they play.
            </p>
            <p>
              All data storage is securely managed on our canister, providing a decentralized and efficient
              infrastructure.
            </p>
            <p>
              Our development team is currently integrating in-game purchases, leveraging ICP for seamless and secure
              transactions.
            </p>
            <p>
              Explore our canister{" "}
              <a
                href="https://dashboard.internetcomputer.org/canister/54j2r-mqaaa-aaaad-aaj3q-cai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-blue-400"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ICPInfo;
