import { motion } from "framer-motion";
import { Cpu, Music2, Mic, SlidersHorizontal } from "lucide-react";

import s1 from "../assets/images/studio-1.png";
import s2 from "../assets/images/studio-2.png";
import s3 from "../assets/images/studio-3.png";
import s4 from "../assets/images/studio-4.png";

const setups = [
  {
    img: s1,
    icon: Cpu,
    title: "Professional DAW Workflow",
    desc: "Industry-grade digital audio workstation setup with precision plugins and zero-latency monitoring.",
  },
  {
    img: s2,
    icon: Music2,
    title: "Piano Composition Setup",
    desc: "Full-weighted MIDI grand piano with cinematic sample libraries for expressive, natural composition.",
  },
  {
    img: s3,
    icon: Mic,
    title: "Vocal Recording Environment",
    desc: "Acoustically treated recording space with premium condenser microphones and preamps.",
  },
  {
    img: s4,
    icon: SlidersHorizontal,
    title: "Mixing & Mastering Station",
    desc: "Reference-grade monitoring with analog hardware outboard gear for warm, punchy mixes.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="py-28 relative" data-testid="studio-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(122,52,16,0.06)_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Behind the Scenes</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">The Studio</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {setups.map(({ img, icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden glass-hover"
              data-testid={`studio-card-${i}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-base text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
