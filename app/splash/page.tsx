"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Logo } from "@/components/logo";
import { motion } from "motion/react";

export function SplashPage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen bg-linear-to-b from-[#0c1a2b] via-[#0a1929] to-[#0a1929] overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Animated light beams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-linear-to-b from-transparent via-primary/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Spotlight glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,66,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={showContent ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Logo size="3xl" />
        </motion.div>
      </div>

      {/* Click hint */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary/60 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2,
        }}
      >
        KLIKNIJ ABY WEJŚĆ
      </motion.div>
    </motion.div>
  );
}
