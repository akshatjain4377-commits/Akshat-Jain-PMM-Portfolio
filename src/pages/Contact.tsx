import { motion } from 'motion/react';
import { Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-block rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-xs font-semibold tracking-widest text-brand-accent">
                LET'S CONNECT
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl lg:text-7xl">
                Start a <br /> Conversation.
              </h1>
              <p className="mb-12 max-w-md text-lg text-brand-muted">
                Whether you're looking to scale your product, refine your positioning, or just want to talk growth systems—I'm always open to interesting conversations.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-card">
                    <Mail className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-muted">Email</h3>
                    <a href="mailto:akshatjain4377@gmail.com" className="text-lg font-medium text-brand-text hover:text-brand-accent transition-colors">
                      akshatjain4377@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-card">
                    <MapPin className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-muted">Location</h3>
                    <p className="text-lg font-medium text-brand-text">
                      Global / Remote
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-card">
                    <MessageSquare className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-muted">Social</h3>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/akshatjain1102/" className="text-lg font-medium text-brand-text hover:text-brand-accent transition-colors">LinkedIn</a>
                      <a href="https://x.com/Akshatjain_45" className="text-lg font-medium text-brand-text hover:text-brand-accent transition-colors">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-brand-border bg-brand-card p-8 md:p-12"
          >
            <h2 className="mb-8 text-2xl font-bold text-brand-text">Send a Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-brand-muted">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="How can we collaborate?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-muted">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full resize-none rounded-xl border border-brand-border bg-brand-bg px-4 py-3 text-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-sm font-bold text-brand-bg hover:bg-brand-accent-hover transition-colors"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
