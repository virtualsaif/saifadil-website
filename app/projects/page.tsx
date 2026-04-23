import { ExternalLink, Tag } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Projects — Saif Adil",
  description: "Notable technical projects and initiatives — AI architectures, storage reference designs, and ecosystem programs.",
};

const projects = [
  {
    title: "RAG-Based AI Research Assistant",
    description:
      "Architected and productized a Retrieval-Augmented Generation research assistant on Red Hat OpenShift. Built for a major academic medical center targeting research hospital adoption. Stack: IBM Storage Fusion, watsonx.ai embeddings, Qdrant vector DB, and Langflow for orchestration.",
    tags: ["RAG", "AI", "OpenShift", "IBM Fusion", "watsonx.ai", "Qdrant"],
    highlight: "GPU-free on-premises AI inference with full data sovereignty",
    status: "Production",
  },
  {
    title: "IBM Storage Fusion Quick Start Program",
    description:
      "Led development and standardization of the IBM Storage Fusion Quick Start deployment program. Established deployment standards benchmarked against NVIDIA BasePod and Red Hat AI validated offerings, enabling field teams to deliver consistent, fast deployments.",
    tags: ["IBM Fusion", "NVIDIA BasePod", "Red Hat AI", "Deployment"],
    highlight: "Benchmarked against NVIDIA BasePod",
    status: "Program",
  },
  {
    title: "Red Hat Validated Patterns on IBM Storage Fusion",
    description:
      "Deployed and validated three Red Hat Validated Patterns on IBM Storage Fusion: RAG-LLM pipeline, Medical Diagnosis AI, and Credit Card Fraud Detection. Enabled enterprise customers to run production AI workloads without GPUs — on-premises, air-gapped, with data sovereignty.",
    tags: ["Red Hat", "IBM Fusion", "AI", "Medical AI", "Fraud Detection", "On-Premises"],
    highlight: "Three validated AI workloads without GPU dependency",
    status: "Validated",
  },
  {
    title: "AMD GPU Validation Strategy",
    description:
      "Developed AMD GPU validation framework for IBM's accelerated compute storage ecosystem, modeled on NVIDIA's CANDOR/BasePod framework. Expanded IBM's storage ecosystem beyond NVIDIA to include AMD accelerators.",
    tags: ["AMD GPU", "NVIDIA", "Storage", "Ecosystem"],
    highlight: "Expanded IBM accelerated compute ecosystem",
    status: "Strategy",
  },
  {
    title: "IBM–Lenovo AI COE Collaboration",
    description:
      "Managed joint AI Center of Excellence collaboration strategy between IBM and Lenovo. Oversaw joint AI lab development and go-to-market alignment, expanding IBM Storage's presence in AI infrastructure solutions.",
    tags: ["AI COE", "Lenovo", "IBM", "Partnership"],
    highlight: "Joint AI lab development and GTM alignment",
    status: "Partnership",
  },
  {
    title: "Partner Ecosystem Mapping — IBM Storage Solutions",
    description:
      "Developed comprehensive partner ecosystem mapping covering 19 partners across four categories: compute, networking, software, and cloud. Created the strategic framework for IBM Storage's partner-led AI infrastructure go-to-market.",
    tags: ["Partner Ecosystem", "IBM", "GTM", "Strategy"],
    highlight: "19 partners across 4 categories",
    status: "Framework",
  },
  {
    title: "SAP HANA Certification — IBM Storage",
    description:
      "Executed SAP HANA certification for IBM storage platforms, validating compatibility and enabling production-ready enterprise deployments. Opened IBM storage for critical ERP and database workloads at enterprise scale.",
    tags: ["SAP HANA", "IBM Storage", "Certification", "Enterprise"],
    highlight: "Production-ready enterprise ERP validation",
    status: "Certified",
  },
  {
    title: "Veeam Cloud Backup Expansion (SAARC)",
    description:
      "As Presales Manager for SAARC at VEEAM, drove regional adoption of cloud backup by integrating AWS and Azure long-term retention into Veeam deployments. Grew cloud revenue and expanded regional market presence.",
    tags: ["Veeam", "AWS", "Azure", "Backup", "Cloud"],
    highlight: "Multi-cloud backup expansion across SAARC region",
    status: "Delivered",
  },
];

const statusColors: Record<string, string> = {
  Production: "#16a34a",
  Program: "#2563eb",
  Validated: "#7c3aed",
  Strategy: "#d97706",
  Partnership: "#0891b2",
  Framework: "#c2410c",
  Certified: "#16a34a",
  Delivered: "#2563eb",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          Work
        </p>
        <h1
          className="text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Projects
        </h1>
        <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
          Notable technical initiatives across AI architecture, storage reference
          designs, partner ecosystems, and enterprise certifications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-xl border flex flex-col gap-4 hover:border-[var(--accent)] transition-colors"
            style={{ borderColor: "var(--border)", background: "var(--card, #f8fafc)" }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                {project.title}
              </h3>
              <span
                className="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: `${statusColors[project.status] ?? "#2563eb"}18`,
                  color: statusColors[project.status] ?? "#2563eb",
                }}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>

            <div
              className="text-xs font-medium px-3 py-2 rounded-lg"
              style={{
                background: `var(--accent)12`,
                color: "var(--accent)",
              }}
            >
              → {project.highlight}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full border"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
