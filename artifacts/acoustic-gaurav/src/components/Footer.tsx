import { motion } from "framer-motion";
import { SiSpotify, SiApplemusic } from "react-icons/si";

const socials = [
  { icon: SiSpotify, href: "https://open.spotify.com/artist/5AgfKyTPvtrhhCx4vi171Y?si=VDTq8rVwSuaCngQvBx6Vhw", label: "Spotify" },
  { icon: SiApplemusic, href: "https://music.apple.com/us/artist/acoustic-gaurav/1549435937", label: "Apple Music" },
];

const navLinks = ["About", "Services", "Portfolio", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black/5 py-12" data-testid="footer">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <div className="text-center">
            <div className="font-serif font-black text-3xl tracking-widest text-primary text-glow mb-1">
              ACOUSTIC GAURAV
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Crafting emotion through sound
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  const el = document.querySelector(`#${link.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors font-sans"
                data-testid={`footer-link-${link.toLowerCase()}`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="relative z-10 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                data-testid={`footer-social-${label.toLowerCase().replace(" ", "-")}`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/10" />

          {/* Copyright */}
          <p className="text-[11px] text-muted-foreground font-sans tracking-wider text-center">
            &copy; {new Date().getFullYear()} Acoustic Gaurav. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
