"use client";

import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Wiadomość została wysłana!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Błąd wysyłania wiadomości");
      }
    } catch (error) {
      alert("Błąd połączenia z serwerem");
    }
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
            className="text-5xl md:text-6xl mb-4 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
          >
            Skontaktuj się ze mną w sprawie licencji lub współpracy
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="max-w-300 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2
                className="text-3xl mb-8 text-primary"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Napisz do mnie
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-foreground/80 mb-2"
                  >
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-card/50 border rounded-lg transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] outline-none"
                        : "border-primary/20 focus:border-primary focus:outline-none"
                    }`}
                    placeholder="Jan Kowalski"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-foreground/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-card/50 border rounded-lg transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] outline-none"
                        : "border-primary/20 focus:border-primary focus:outline-none"
                    }`}
                    placeholder="jan@example.com"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-foreground/80 mb-2"
                  >
                    Temat
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-card/50 border rounded-lg transition-all duration-300 ${
                      focusedField === "subject"
                        ? "border-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] outline-none"
                        : "border-primary/20 focus:border-primary focus:outline-none"
                    }`}
                    placeholder="Zapytanie o licencję"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-foreground/80 mb-2"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full px-4 py-3 bg-card/50 border rounded-lg transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] outline-none"
                        : "border-primary/20 focus:border-primary focus:outline-none"
                    }`}
                    placeholder="Opisz swoją sprawę..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-primary to-accent text-black rounded-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <Send className="w-5 h-5" />
                  <span className="text-lg">Wyślij wiadomość</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/images/caught-in-joy-KhBjIa04XuA-unsplash.jpg"
                alt="Contact"
                className="rounded-l-3xl shadow-lg"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
