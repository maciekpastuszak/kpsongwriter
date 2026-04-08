"use client";

import Navigation from "@/components/Navigation";
import { Shield, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const works = [
  {
    title: "Wiatr w Włosach",
    genre: "Ballada",
    status: "Dostępny",
    iswc: "T-123.456.789-0",
    zaiks: true,
  },
  {
    title: "Miasto Snów",
    genre: "Pop Rock",
    status: "Dostępny",
    iswc: "T-123.456.790-1",
    zaiks: true,
  },
  {
    title: "Krok po Kroku",
    genre: "Pop",
    status: "W trakcie negocjacji",
    iswc: "T-123.456.791-2",
    zaiks: true,
  },
  {
    title: "Cienie Nocy",
    genre: "Alternative",
    status: "Dostępny",
    iswc: "T-123.456.792-3",
    zaiks: true,
  },
  {
    title: "Słońce Wschodzi",
    genre: "Pop",
    status: "Sprzedany",
    iswc: "T-123.456.793-4",
    zaiks: true,
  },
  {
    title: "Pod Gwiazdami",
    genre: "Ballada",
    status: "Dostępny",
    iswc: "T-123.456.794-5",
    zaiks: true,
  },
  {
    title: "Droga Powrotna",
    genre: "Folk Rock",
    status: "Dostępny",
    iswc: "T-123.456.795-6",
    zaiks: true,
  },
  {
    title: "Ostatni Taniec",
    genre: "Ballada",
    status: "W trakcie negocjacji",
    iswc: "T-123.456.796-7",
    zaiks: true,
  },
  {
    title: "Deszczowa Noc",
    genre: "Jazz",
    status: "Dostępny",
    iswc: "T-123.456.797-8",
    zaiks: true,
  },
  {
    title: "Złote Lata",
    genre: "Retro",
    status: "Dostępny",
    iswc: "T-123.456.798-9",
    zaiks: true,
  },
];

export default function ListaUtoworowPage() {
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
            Lista Utworów
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Kompletna baza utworów z informacjami o statusie, gatunku i numerach
            rejestracyjnych.
          </motion.p>
        </div>
      </section>

      {/* Works Table */}
      <section className="py-20 bg-black">
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
                    Gatunek
                  </th>
                  <th
                    className="text-left py-4 px-6 text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Status
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
                {works.map((work, index) => (
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
                      {work.title}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {work.genre}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 text-xs rounded-full ${
                          work.status === "Dostępny"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : work.status === "Sprzedany"
                              ? "bg-red-500/10 text-red-400 border border-red-500/20"
                              : "bg-accent/10 text-accent border border-accent/20"
                        }`}
                      >
                        {work.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground font-mono text-sm">
                      {work.iswc}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {work.zaiks && (
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
            {works.map((work, index) => (
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
                  {work.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Gatunek:
                    </span>
                    <span className="text-sm text-foreground">
                      {work.genre}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Status:
                    </span>
                    <span
                      className={`text-sm ${
                        work.status === "Dostępny"
                          ? "text-green-400"
                          : work.status === "Sprzedany"
                            ? "text-red-400"
                            : "text-accent"
                      }`}
                    >
                      {work.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ISWC:</span>
                    <span className="text-sm text-foreground font-mono">
                      {work.iswc}
                    </span>
                  </div>
                </div>

                {work.zaiks && (
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
