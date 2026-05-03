"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { Play, Pause, MessageCircle } from "lucide-react";
import { Song } from "@/types/song";

type Props = {
  songs: Song[];
};

const statusStyles = {
  Dostępny: "bg-green-500/10 text-green-500 border-green-500/20",
  "W trakcie": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Sprzedany: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function SongsView({ songs }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingId === song._id) {
      audio.pause();
      setPlayingId(null);
    } else {
      // If a different song was playing, change the source
      audio.src = song.audioUrl;
      audio.load(); // Force the browser to load the new source
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
      setPlayingId(song._id);
    }
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setPlayingId(null);
          setCurrentTime(0);
        }}
      />
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
                      className={`px-3 py-1 rounded-full text-xs border ${statusStyles[song.status] || "bg-gray-500/10 text-gray-500"}`}
                    >
                      {song.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {song.description}
                  </p>

                  {/* Audio Player Container */}
                  <div className="mb-6 p-4 bg-black/40 rounded-xl border border-primary/10 backdrop-blur-sm">
                    <div className="flex flex-col gap-3">
                      {/* Controls & Time */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => togglePlay(song)}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors"
                          >
                            {playingId === song._id ? (
                              <Pause className="w-6 h-6 fill-current" />
                            ) : (
                              <Play className="w-6 h-6 fill-current ml-1" />
                            )}
                          </motion.button>

                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold">
                              Teraz gra:
                            </p>
                            <p className="text-sm text-foreground font-medium truncate max-w-30">
                              {playingId === song._id
                                ? song.title
                                : "Odtwarzaj"}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-mono text-primary">
                            {playingId === song._id
                              ? formatTime(currentTime)
                              : "0:00"}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground">
                            {" "}
                            / {song.duration ? `${song.duration}s` : "--:--"}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Area */}
                      <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden group cursor-pointer">
                        {/* Dynamic Progress Fill */}
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-linear-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          animate={{
                            width: playingId === song._id ? `${progress}%` : 0,
                          }}
                          transition={{
                            type: "spring",
                            bounce: 0,
                            duration: 0.2,
                          }}
                        />

                        {/* Decorative Waveform-ish Overlay (Optional) */}
                        <div className="absolute inset-0 flex items-center justify-around px-1 opacity-20 pointer-events-none">
                          {isMounted &&
                            [...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="w-0.5 bg-white rounded-full"
                                style={{
                                  height: `${Math.random() * 60 + 20}%`,
                                }}
                              />
                            ))}
                        </div>
                      </div>
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
