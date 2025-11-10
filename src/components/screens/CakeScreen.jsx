"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CakePage({ onNext }) {
  const [stage, setStage] = useState("light");

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start bg-[#0a0a1a] text-white overflow-hidden relative">

      {/* Bunting Flags */}
      <motion.img
        src="/bunting.png"   // <-- replace with your path
        alt="bunting"
        className="w-full max-w-3xl mt-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      />

      {/* Container */}
      <div className="flex flex-col items-center justify-center mt-10">

        {/* Title = Only show after candle is lit */}
        {stage === "birthday" && (
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: "#ff99d4", textShadow: "0 0 20px #ff4ba3" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Happy Birthday, Cutiepiee!
          </motion.h1>
        )}

        {/* Cake */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <img
            src="/cake.png"   // <-- replace
            alt="cake"
            className="w-64 h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Confetti (only on birthday) */}
        {stage === "birthday" && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundImage: "url('/confetti.gif')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        {/* BUTTON AREA */}
        <motion.button
          onClick={() => {
            if (stage === "light") setStage("birthday");
            else if (stage === "birthday") setStage("decorate");
            else if (stage === "decorate" && onNext) onNext();
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 px-10 py-3 rounded-full text-lg font-semibold"
          style={{
            background: "linear-gradient(90deg, #ff6db1, #ff3fa9)",
            boxShadow: "0 0 20px #ff5bbb",
          }}
        >
          {stage === "light" && "🔥 Light the Candle"}
          {stage === "birthday" && "🎈 Pop the Balloons"}
          {stage === "decorate" && "✨ Decorate"}
        </motion.button>
      </div>
    </div>
  );
}
