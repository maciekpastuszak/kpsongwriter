"use client";

import Navigation from "@/components/Navigation";
import { Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { Lyrics } from "@/types/lyrics";

type Props = {
  lyrics: Lyrics[];
};

export default function LyricsView({ lyrics }: Props) {
  const [openLyrics, setOpenLyrics] = useState<number[]>([]);

  const toggleLyrics = (index: number) => {
    setOpenLyrics((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-3 bg-linear-to-b from-[#0c1a2b] to-black">
        <div className="max-w-330 mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Katalog Tekstów
          </motion.h1>
        </div>
      </section>

      {/* Lyrics Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-330 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lyrics.map((lyric, index) => {
              const isOpen = openLyrics.includes(index);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg bg-linear-to-br from-card to-muted border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-8">
                    {/* Title */}
                    <h3
                      className="text-3xl text-primary mb-6"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {lyric.title}
                    </h3>

                    {/* Text */}
                    <pre
                      className="text-foreground/70 whitespace-pre-wrap leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {isOpen
                        ? lyric.content
                        : lyric.content?.slice(0, 120) + "..."}
                    </pre>

                    {/* Button */}
                    <button
                      onClick={() => toggleLyrics(index)}
                      className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent text-black rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      {isOpen ? "Hide text" : "Pokaż tekst"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
