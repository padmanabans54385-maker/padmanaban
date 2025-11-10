"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownScreen({ onDone }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            if (onDone) onDone();
          }, 500);
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a1a] text-white relative overflow-hidden">

      <motion.div
        className="flex items-center justify-center rounded-full"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,0,255,0.4), rgba(0,0,0,0.7))",
          boxShadow: "0 0 40px #ff00ff, 0 0 80px #00ffff",
        }}
      >
        <motion.div
          key={count}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-7xl font-bold"
          style={{
            color: "#ff40a1",
            textShadow: "0 0 20px #ff40a1",
          }}
        >
          {count}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 text-2xl"
        style={{ color: "#ffb6d5", textShadow: "0 0 15px #ff40a1" }}
      >
        Crafting your special moment...
      </motion.p>
    </div>
  );
}
