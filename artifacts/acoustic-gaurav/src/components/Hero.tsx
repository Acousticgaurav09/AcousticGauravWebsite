import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const BAR_COUNT = 28;

export default function Hero() {
  const scrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Animated Background + hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4ede0] via-[#f8f2e6] to-[#ede3d0]" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-70"
        style={{ backgroundImage: "url('/src/assets/images/studio-1.png')", transform: 'scale(1.03)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,52,16,0.08)_0%,transparent_60%)] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(160,86,26,0.10)_0%,transparent_60%)] mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 120 + 40}px`,
            height: `${Math.random() * 120 + 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 8 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Bottom Waveform */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] px-4 h-40 opacity-30">
        {[...Array(BAR_COUNT)].map((_, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-primary animate-waveform flex-shrink-0"
            style={{
              animationDelay: `${(i * 0.08) % 1.2}s`,
              minHeight: "8px",
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans"
        >
          Official Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-foreground leading-tight mb-4 text-glow drop-shadow-lg"
        >
          ACOUSTIC
          <br />
          <span className="text-primary">GAURAV</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="w-24 h-px bg-primary mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-sm sm:text-base tracking-[0.25em] uppercase text-muted-foreground mb-3 font-sans"
        >
          Singer &bull; Songwriter &bull; Music Producer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.7 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
        >
          Crafting emotion through sound with cinematic music production, songwriting,
          mixing, mastering, arrangement, and loop creation.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        data-testid="scroll-indicator"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
