import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic } from "react-icons/si";

export default function ListenHere() {
  return (
    <section className="py-20 relative overflow-hidden" data-testid="listen-here-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,52,16,0.07)_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Streaming</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Listen Here</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-10" />

          <div className="flex flex-wrap items-center justify-center gap-5">
            {/* Spotify */}
            <motion.a
              href="https://open.spotify.com/artist/5AgfKyTPvtrhhCx4vi171Y?si=VDTq8rVwSuaCngQvBx6Vhw"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#1DB954]/60 hover:shadow-[0_0_30px_rgba(29,185,84,0.35)] transition-all duration-300 group"
              data-testid="listen-spotify"
            >
              <SiSpotify size={26} className="text-[#1DB954] transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-sans">Listen on</div>
                <div className="text-sm font-sans font-medium text-foreground tracking-wide">Spotify</div>
              </div>
            </motion.a>

            {/* Apple Music */}
            <motion.a
              href="https://music.apple.com/us/artist/acoustic-gaurav/1549435937"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#FA243C]/60 hover:shadow-[0_0_30px_rgba(250,36,60,0.35)] transition-all duration-300 group"
              data-testid="listen-apple-music"
            >
              <SiApplemusic size={26} className="text-[#FA243C] transition-transform group-hover:scale-110" />
              <div className="text-left">
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-sans">Listen on</div>
                <div className="text-sm font-sans font-medium text-foreground tracking-wide">Apple Music</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
