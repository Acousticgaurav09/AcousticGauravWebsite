import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Business Email", value: "gauravonly99@gmail.com", href: "mailto:gauravonly99@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9873 818 281", href: "tel:+919873818281" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-28 relative" data-testid="contact-section">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,52,16,0.07)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Start a Project</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-black/10"
          >
            <form action="https://formspree.io/f/mvzyrojg" method="POST" className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2.5 bg-black/4 border border-black/12 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded focus:outline-none transition-colors"
                  data-testid="input-name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 bg-black/4 border border-black/12 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded focus:outline-none transition-colors"
                  data-testid="input-email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2.5 bg-black/4 border border-black/12 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded focus:outline-none transition-colors"
                  data-testid="input-phone"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Project Type</label>
                <select
                  name="projectType"
                  required
                  className="w-full px-4 py-2.5 bg-black/4 border border-black/12 focus:border-primary/50 text-foreground rounded focus:outline-none transition-colors appearance-none cursor-pointer"
                  data-testid="select-project-type"
                >
                  <option value="">Select project type</option>
                  <option value="music-production">Music Production</option>
                  <option value="mixing-mastering">Mixing & Mastering</option>
                  <option value="song-arrangement">Song Arrangement</option>
                  <option value="vocal-production">Vocal Production</option>
                  <option value="loop-creation">Loop Creation</option>
                  <option value="full-album">Full Album Production</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Budget</label>
                <select
                  name="budget"
                  required
                  className="w-full px-4 py-2.5 bg-black/4 border border-black/12 focus:border-primary/50 text-foreground rounded focus:outline-none transition-colors appearance-none cursor-pointer"
                  data-testid="select-budget"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5,000</option>
                  <option value="5k-15k">₹5,000 – ₹15,000</option>
                  <option value="15k-30k">₹15,000 – ₹30,000</option>
                  <option value="30k-plus">₹30,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground font-sans block mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded focus:outline-none transition-colors resize-none"
                  data-testid="input-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="btn-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 justify-center"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Let's create something together.</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Whether you're an independent artist, a band, or a content creator — I'm here to make
                your music sound exactly the way you imagine it. Reach out and let's talk.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 glass glass-hover rounded-xl px-5 py-4"
                  data-testid={`contact-info-${i}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-sans">{label}</div>
                    <div className="text-sm text-foreground font-sans">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919873818281"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        data-testid="whatsapp-btn"
      >
        <MessageCircle size={24} className="text-white fill-white" />
      </a>
    </section>
  );
}
