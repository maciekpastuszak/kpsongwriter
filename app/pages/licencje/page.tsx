import { Navigation } from "../components/navigation";
import {
  Shield,
  FileText,
  Download,
  CheckCircle2,
  Music,
  Copyright,
  DollarSign,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const documents = [
  {
    title: "Regulamin",
    description: "Zasady korzystania z serwisu i katalog piosenek",
    filename: "Regulamin KMP",
  },
  {
    title: "Polityka Licencji",
    description: "Szczegółowe warunki licencjonowania utworów",
    filename: "Polityka Licencji KMP",
  },
  {
    title: "Polityka Prywatności",
    description: "Ochrona danych osobowych i RODO",
    filename: "Polityka Prywatności KMP",
  },
  {
    title: "Wzór Umowy Licencyjnej",
    description: "Szablon umowy wyłącznej licencji na tekst piosenki",
    filename: "Wzór Umowy KMP",
  },
  {
    title: "Certyfikat Licencji (wzór z numeracją)",
    description: "Przykładowy certyfikat z unikalnym numerem",
    filename: "Certyfikat Licencji KMP",
  },
];

const howItWorks = [
  {
    number: "1",
    title: "Wybierasz tekst",
    description:
      "Przeglądasz katalog i znajdujesz utwór, który Cię zainteresował",
  },
  {
    number: "2",
    title: "Kontakt",
    description: "Kontaktujesz się ze mną w sprawie zakupu licencji",
  },
  {
    number: "3",
    title: "Otrzymujesz projekt umowy",
    description:
      "Wysyłam Ci szczegółowy projekt umowy licencyjnej do zapoznania",
  },
  {
    number: "4",
    title: "Podpis + przelew",
    description:
      "Po akceptacji warunków podpisujesz umowę i dokonujesz płatności",
  },
  {
    number: "5",
    title: "Otrzymujesz Certyfikat Licencji",
    description:
      "Dostajesz oficjalny certyfikat z unikalnym numerem rejestracyjnym",
  },
];

export function LicencjePage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1764643588195-e18878c0a39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxpZ2h0cyUyMGJlYW1zJTIwZm9nfGVufDF8fHx8MTc3MjM3NjYwOHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        <div className="relative max-w-[1320px] mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl mb-6 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Licencja wyłączna na tekst piosenki
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-foreground/80 max-w-3xl mx-auto"
          >
            Kup pełne prawa do tekstu i stwórz własną, unikalną kompozycję
            muzyczną
          </motion.p>
        </div>
      </section>

      {/* Model Licencjonowania */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c1a2b]">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-8 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Model Licencjonowania
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card/50 rounded-lg border border-primary/20"
          >
            <p className="text-foreground/80 leading-relaxed mb-4">
              Oferuję{" "}
              <span className="text-primary">
                wyłączne licencje na teksty piosenek
              </span>
              . Demo AI ma charakter wyłącznie{" "}
              <span className="text-accent">poglądowy</span> i służy prezentacji
              potencjału tekstu.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Po zakupie licencji nabywca tworzy{" "}
              <span className="text-primary">
                własną, nową kompozycję muzyczną
              </span>
              , wykorzystując zakupiony tekst. Demo AI nie jest częścią licencji
              i nie może być wykorzystywane komercyjnie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co Otrzymujesz */}
      <section className="py-20 bg-[#0c1a2b]">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2
            className="text-4xl mb-12 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Co otrzymujesz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: FileText,
                title: "Wyłączne prawa do tekstu",
                description:
                  "Pełne i nieograniczone prawa do wykorzystania tekstu piosenki",
              },
              {
                icon: Music,
                title: "Prawo do przekształcenia warstwy muzycznej",
                description:
                  "Możliwość stworzenia własnej, unikalnej kompozycji muzycznej",
              },
              {
                icon: Copyright,
                title: "Pełne prawa autorskie do nowej muzyki",
                description:
                  "Stajesz się autorem nowo stworzonej kompozycji muzycznej",
              },
              {
                icon: DollarSign,
                title: "Prawa do użytku komercyjnego",
                description:
                  "Możliwość komercyjnego wykorzystania utworu bez ograniczeń",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-card to-muted rounded-lg border border-primary/20 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(255,140,66,0.2)] transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <h3
                  className="text-xl text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Czym jest Licencja Wyłączna */}
      <section className="py-20 bg-gradient-to-b from-[#0c1a2b] to-black">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-8 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Czym jest licencja wyłączna
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card/50 rounded-lg border border-primary/20"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">
                  Tekst jest{" "}
                  <span className="text-primary">
                    natychmiast usuwany ze sprzedaży
                  </span>{" "}
                  po zakupie licencji
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">
                  Utwór zostaje{" "}
                  <span className="text-accent">
                    oznaczony jako "Sprzedany"
                  </span>{" "}
                  w bazie
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">
                  <span className="text-primary">
                    Żadne dalsze licencjonowanie
                  </span>{" "}
                  tego samego tekstu nie jest możliwe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jak to działa */}
      <section className="py-20 bg-black">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2
            className="text-4xl mb-16 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Jak to działa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-lg text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-accent/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumenty do Pobrania */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c1a2b]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2
            className="text-4xl mb-4 text-primary text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Dokumenty do pobrania
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />

          <div className="space-y-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-6 p-6 bg-gradient-to-r from-card to-muted rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <FileText className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-lg text-foreground mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {doc.description}
                  </p>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    Download {doc.filename}
                  </span>
                  <span className="sm:hidden">Download</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Akceptacja i CTA */}
      <section className="py-20 bg-[#0c1a2b]">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-card to-muted rounded-lg border border-primary/20"
          >
            <div className="flex items-start gap-4 mb-8">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-primary/30 bg-black/50 text-primary focus:ring-primary focus:ring-offset-0"
              />
              <label
                htmlFor="terms"
                className="text-foreground/80 leading-relaxed cursor-pointer"
              >
                Akceptuję <span className="text-primary">Regulamin</span>,{" "}
                <span className="text-primary">Politykę Licencji</span> oraz
                treść <span className="text-primary">Wzoru Umowy</span>.
              </label>
            </div>

            <button
              disabled={!acceptedTerms}
              className={`w-full py-4 rounded-lg transition-all duration-300 ${
                acceptedTerms
                  ? "bg-gradient-to-r from-primary to-accent text-black shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.7)] hover:scale-[1.02]"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-xl">Kup licencję</span>
            </button>

            {!acceptedTerms && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                Zaakceptuj warunki, aby kontynuować
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
