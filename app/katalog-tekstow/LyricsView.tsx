"use client";

import Navigation from "@/components/Navigation";
import { Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

import { Lyrics } from "@/types/lyrics";

type Props = {
  lyrics: Lyrics[];
};

export default function LyricsView({ lyrics }: Props) {
  const locked = true;
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-linear-to-b from-[#0c1a2b] to-black">
        <div className="max-w-330 mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Katalog Tekstów
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Pełne teksty piosenek dostępne dla zalogowanych użytkowników.
            Zaloguj się aby poznać kompletne wersje utworów.
          </motion.p>
        </div>
      </section>

      {/* Lyrics Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-330 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lyrics.map((lyric, index) => (
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

                  {/* Excerpt with blur effect */}
                  <div className="relative mb-6">
                    <div className="relative">
                      <pre
                        className="text-foreground/70 whitespace-pre-wrap leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {lyric.content?.slice(0, 120)}...
                      </pre>

                      {/* Locked overlay */}
                      {locked && (
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-card/80 to-card flex items-end justify-center pb-8">
                          <div className="text-center">
                            <Lock className="w-12 h-12 text-primary mx-auto mb-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                            <p className="text-sm text-muted-foreground">
                              Zaloguj się aby zobaczyć pełny tekst
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">
                      {lyric.content?.split("\n\n").length ?? 0} zwrotki
                    </span>
                    {locked && (
                      <span className="text-xs text-accent flex items-center gap-2">
                        <Lock className="w-3 h-3" />
                        Wymagane logowanie
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/logowanie"
                    className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent text-black rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Zaloguj się, aby zobaczyć pełny tekst
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-linear-to-t from-[#0c1a2b] to-black">
        <div className="max-w-225 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card/50 rounded-lg border border-primary/20"
          >
            <Lock className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            <h3
              className="text-2xl text-primary mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dostęp do pełnych tekstów
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Aby przeglądać kompletne wersje tekstów piosenek, musisz posiadać
              konto i być zalogowanym użytkownikiem. Zarejestruj się lub
              zaloguj, aby uzyskać pełny dostęp do całej bazy utworów.
            </p>
            <Link
              href="/logowanie"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              Przejdź do logowania
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
