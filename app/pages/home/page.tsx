import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Music, FileText, Shield, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const offerings = [
  {
    icon: Music,
    title: 'Oryginalne melodie',
    description: 'demo AI z profesjonalnym brzmieniem'
  },
  {
    icon: FileText,
    title: 'Autorskie 100% teksty',
    description: 'unikalne treści pełne emocji'
  },
  {
    icon: Shield,
    title: 'Licencje wyłączne',
    description: 'pełne prawa do utworu'
  },
  {
    icon: Heart,
    title: 'Wsparcie artysty',
    description: 'kontakt i pomoc na każdym etapie'
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1765224747170-be7b97010052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29uY2VydCUyMHN0YWdlJTIwc3BvdGxpZ2h0fGVufDF8fHx8MTc3MjM3NjYwN3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Spotlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        
        {/* Animated glow */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,66,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Vintage Microphone Graphic - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-8 right-8 z-20 hidden lg:block"
        >
          <div className="relative group">
            {/* Glow effect behind image */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(255,140,66,0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/40 group-hover:border-primary/60 transition-all duration-500 shadow-[0_0_60px_rgba(255,140,66,0.4)] group-hover:shadow-[0_0_80px_rgba(255,140,66,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1760830477848-8dcfeb038f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWljcm9waG9uZSUyMGJva2VoJTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzcyNTI5ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vintage microphone with stage lights"
                className="w-[432px] h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl mb-6 text-primary tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Komu piosenkę komu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl mb-4 text-foreground/90 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Autorskie piosenki Krzysztofa Macieja Pastuszaka.
            <br />
            Odkryj bazę utworów z oryginalnymi tekstami i demo muzyki AI.
            <br />
            Kup licencję wyłączną i stwórz własny hit.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm text-muted-foreground mb-8 italic"
          >
            Teksty dostępne wyłącznie po zalogowaniu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/katalog-piosenek"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Przeglądaj katalog
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-transparent text-primary border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Posłuchaj demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Co Oferuję Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c1a2b]">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl text-center mb-16 text-primary"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Co oferuję
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 bg-gradient-to-b from-card to-muted rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,140,66,0.2)]"
              >
                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <offering.icon className="w-12 h-12 text-primary mb-4 group-hover:drop-shadow-[0_0_10px_rgba(255,140,66,0.6)] transition-all" />
                  <h3
                    className="text-xl mb-2 text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}