"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, MessageSquare, Tag, Send, CheckCircle2, AlertCircle, X } from "lucide-react";
import { formInputClass } from "@/components/ui/formInputClass";
import { PageHeroBackground } from "@/components/ui/PageHeroBackground";

type Toast = { type: "success" | "error"; message: string } | null;

type FieldKey = "name" | "email" | "subject" | "message";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>(
    {},
  );

  const showToast = useCallback((t: NonNullable<Toast>) => {
    setToast(t);
    window.setTimeout(() => setToast(null), 5200);
  }, []);

  const validateFields = useCallback((): Partial<Record<FieldKey, string>> => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (!name.trim()) {
      e.name = "This field is required.";
    } else if (name.trim().length < 2) {
      e.name = "Please enter at least 2 characters.";
    }
    if (!email.trim()) {
      e.email = "This field is required.";
    } else if (!isValidEmail(email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!subject.trim()) {
      e.subject = "This field is required.";
    } else if (subject.trim().length < 2) {
      e.subject = "Please enter at least 2 characters.";
    }
    if (!message.trim()) {
      e.message = "This field is required.";
    } else if (message.trim().length < 10) {
      e.message = "Please add at least 10 characters.";
    }
    return e;
  }, [name, email, subject, message]);

  const clearFieldError = useCallback((key: FieldKey) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateFields();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      showToast({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }
    setSubmitting(true);
    try {
      const payload: {
        name: string;
        email: string;
        message: string;
        subject?: string;
      } = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };
      const sub = subject.trim();
      if (sub.length >= 2) payload.subject = sub;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        success?: boolean;
      };
      if (!res.ok || data.success === false) {
        showToast({
          type: "error",
          message:
            data.error ??
            "Could not send your message. Please try again.",
        });
        return;
      }
      showToast({
        type: "success",
        message: "Thank you — your message was sent. We will get back to you soon.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      showToast({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-dvh w-full min-w-0 overflow-x-hidden bg-transparent text-left">
      <section className="relative flex min-h-dvh flex-col items-center justify-start px-4 pb-12 pt-24 sm:px-5 sm:pt-28 md:pb-16 md:pt-32 lg:pt-36">
        <PageHeroBackground />

        <div className="container-standard relative z-10 w-full min-w-0 py-4 sm:py-6">
          <div className="w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full max-w-2xl"
            >
              <div className="pointer-events-none absolute -inset-1 rounded-[16px] bg-gradient-to-b from-white/12 via-transparent to-white/5 opacity-50 blur-2xl" aria-hidden />

              <div className="relative w-full min-w-0 rounded-[16px] border border-white/15 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(36,186,206,0.08),transparent_70%)]"
                  aria-hidden
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center md:mb-12 flex flex-col items-center"
                  >
                    <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-Elementa-primary drop-shadow-[0_4px_48px_rgba(0,0,0,0.35)]">
                      Contact <span className="text-Elementa-accent">Us</span>
                    </h1>
                    <p className="mt-3 max-w-2xl font-body text-[clamp(0.9rem,2vw,1.1rem)] font-light leading-relaxed text-Elementa-muted text-center">
                      Reach the Elementa team for support, partnerships, or inquiries.
                    </p>
                  </motion.div>

                  <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="ml-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7d6e0]/90"
                        >
                          Name
                        </label>
                        <div className="relative group">
                          <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-Elementa-primary" />
                          <input
                            id="contact-name"
                            className={`${formInputClass} ${fieldErrors.name ? "border-red-400/80 focus:border-red-400" : ""}`}
                            placeholder="Your name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              clearFieldError("name");
                            }}
                            aria-invalid={Boolean(fieldErrors.name)}
                            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                          />
                        </div>
                        {fieldErrors.name ? (
                          <p id="contact-name-error" className="ml-1 text-xs font-medium text-red-400/90">
                            {fieldErrors.name}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="ml-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7d6e0]/90"
                        >
                          Email
                        </label>
                        <div className="relative group">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-Elementa-primary" />
                          <input
                            id="contact-email"
                            className={`${formInputClass} ${fieldErrors.email ? "border-red-400/80 focus:border-red-400" : ""}`}
                            placeholder="you@example.com"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              clearFieldError("email");
                            }}
                            aria-invalid={Boolean(fieldErrors.email)}
                            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                          />
                        </div>
                        {fieldErrors.email ? (
                          <p id="contact-email-error" className="ml-1 text-xs font-medium text-red-400/90">
                            {fieldErrors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-objective"
                        className="ml-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7d6e0]/90"
                      >
                        Objective
                      </label>
                      <div className="relative group">
                        <Tag className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-Elementa-primary" />
                        <input
                          id="contact-objective"
                          className={`${formInputClass} ${fieldErrors.subject ? "border-red-400/80 focus:border-red-400" : ""}`}
                          placeholder="e.g. Partnership, support, press…"
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                            clearFieldError("subject");
                          }}
                          aria-invalid={Boolean(fieldErrors.subject)}
                          aria-describedby={fieldErrors.subject ? "contact-objective-error" : undefined}
                        />
                      </div>
                      {fieldErrors.subject ? (
                        <p id="contact-objective-error" className="ml-1 text-xs font-medium text-red-400/90">
                          {fieldErrors.subject}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="ml-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7d6e0]/90"
                      >
                        Description
                      </label>
                      <div className="relative group">
                        <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-white/35 transition-colors group-focus-within:text-Elementa-primary" />
                        <textarea
                          id="contact-message"
                          className={`${formInputClass} min-h-[160px] resize-y pt-4 pb-4 ${fieldErrors.message ? "border-red-400/80 focus:border-red-400" : ""}`}
                          placeholder="Your message"
                          rows={5}
                          name="message"  
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            clearFieldError("message");
                          }}
                          aria-invalid={Boolean(fieldErrors.message)}
                          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                        />
                      </div>
                      {fieldErrors.message ? (
                        <p id="contact-message-error" className="ml-1 text-xs font-medium text-red-400/90">
                          {fieldErrors.message}
                        </p>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary group relative flex w-full gap-2 overflow-hidden py-5 text-sm uppercase tracking-[0.2em] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                      <Send className="relative h-4 w-4" />
                      <span className="relative">{submitting ? "Sending…" : "Send"}</span>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: 10, x: "-50%", transition: { duration: 0.2 } }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            className={`fixed bottom-8 left-1/2 z-[300] flex w-[min(100%-2rem,420px)] items-start gap-4 rounded-[20px] border border-white/10 bg-[#081421]/95 p-5 text-left shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden ${
              toast.type === "success"
                ? "shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]"
                : "shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)]"
            }`}
          >
            {/* Animated Background Glow */}
            <div 
              className={`absolute -top-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-40 pointer-events-none ${
                toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
              }`} 
            />

            <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
              toast.type === "success" 
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" 
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}>
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5" aria-hidden />
              ) : (
                <AlertCircle className="h-5 w-5" aria-hidden />
              )}
            </div>

            <div className="flex-1 pt-0.5 z-10">
              <h4 className={`text-base font-bold font-display ${
                toast.type === "success" ? "text-emerald-400" : "text-red-400"
              }`}>
                {toast.type === "success" ? "Success!" : "Delivery Failed"}
              </h4>
              <p className="mt-1 text-[13px] leading-relaxed text-[#c7d6e0]">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setToast(null)}
              className="relative z-10 shrink-0 rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
            
            {/* Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5.2, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-[3px] ${
                toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
}
