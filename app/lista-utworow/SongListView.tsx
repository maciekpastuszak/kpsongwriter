"use client";

import Navigation from "@/components/Navigation";
import { Shield, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SongList } from "@/types/songList";

type Props = {
  songs: SongList[];
};

export default function SongListView({ songs }: Props) {
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
            Lista Utworów
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mb-3"
          >
            Kompletna lista utworów KMP z czasem trwania, numerami rejestracji w
            ZAiKS i kodami ISWC.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm text-muted-foreground mb-8 italic"
          >
            Kolorem czerwonym oznaczone utwory dedykowane do wykonania przez
            wokalistki
          </motion.p>
        </div>
      </section>

      {/* Works Table */}
      <section className="py-10 bg-black">
        <div className="max-w-330 mx-auto px-6">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <thead>
                <tr className="border-b border-primary/20">
                  <th
                    className="text-left py-4 px-6 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Tytuł
                  </th>
                  <th
                    className="text-left py-4 px-6 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Czas trwania
                  </th>
                  <th
                    className="text-left py-4 px-6 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ISWC
                  </th>
                  <th
                    className="text-center py-4 px-6 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ZAiKS
                  </th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-primary/10 hover:bg-card/30 transition-colors"
                  >
                    <td
                      className="py-4 px-6 text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {song.title}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1 text-xs rounded-full">
                        {song.duration || "N/A"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground font-mono text-sm">
                      {song.iswct}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {song.zaiks && (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {songs.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-linear-to-br from-card to-muted rounded-lg border border-primary/20"
              >
                <h3
                  className="text-xl text-foreground mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {song.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Gatunek:
                    </span>
                    <span className="text-sm text-foreground">
                      {song.duration || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Czas trwania:
                    </span>
                    <span>{song.duration || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ISWC:</span>
                    <span className="text-sm text-foreground font-mono">
                      {song.iswct}
                    </span>
                  </div>
                </div>

                {song.zaiks && (
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Zarejestrowane w ZAiKS
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 bg-linear-to-t from-[#0c1a2b] to-black">
        <div className="max-w-225 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card/50 rounded-lg border border-primary/20 text-center"
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <h3
              className="text-2xl text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gwarancja Legalności
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Wszystkie utwory są zarejestrowane w ZAiKS (Stowarzyszenie Autorów
              ZAiKS) oraz posiadają unikalne numery ISWC (International Standard
              Musical Work Code). Gwarantuje to pełną legalność, ochronę praw
              autorskich i bezpieczeństwo transakcji licencyjnych.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
