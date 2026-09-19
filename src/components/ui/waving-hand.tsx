"use client";

import { motion } from "framer-motion";

export function WavingHand() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      style={{ originX: "50%", originY: "70%" }}
    >
      {/* Palm */}
      <path
        d="M35 55 C30 50, 28 40, 32 32 C36 24, 44 22, 50 24 C56 22, 64 24, 68 32 C72 40, 70 50, 65 55 L60 70 C58 75, 42 75, 40 70 Z"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />

      {/* Thumb */}
      <motion.path
        d="M32 35 C28 30, 22 32, 20 38 C18 44, 22 50, 28 52 L32 48"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
        animate={{ rotate: [0, -10, 5, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
        style={{ originX: "32px", originY: "45px" }}
      />

      {/* Index finger */}
      <motion.path
        d="M42 24 C42 16, 44 8, 46 6 C48 4, 50 4, 50 6 C50 8, 50 16, 48 24"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
        animate={{ rotate: [0, -15, 8, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.05 }}
        style={{ originX: "46px", originY: "24px" }}
      />

      {/* Middle finger */}
      <motion.path
        d="M48 22 C48 12, 50 4, 52 2 C54 0, 56 0, 56 2 C56 4, 56 12, 54 22"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
        animate={{ rotate: [0, -18, 10, -18, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.1 }}
        style={{ originX: "52px", originY: "22px" }}
      />

      {/* Ring finger */}
      <motion.path
        d="M54 22 C54 12, 56 6, 58 4 C60 2, 62 2, 62 4 C62 6, 62 14, 60 22"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
        animate={{ rotate: [0, -14, 6, -14, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.15 }}
        style={{ originX: "58px", originY: "22px" }}
      />

      {/* Pinky finger */}
      <motion.path
        d="M60 26 C60 18, 62 12, 64 10 C66 8, 68 8, 68 10 C68 12, 67 20, 65 28"
        fill="#FBBF24"
        stroke="#F59E0B"
        strokeWidth="1.5"
        animate={{ rotate: [0, -12, 4, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut", delay: 0.2 }}
        style={{ originX: "64px", originY: "28px" }}
      />

      {/* Wrist lines */}
      <path
        d="M40 68 C42 72, 58 72, 60 68"
        stroke="#F59E0B"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M42 72 C44 75, 56 75, 58 72"
        stroke="#F59E0B"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>
  );
}
