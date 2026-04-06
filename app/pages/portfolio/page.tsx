import { Navigation } from "../components/navigation";
import { Play, FileText } from "lucide-react";
import { motion } from "motion/react";
import studioImage from "figma:asset/989346e6c74e009d58cf75b7e41f5098314e259c.png";

const audioSamples = [
  { title: "Nocna Symfonia", duration: "3:24", genre: "Ballada" },
  { title: "Szeptem do Ciebie", duration: "4:12", genre: "Pop" },
  { title: "Cienie Przeszłości", duration: "3:48", genre: "Rock" },
  { title: "Złote Lata", duration: "3:55", genre: "Retro" },
];

const pdfExcerpts = [
  { title: "Kolekcja Tekstów 2024", pages: "12 stron", type: "PDF" },
  { title: "Refleksje Literackie", pages: "8 stron", type: "PDF" },
  { title: "Wiersze Sceniczne", pages: "15 stron", type: "PDF" },
  { title: "Utwory Specjalne", pages: "10 stron", type: "PDF" },
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1524005694952-a9221a423d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtb29keSUyMGRhcmt8ZW58MXx8fHwxNzcyMzc2NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Studio Graphic - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100, y: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-8 right-8 z-20 hidden lg:block"
        >
          <div className="relative group">
            {/* Glow effect behind image */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,140,66,0.5) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/40 group-hover:border-primary/60 transition-all duration-500 shadow-[0_0_60px_rgba(255,140,66,0.4)] group-hover:shadow-[0_0_80px_rgba(255,140,66,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1768885511419-db1b61b02d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBuaWdodGNsdWIlMjBhdG1vc3BoZXJlJTIwbmVvbiUyMGxpZ2h0c3xlbnwxfHx8fDE3NzI1MzA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Recording studio with club atmosphere"
                className="w-[432px] h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <div className="max-w-[1320px] mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl mb-8 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Portfolio
          </motion.h1>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1749704015814-edb3a318abe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtaWNyb3Bob25lJTIwd2FybSUyMG9yYW5nZSUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MjQ2NjY2OHww&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/92 via-[#0a1929]/95 to-[#0a1929]/92" />

        {/* Animated spotlight glow overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,140,66,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h2
              className="text-3xl mb-6 text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Krzysztof Maciej Pastuszak
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Autor tekstów piosenek i współkompozytor z udziałem AI tworzący
              oryginalne utwory słowno-muzyczne. Ta twórczość łączy głęboką
              emocjonalność z literacką precyzją, tworząc teksty, które zapadają
              w pamięć i poruszają serca
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Każdy utwór to osobista opowieść, starannie wyrzeźbiona w słowach
              i wsparta nieprzypadkową linią melodyczną. To specjalizacja w
              tworzeniu tekstów, które łączą poetycką głębię z komercyjnym
              potencjałem, dając wykonawcom gotowy materiał do stworzenia
              własnych hitów.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Wszystkie utwory zarejestrowane są w ZAiKS i posiadają numery
              ISWC, gwarantując pełną legalność i bezpieczeństwo transakcji
              licencyjnych.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4 italic">
              Jestem tekściarzem amatorem – emerytem. Pierwszą piosenkę
              napisałem w wieku siedemdziesięciu lat. Przez pierwsze sześć
              miesięcy napisałem ponad sto pięćdziesiąt piosenek. Dlaczeg? … bo
              nie mam czasu, … bo chciałem coś napisać dla moich dzieci i
              wnuków, … bo chciałem sprawdzić czy „ … mogło być inaczej".
            </p>
            <p className="text-foreground/80 leading-relaxed text-right italic">
              dobrej zabawy KMP
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audio Samples Section */}
      <section className="py-20 bg-[#0c1a2b]">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2
            className="text-4xl mb-12 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Próbki Audio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audioSamples.map((sample, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-gradient-to-r from-card to-muted rounded-lg border border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,66,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <button className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-accent/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,140,66,0.4)]">
                    <Play className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </button>

                  <div className="flex-1">
                    <h3
                      className="text-lg text-foreground mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {sample.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{sample.genre}</span>
                      <span>•</span>
                      <span>{sample.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Excerpts Section */}
      <section className="py-20 bg-gradient-to-b from-[#0c1a2b] to-black">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2
            className="text-4xl mb-12 text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fragmenty Tekstów
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfExcerpts.map((excerpt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-gradient-to-r from-muted to-card rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-lg text-foreground mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {excerpt.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{excerpt.type}</span>
                      <span>•</span>
                      <span>{excerpt.pages}</span>
                    </div>
                  </div>

                  <button className="px-4 py-2 text-sm text-primary border border-primary/30 rounded hover:bg-primary/10 transition-all">
                    Pobierz
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
