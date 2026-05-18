import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f8f2e6]/90 backdrop-blur-xl border-b border-[#7a3410]/12 shadow-lg"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center gap-2 group"
            data-testid="nav-logo"
          >
            <span className="text-xl font-serif font-bold tracking-widest text-primary group-hover:text-glow transition-all">
              AG
            </span>
            <span className="hidden sm:block text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
              Acoustic Gaurav
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav("#contact")}
                className="text-sm px-4 py-1.5 rounded border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-wider"
                data-testid="nav-cta"
              >
                Hire Me
              </button>
            </li>
          </ul>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f8f2e6]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            data-testid="mobile-menu"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-serif tracking-widest text-foreground hover:text-primary transition-colors"
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleNav("#contact")}
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-sans tracking-widest uppercase text-sm rounded"
              data-testid="mobile-nav-hire"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
