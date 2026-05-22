import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic, SiYoutube, SiInstagram } from "react-icons/si";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

const platforms = [
  {
    icon: SiSpotify,
    name: "Spotify",
    href: "#",
    color: "#1DB954",
    glow: "hover:shadow-[0_0_30px_rgba(29,185,84,0.4)]",
    border: "hover:border-[#1DB954]/60",
  },
  {
    icon: SiApplemusic,
    name: "Apple Music",
    href: "#",
    color: "#FA243C",
    glow: "hover:shadow-[0_0_30px_rgba(250,36,60,0.4)]",
    border: "hover:border-[#FA243C]/60",
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    href: "#",
    color: "#FF0000",
    glow: "hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]",
    border: "hover:border-[#FF0000]/60",
  },
  {
    icon: SiInstagram,
    name: "Instagram",
    href: "#",
    color: "#E1306C",
    glow: "hover:shadow-[0_0_30px_rgba(225,48,108,0.4)]",
    border: "hover:border-[#E1306C]/60",
  },
];

export default function Platforms() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38);

  return (
    <section id="platforms" className="py-28 relative" data-testid="platforms-section">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.03)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Music</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Listen Everywhere</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Platform Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {platforms.map(({ icon: Icon, name, href, color, glow, border }, i) => (
            <motion.a
              key={name}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative z-10 flex items-center gap-3 px-6 py-3.5 glass rounded-xl border border-white/10 ${border} ${glow} transition-all duration-300 group`}
              data-testid={`platform-${name.toLowerCase().replace(" ", "-")}`}
            >
              <Icon size={22} style={{ color }} className="transition-transform group-hover:scale-110" />
              <span className="text-sm font-sans tracking-wide text-foreground">{name}</span>
            </motion.a>
          ))}
        </div>

        {/* Featured Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 max-w-md mx-auto border border-white/10 hover:border-primary/30 transition-all duration-300"
          data-testid="featured-player"
        >
          <div className="text-xs tracking-widest uppercase text-primary mb-4 font-sans text-center">
            Now Playing
          </div>

          {/* Waveform */}
          <div className="flex items-end justify-center gap-[3px] h-14 mb-4">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className={`w-[2px] rounded-full bg-primary ${isPlaying ? "animate-waveform" : "opacity-30"}`}
                style={{
                  height: isPlaying ? undefined : `${Math.random() * 60 + 15}%`,
                  animationDelay: `${(i * 0.06) % 1.2}s`,
                  minHeight: "4px",
                }}
              />
            ))}
          </div>

          <div className="text-center mb-4">
            <div className="font-serif text-lg text-foreground">Latest Release</div>
            <div className="text-xs text-muted-foreground font-sans tracking-wider">Acoustic Gaurav</div>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="w-full bg-white/10 rounded-full h-1 mb-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground font-sans">
              <span>1:24</span>
              <span>3:47</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="player-prev">
              <SkipBack size={18} />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:brightness-110 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all"
              data-testid="player-play"
            >
              {isPlaying ? (
                <Pause size={18} className="text-primary-foreground" />
              ) : (
                <Play size={18} className="text-primary-foreground ml-0.5" />
              )}
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="player-next">
              <SkipForward size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
