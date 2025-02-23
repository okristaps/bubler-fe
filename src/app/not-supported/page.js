"use client";
import Footer from "@/components/footer";
import HeaderBUBLER from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BUBLERImage from "../../../public/image3.png";

export default function NotSupported() {
  return (
    <div className="h-full">
      <HeaderBUBLER />

      <div className="flex justify-center mt-20">
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:ml-16"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <Image
            src={BUBLERImage}
            alt="BUBLER Meme"
            width={450}
            height={350}
            className="rounded-full sm:w-[550px] w-[250px]"
          />
        </motion.div>
      </div>

      <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-8 mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="bg-orange-500 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            Game Not Supported on Desktop
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            This game is only available on mobile devices.
            <br />
            Please visit <span className="text-blue-300 font-bold">bubler.club</span> on your mobile phone to play.
          </p>

          <div className="mt-6">
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
