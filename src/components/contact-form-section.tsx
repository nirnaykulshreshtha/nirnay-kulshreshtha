"use client";

/**
 * ContactFormSection Component
 *
 * A modern, animated contact form for direct project inquiries.
 * - Integrates with Formspree (no backend required)
 * - Sends submissions to nirnaykulshreshtha@gmail.com
 * - Includes fields: Name, Email, Project Type, Message
 * - Shows a success message on submit
 * - Aggressive logging for debugging
 * - Matches portfolio's design and animation system
 *
 * Usage:
 * Place this section above the footer for best results.
 *
 * Formspree setup:
 * 1. On first submission, Formspree will send a confirmation email to nirnaykulshreshtha@gmail.com
 * 2. Confirm your email to start receiving submissions
 * 3. Free tier: 50 submissions/month
 */
import * as React from "react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { Send, Mail, User, MessageCircle, Briefcase, CheckCircle, AlertCircle } from "lucide-react";

/**
 * ContactFormSection - Modern contact form with Formspree integration
 */
export function ContactFormSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Aggressive logging for debugging
  React.useEffect(() => {
    console.log('[ContactFormSection] status:', status);
  }, [status]);

  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Send className="h-5 w-5" />
            Contact Form
          </motion.div>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Start a Project or Say Hello
          </motion.h2>
          <motion.p
            className="font-text text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Fill out the form below and I’ll get back to you as soon as possible.
          </motion.p>
        </motion.div>
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/movlavze"
          method="POST"
          className="backdrop-blur-2xl bg-white/10 rounded-3xl shadow-lg p-6 md:p-8 space-y-6 border border-white/10 hover:border-primary/10 transition-all duration-300"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus('submitting');
            try {
              const form = e.currentTarget;
              const data = new FormData(form);
              const res = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                  Accept: 'application/json',
                },
              });
              if (res.ok) {
                setStatus('success');
                form.reset();
                console.log('[ContactFormSection] Submission successful');
              } else {
                setStatus('error');
                console.error('[ContactFormSection] Submission failed', res.statusText);
              }
            } catch (err) {
              setStatus('error');
              console.error('[ContactFormSection] Submission error', err);
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-light text-foreground/70 mb-1 flex items-center gap-1">
                <User className="h-3 w-3 text-primary/60" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 rounded-md border-b border-white/30 bg-white/5 text-foreground/90 placeholder:text-foreground/40 focus:border-primary/40 focus:bg-white/10 focus:ring-0 transition-all duration-300 text-sm"
                placeholder="Your Name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-light text-foreground/70 mb-1 flex items-center gap-1">
                <Mail className="h-3 w-3 text-primary/60" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 rounded-md border-b border-white/30 bg-white/5 text-foreground/90 placeholder:text-foreground/40 focus:border-primary/40 focus:bg-white/10 focus:ring-0 transition-all duration-300 text-sm"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="projectType" className="block text-xs font-light text-foreground/70 mb-1 flex items-center gap-1">
              <Briefcase className="h-3 w-3 text-primary/60" /> Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-3 py-2 rounded-md border-b border-white/30 bg-white/5 text-foreground/90 focus:border-primary/40 focus:bg-white/10 focus:ring-0 transition-all duration-300 text-sm"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>AI/ML Project</option>
              <option>DevOps/Deployment</option>
              <option>Consultation</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-light text-foreground/70 mb-1 flex items-center gap-1">
              <MessageCircle className="h-3 w-3 text-primary/60" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 rounded-md border-b border-white/30 bg-white/5 text-foreground/90 placeholder:text-foreground/40 focus:border-primary/40 focus:bg-white/10 focus:ring-0 transition-all duration-300 text-sm"
              placeholder="Tell me about your project or how I can help..."
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-white/10 text-primary font-semibold hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 group text-sm shadow-none"
              disabled={status === 'submitting'}
            >
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <span className="flex items-center gap-2 text-green-600 font-light animate-pulse text-xs">
                <CheckCircle className="h-4 w-4" /> Message sent!
              </span>
            )}
            {status === 'error' && (
              <span className="flex items-center gap-2 text-red-600 font-light animate-pulse text-xs">
                <AlertCircle className="h-4 w-4" /> Something went wrong. Try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
} 