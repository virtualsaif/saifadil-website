"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const stats = [
  { value: "22+", label: "Years in Tech" },
  { value: "19", label: "Ecosystem Partners" },
  { value: "10+", label: "Certifications" },
  { value: "4", label: "Enterprise Employers" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background glow blobs */}
      <div
        className="hero-glow"
        style={{ top: "-100px", left: "-100px", opacity: 0.7 }}
      />
      <div
        className="hero-glow"
        style={{
          bottom: "-200px",
          right: "-200px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          width: "500px",
          height: "500px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left: text */}
          <div className="flex-1 max-w-2xl">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
                background: "var(--card)",
              }}
            >
              <MapPin size={11} style={{ color: "var(--accent)" }} />
              Houston, TX · Open to collaboration
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Building the infrastructure that runs{" "}
              <span className="gradient-text">AI</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              Sr. Technology Architect with 22+ years at the intersection of
              AI, cloud, enterprise storage, and virtualization. Currently{" "}
              <span style={{ color: "var(--foreground)", fontWeight: 500 }}>
                Technical Product Manager — AI Ecosystems
              </span>{" "}
              at IBM.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-16"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:gap-3"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Read my writing
                <ArrowRight size={15} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/storagesaif/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  background: "var(--card)",
                }}
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </Link>
              <Link
                href="mailto:saif.adil@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  background: "var(--card)",
                }}
              >
                <Mail size={15} />
                Email me
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                >
                  <p
                    className="text-2xl font-bold stat-number"
                    style={{ color: "var(--foreground)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0 hidden md:block"
          >
            <div className="relative">
              <div
                className="w-52 h-52 rounded-2xl flex items-center justify-center text-5xl font-bold border-2 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--card) 0%, var(--card-hover) 100%)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent) 0%, #7c3aed 100%)",
                  }}
                />
                <span className="gradient-text relative z-10">SA</span>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl text-xs font-semibold border"
                style={{
                  background: "var(--background)",
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                }}
              >
                📍 Houston, TX
              </div>
            </div>
            <p className="text-xs text-center mt-8" style={{ color: "var(--muted-light)" }}>
              High-res photo coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
