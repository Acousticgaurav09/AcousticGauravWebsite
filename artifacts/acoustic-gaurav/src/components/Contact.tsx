import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Business Email", value: "gauravonly99@gmail.com", href: "mailto:gauravonly99@gmail.com" },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", projectType: "", budget: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({ title: "Message sent!", description: "Thank you! I'll get back to you within 24 hours." });
    form.reset();
  };

  return (
    <section id="contact" className="py-28 relative" data-testid="contact-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,52,16,0.07)_0%,transparent_60%)]" />
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="bg-black/4 border-black/12 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="your@email.com"
                          type="email"
                          className="bg-black/4 border-black/12 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="bg-black/4 border-black/12 focus:border-primary/50 text-foreground"
                            data-testid="select-project-type"
                          >
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-black/10">
                          <SelectItem value="music-production">Music Production</SelectItem>
                          <SelectItem value="mixing-mastering">Mixing & Mastering</SelectItem>
                          <SelectItem value="song-arrangement">Song Arrangement</SelectItem>
                          <SelectItem value="vocal-production">Vocal Production</SelectItem>
                          <SelectItem value="loop-creation">Loop Creation</SelectItem>
                          <SelectItem value="full-album">Full Album Production</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="bg-black/4 border-black/12 focus:border-primary/50 text-foreground"
                            data-testid="select-budget"
                          >
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-black/10">
                          <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                          <SelectItem value="5k-15k">₹5,000 – ₹15,000</SelectItem>
                          <SelectItem value="15k-30k">₹15,000 – ₹30,000</SelectItem>
                          <SelectItem value="30k-plus">₹30,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground font-sans">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell me about your project..."
                          rows={4}
                          className="bg-white/5 border-white/10 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:brightness-110 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300"
                  data-testid="btn-submit"
                >
                  Send Message
                </button>
              </form>
            </Form>
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
