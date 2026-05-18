import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

import p1 from "../assets/images/portfolio-1.png";
import p2 from "../assets/images/portfolio-2.png";
import p3 from "../assets/images/portfolio-3.png";
import p4 from "../assets/images/portfolio-4.png";
import p5 from "../assets/images/portfolio-5.png";
import p6 from "../assets/images/portfolio-6.png";

const projects = [
  { img: p1, title: "Yaadein", genre: "Romantic Acoustic", year: "2024" },
  { img: p2, title: "Silhouette", genre: "Cinematic Piano", year: "2024" },
  { img: p3, title: "Dil Ki Baat", genre: "Emotional Hindi", year: "2023" },
  { img: p4, title: "Monsoon Echoes", genre: "Cinematic Instrumental", year: "2024" },
  { img: p5, title: "Tum Hi Ho (Reimagined)", genre: "Acoustic Cover", year: "2023" },
  { img: p6, title: "Infinite Loop", genre: "Original Production", year: "2024" },
];

export default function Portfolio() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-28 relative" data-testid="portfolio-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Discography</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Featured Work</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ img, title, genre, year }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-xl overflow-hidden cursor-pointer"
              data-testid={`portfolio-card-${i}`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                {/* Play button overlay */}
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={() => setPlaying(playing === i ? null : i)}
                  data-testid={`play-btn-${i}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(201,168,76,0.5)]">
                    {playing === i ? (
                      <Pause size={20} className="text-primary-foreground" />
                    ) : (
                      <Play size={20} className="text-primary-foreground ml-1" />
                    )}
                  </div>
                </button>

                {/* Waveform animation when playing */}
                {playing === i && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-end gap-[2px] h-8 opacity-80">
                    {[...Array(16)].map((_, j) => (
                      <div
                        key={j}
                        className="w-[2px] rounded-full bg-primary animate-waveform"
                        style={{ animationDelay: `${(j * 0.1) % 1.2}s`, minHeight: "3px" }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-serif text-base text-foreground leading-tight">{title}</h3>
                  <span className="text-xs text-muted-foreground font-sans ml-2 flex-shrink-0">{year}</span>
                </div>
                <span className="inline-block text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-sans">
                  {genre}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
