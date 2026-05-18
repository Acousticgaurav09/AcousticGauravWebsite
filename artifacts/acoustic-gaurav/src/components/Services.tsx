import { motion } from "framer-motion";
import { Music, SlidersHorizontal, ListMusic, Repeat, Mic2, Film, Music2, AudioLines, Radio, Layers } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Music Production",
    desc: "Full-scale cinematic and commercial music production with industry-standard sound quality.",
  },
  {
    icon: SlidersHorizontal,
    title: "Mixing & Mastering",
    desc: "Professional mixing and mastering that gives your track clarity, depth, and competitive loudness.",
  },
  {
    icon: ListMusic,
    title: "Song Arrangement",
    desc: "Creative arrangement that elevates your musical idea into a fully realized sonic landscape.",
  },
  {
    icon: Repeat,
    title: "Loop Creation",
    desc: "Custom loops and sample packs crafted for producers and sync licensing opportunities.",
  },
  {
    icon: Mic2,
    title: "Vocal Production",
    desc: "From direction to editing — polished vocal production that brings out your true voice.",
  },
  {
    icon: Film,
    title: "Background Scores",
    desc: "Atmospheric and narrative background scores for films, reels, and visual content.",
  },
  {
    icon: Music2,
    title: "Piano & Guitar Composition",
    desc: "Expressive compositions — from delicate acoustic sketches to full orchestrations.",
  },
  {
    icon: AudioLines,
    title: "Acoustic Covers",
    desc: "Intimate acoustic reimaginings of popular tracks with cinematic production depth.",
  },
  {
    icon: Radio,
    title: "Streaming Release Support",
    desc: "End-to-end support for releasing your music on Spotify, Apple Music, and beyond.",
  },
  {
    icon: Layers,
    title: "Instruments Arrangements",
    desc: "Multi-layered instrument arrangements blending traditional and contemporary sounds into rich, textured compositions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative" data-testid="services-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,52,16,0.06)_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Services</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">What I Create</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-hover rounded-xl p-6 cursor-default"
              data-testid={`service-card-${i}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
