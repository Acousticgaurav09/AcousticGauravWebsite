import { motion } from "framer-motion";
import { Music2, Mic2, SlidersHorizontal, Award } from "lucide-react";

const highlights = [
  { icon: Music2, label: "1000+ Tracks Produced" },
  { icon: Award, label: "Romantic & Cinematic" },
  { icon: Mic2, label: "Vocal Production" },
  { icon: SlidersHorizontal, label: "Mix & Master Expert" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" data-testid="about-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,52,16,0.05)_0%,transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Concentric rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-primary/20"
                  style={{ margin: `${i * 18}px` }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
                />
              ))}
              {/* Center monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 flex items-center justify-center">
                  <span className="font-serif font-black text-5xl text-primary text-glow">AG</span>
                </div>
              </div>
              {/* Waveform bars around */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-[3px] h-12 opacity-60">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[2px] rounded-full bg-primary animate-waveform"
                    style={{ animationDelay: `${(i * 0.09) % 1.2}s`, minHeight: "4px" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">
              About the Artist
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Emotion<br />Meets Craft
            </h2>
            <div className="w-12 h-px bg-primary mb-6" />
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Acoustic Gaurav is an independent singer-songwriter and music producer known for
              emotional, cinematic, and commercial-quality music production. Having produced thousands
              of tracks for artists across multiple states, he specializes in songwriting, arrangement,
              loop creation, vocal production, mixing, and mastering with industry-standard sound quality.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass glass-hover rounded-lg px-4 py-3 flex items-center gap-3"
                  data-testid={`highlight-${i}`}
                >
                  <Icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-xs text-foreground/80 font-sans tracking-wide">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
