"use client";

import Navigation from "@/components/Navigation";
import { Play, Pause, Volume2, Info } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const demoTracks = [
  { title: "Wiatr w Włosach", duration: "3:24", genre: "Ballada" },
  { title: "Miasto Snów", duration: "4:12", genre: "Pop Rock" },
  { title: "Krok po Kroku", duration: "3:48", genre: "Pop" },
  { title: "Cienie Nocy", duration: "3:55", genre: "Alternative" },
  { title: "Pod Gwiazdami", duration: "4:02", genre: "Ballada" },
];

export default function Demo() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-32 pb-3 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1771911654088-36080143c3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbCUyMGVtcHR5JTIwZGFya3xlbnwxfHx8fDE3NzIzNzY2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-330 mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-4 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Demo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
          >
            Posłuchaj próbek utworów z wykorzystaniem AI
          </motion.p>
        </div>
      </section>

      {/* Main Player */}
      <section className="py-20 bg-linear-to-b from-black to-[#0c1a2b]">
        <div className="max-w-225 mx-auto px-6">
          {/* Warning Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 bg-accent/10 rounded-lg border border-accent/30"
          >
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h3
                  className="text-lg text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Uwaga
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Demo zawiera roboczą melodię i wokal wygenerowany z udziałem
                  AI i ma charakter wyłącznie poglądowy. Nie stanowi części
                  licencji i nie może być wykorzystywane komercyjnie.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Player Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-8 bg-linear-to-br from-card to-muted rounded-2xl border border-primary/20 shadow-[0_0_60px_rgba(212,175,55,0.15)]"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl -z-10 opacity-50" />

            {/* Now Playing */}
            <div className="mb-8 text-center">
              <div className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">
                Teraz odtwarzane
              </div>
              <h2
                className="text-4xl text-primary mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {demoTracks[currentTrack].title}
              </h2>
              <div className="text-accent">
                {demoTracks[currentTrack].genre}
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="mb-8">
              <div className="flex items-end justify-center gap-1 h-32">
                {[...Array(50)].map((_, i) => {
                  const height = Math.random() * 100;
                  const isActive = (i / 50) * 100 < progress;
                  return (
                    <motion.div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-t from-primary to-accent"
                          : "bg-primary/20"
                      }`}
                      style={{ height: `${height}%` }}
                      animate={
                        isPlaying
                          ? {
                              height: [
                                `${height}%`,
                                `${Math.random() * 100}%`,
                                `${height}%`,
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.8,
                        repeat: isPlaying ? Infinity : 0,
                        ease: "easeInOut",
                        delay: i * 0.02,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="relative h-2 bg-primary/10 rounded-full overflow-hidden cursor-pointer group">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-accent"
                  style={{ width: `${progress}%` }}
                  animate={
                    isPlaying
                      ? { width: [`${progress}%`, `${progress + 1}%`] }
                      : {}
                  }
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    left: `${progress}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>1:24</span>
                <span>{demoTracks[currentTrack].duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-primary to-accent shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-110 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1" />
                )}
              </button>

              <button
                onClick={() =>
                  setCurrentTrack(
                    Math.min(demoTracks.length - 1, currentTrack + 1),
                  )
                }
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-4">
              <Volume2 className="w-5 h-5 text-primary" />
              <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Track List */}
      <section className="py-20 bg-[#0c1a2b]">
        <div className="max-w-225 mx-auto px-6">
          <h2
            className="text-3xl mb-8 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lista utworów Demo
          </h2>

          <div className="space-y-3">
            {demoTracks.map((track, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setCurrentTrack(index);
                  setIsPlaying(true);
                }}
                className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                  currentTrack === index
                    ? "bg-linear-to-r from-primary/20 to-accent/20 border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "bg-card/30 border-primary/10 hover:border-primary/30 hover:bg-card/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      currentTrack === index && isPlaying
                        ? "bg-linear-to-br from-primary to-accent"
                        : "bg-primary/10"
                    }`}
                  >
                    {currentTrack === index && isPlaying ? (
                      <Pause className="w-5 h-5 text-black" />
                    ) : (
                      <Play className="w-5 h-5 text-primary" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-lg mb-1 ${
                        currentTrack === index
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {track.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {track.genre} • {track.duration}
                    </div>
                  </div>

                  {currentTrack === index && isPlaying && (
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-primary rounded-full"
                          animate={{
                            height: ["8px", "20px", "8px"],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
