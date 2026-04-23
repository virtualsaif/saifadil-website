"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Play } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 grid-bg opacity-40"
        style={{ maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)" }}
      />

      {/* Glow blobs */}
      <div className="hero-glow" style={{ top: "-80px", left: "-120px" }} />
      <div
        className="hero-glow"
        style={{
          top: "30%",
          right: "-180px",
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          width: "480px",
          height: "480px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted)",
              background: "var(--card)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            Available for AI consulting & advisory
          </span>
        </motion.div>

        {/* Main statement — idea first, not name first */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-6xl sm:text-7xl font-bold tracking-tight leading-[1.04] mb-8"
          style={{ color: "var(--foreground)", maxWidth: "820px" }}
        >
          Enterprise AI{" "}
          <br className="hidden sm:block" />
          doesn&apos;t deploy{" "}
          <span className="gradient-text">itself</span>.
        </motion.h1>

        {/* Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xl leading-relaxed mb-3 max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          I build the foundation that makes it run — storage architectures, deployment
          patterns, and the blueprints that turn AI proof-of-concepts into production workloads.
        </motion.p>

        {/* Identity line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm mb-12 font-medium"
          style={{ color: "var(--muted-light)" }}
        >
          Saif Adil · Technical Product Manager, AI Ecosystems at IBM · Houston, TX
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:gap-3"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            See my work
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/#watch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted)",
              background: "var(--card)",
            }}
          >
            <Play size={14} />
            Watch on YouTube
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
            <LinkedInIcon size={14} />
            Connect
          </Link>
        </motion.div>

        {/* Stats row — bottom of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-x-10 gap-y-4 mt-20 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { value: "22+", label: "Years in enterprise tech" },
            { value: "19", label: "Ecosystem partners mapped" },
            { value: "3", label: "Validated AI patterns deployed" },
            { value: "IBM · HPE · VMware", label: "Core career employers" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
            >
              <p
                className="text-xl font-bold stat-number"
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
    </section>
  );
}
