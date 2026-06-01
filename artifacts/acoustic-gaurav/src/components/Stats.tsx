import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1000, suffix: "+", label: "Tracks Produced" },
  { value: 15, suffix: "+", label: "States Reached" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-2">
      <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary text-glow">
        {count.toLocaleString()}
      </span>
      <span className="text-sm sm:text-base font-serif text-primary">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-black/5 border-y border-black/10" data-testid="stats-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
              data-testid={`stat-${i}`}
            >
              <div className="mb-1">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm tracking-widest uppercase text-muted-foreground font-sans mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
