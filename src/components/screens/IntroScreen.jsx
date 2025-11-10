"use client";

import { motion } from "framer-motion";

export default function BirthdayIntro({ onStart }) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a1a] text-white overflow-hidden">

      <motion.img
        src="/gifs/intro.gif"   
        alt="cute"
        className="w-40 h-40 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center px-4"
        style={{
          color: "#ff9bd6",
          textShadow: "0 0 20px #ff4fa4",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        A Cutiepie was born today, 21 years ago!
      </motion.h1>

      <motion.p
        className="text-lg mt-4 text-center"
        style={{
          color: "#ffe0f3",
          textShadow: "0 0 10px #ff6db1",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        Yes, it’s <b>YOU!</b> A little surprise awaits...
      </motion.p>

      <motion.button
        onClick={onStart}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-10 px-10 py-3 rounded-full text-lg font-semibold"
        style={{
          background: "linear-gradient(90deg, #ff6db1, #ff3fa9)",
          boxShadow: "0 0 20px #ff5bbb",
        }}
      >
        ⭐ Start the surprise
      </motion.button>
    </div>
  );
}
