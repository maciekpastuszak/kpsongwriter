"use client";

import Navigation from "@/components/Navigation";
import { Play, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const songs = [
  {
    title: "Wiatr w Włosach",
    description: "Nostalgiczna ballada o wspomnieniach letnich dni",
    genre: "Ballada",
    status: "Dostępny",
    statusColor: "text-green-400",
  },
  {
    title: "Miasto Snów",
    description: "Energetyczna opowieść o nocnym życiu metropolii",
    genre: "Pop Rock",
    status: "Dostępny",
    statusColor: "text-green-400",
  },
  {
    title: "Krok po Kroku",
    description: "Motywująca pieśń o determinacji i wytrwałości",
    genre: "Pop",
    status: "W trakcie",
    statusColor: "text-accent",
  },
  {
    title: "Cienie Nocy",
    description: "Mroczna kompozycja o ukrytych emocjach",
    genre: "Alternative",
    status: "Dostępny",
    statusColor: "text-green-400",
  },
  {
    title: "Słońce Wschodzi",
    description: "Optymistyczna piosenka o nowym początku",
    genre: "Pop",
    status: "Sprzedany",
    statusColor: "text-red-400",
  },
  {
    title: "Pod Gwiazdami",
    description: "Romantyczna ballada o miłości i tęsknocie",
    genre: "Ballada",
    status: "Dostępny",
    statusColor: "text-green-400",
  },
  {
    title: "Droga Powrotna",
    description: "Refleksyjna opowieść o powrocie do korzeni",
    genre: "Folk Rock",
    status: "Dostępny",
    statusColor: "text-green-400",
  },
  {
    title: "Ostatni Taniec",
    description: "Sentymentalna pieśń o pożegnaniu i nadziei",
    genre: "Ballada",
    status: "W trakcie",
    statusColor: "text-accent",
  },
];

export default function KatalogPiosenekPage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10,25,41,0.9), rgba(10,25,41,0.95)), url('https://images.unsplash.com/photo-1761005653849-74d20f95ecc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGVxdWlwbWVudCUyMGNpbmVtYXRpYyUyMGRhcmslMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3MjQ2NjY2OXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Animated spotlight glow overlay */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,140,66,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
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

        <div className="relative z-10 max-w-330 mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Katalog Piosenek
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl"
          >
            Przeglądaj bazę oryginalnych utworów z demo muzyki AI. Każda
            piosenka zawiera unikalne teksty i profesjonalne brzmienie.
          </motion.p>
        </div>
      </section>

      {/* Songs Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-330 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-linear-to-br from-card to-muted border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,66,0.2)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3
                        className="text-2xl text-foreground mb-2 group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {song.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                        {song.genre}
                      </span>
                    </div>

                    <span
                      className={`text-sm ${song.statusColor} border px-3 py-1 rounded-full text-xs`}
                    >
                      {song.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {song.description}
                  </p>

                  {/* Audio Player Placeholder */}
                  <div className="mb-6 p-4 bg-black/30 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-accent/30 transition-all group/play">
                        <Play className="w-5 h-5 text-primary group-hover/play:text-accent transition-colors" />
                      </button>
                      <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-primary/40 rounded-full" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        3:24
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full px-6 py-3 bg-linear-to-r from-primary/10 to-accent/10 text-primary border border-primary/30 rounded-lg hover:border-accent hover:shadow-[0_0_20px_rgba(255,140,66,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                    disabled={song.status === "Sprzedany"}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {song.status === "Sprzedany"
                      ? "Niedostępny"
                      : "Zapytaj o licencję"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
