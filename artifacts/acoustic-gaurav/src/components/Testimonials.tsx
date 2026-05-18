import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Industry-level mix quality with emotional depth. Acoustic Gaurav elevated my track to a completely new level — the mastering was crisp, warm, and exactly what I envisioned.",
    author: "Priya Sharma",
    role: "Independent Artist",
  },
  {
    quote:
      "Outstanding arrangement and mastering work. Professional, creative, and deeply musical. He understood my vision from the first call and delivered something beyond expectations.",
    author: "Arjun Mehta",
    role: "Singer-Songwriter",
  },
  {
    quote:
      "Professional creativity and cinematic sound — my song finally sounds exactly the way I imagined it. The production quality is truly at a commercial level.",
    author: "Sneha Kapoor",
    role: "Vocalist",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative" data-testid="testimonials-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,52,16,0.05)_0%,transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">What Artists Say</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5"
              data-testid={`testimonial-card-${i}`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-5xl font-serif text-primary/20 leading-none -mt-2">&ldquo;</div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed -mt-4 flex-1">
                {quote}
              </p>

              <div className="border-t border-white/5 pt-4">
                <div className="font-serif text-foreground text-sm">{author}</div>
                <div className="text-xs text-muted-foreground font-sans tracking-wider mt-0.5">{role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
