"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { Card } from "../ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

function MeoPreview() {
  const ROWS = 3;
  const COLS = 5;
  return (
    <div className="aspect-[16/10] bg-[#1C1F1A] overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center justify-between border-b border-[#D09255]/20 px-4 py-2.5">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="size-5">
              <rect width="32" height="32" rx="7" fill="#2F362C" />
              {[0, 1, 2].flatMap((row) =>
                [0, 1, 2].map((col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={8 + col * 8}
                    cy={8 + row * 8}
                    r={row === 1 && col === 1 ? 2.7 : 2.35}
                    fill={row === 1 && col === 1 ? "#F0E2C4" : "#161412"}
                    stroke="#D09255"
                    strokeWidth={row === 1 && col === 1 ? 1.35 : 1.05}
                  />
                ))
              )}
            </svg>
            <span className="text-[13px] font-semibold text-[#F3EDE4] tracking-[-0.04em]">
              Meo
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#C9C0AE]/60">
              memory agent
            </span>
          </span>
          <span className="text-[10px] text-[#D09255] font-mono">STM · LTM · CTX</span>
        </div>
        <div className="flex-1 flex items-center px-4 sm:px-6 py-6 gap-4 sm:gap-8">
          <div className="flex-1 min-w-0">
            <h3 className="text-[18px] sm:text-[22px] font-medium leading-[1.1] tracking-[-0.035em] text-[#F3EDE4] max-w-[18ch]">
              Address a memory. Get a grounded answer.
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-[#C9C0AE] max-w-[30ch]">
              A query is a current through short-term cores, the knowledge graph, and the context window.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex h-7 items-center rounded bg-[#D09255] px-3 text-[10px] font-medium text-[#1C1F1A]">
                Query the plane
              </span>
              <span className="hidden sm:inline-flex h-7 items-center rounded border border-[#D09255]/35 px-3 text-[10px] text-[#F0E2C4] font-mono">
                Watch the current
              </span>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 rounded-lg border border-[#D09255]/25 bg-[#2F362C] p-2">
            <svg viewBox={`0 0 ${42 * COLS + 16} ${42 * ROWS + 16}`} className="w-44 h-28">
              <rect width={42 * COLS + 16} height={42 * ROWS + 16} rx="8" fill="#1C1F1A" />
              {Array.from({ length: ROWS * COLS }, (_, i) => {
                const col = i % COLS;
                const row = Math.floor(i / COLS);
                const x = 16 + col * 42;
                const y = 16 + row * 42;
                const isCenter = row === 1 && col === 2;
                return (
                  <g key={i}>
                    {col < COLS - 1 && (
                      <line x1={x} y1={y} x2={x + 42} y2={y} stroke="#D09255" strokeWidth="0.7" opacity="0.35" />
                    )}
                    {row < ROWS - 1 && (
                      <line x1={x} y1={y} x2={x} y2={y + 42} stroke="#D09255" strokeWidth="0.7" opacity="0.35" />
                    )}
                    <circle
                      cx={x}
                      cy={y}
                      r={isCenter ? 5 : 3.5}
                      fill={isCenter ? "#F0E2C4" : "#161412"}
                      stroke="#D09255"
                      strokeWidth={isCenter ? 1.5 : 1}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PitchAIPreview() {
  return (
    <div className="aspect-[16/10] bg-[#0a0f0b] overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 48 48" className="size-5">
              <rect width="48" height="48" rx="14" fill="#0c110d" />
              <rect width="48" height="48" rx="14" fill="none" stroke="#fff" strokeOpacity="0.08" strokeWidth="1" />
              <rect x="12" y="29" width="8" height="6" rx="1.2" fill="#fff" />
              <rect x="22" y="25" width="8" height="10" rx="1.2" fill="#fff" />
              <rect x="32" y="20" width="8" height="15" rx="1.2" fill="#4ade80" />
            </svg>
            <span className="text-[13px] font-black tracking-[0.22em] uppercase text-white">
              Pitch<span className="text-[#4ade80]">AI</span>
            </span>
          </span>
          <span className="text-[10px] text-white/40">YC-style decks</span>
        </div>
        <div className="flex-1 flex items-center px-4 sm:px-6 py-6 gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-2 py-0.5 text-[9px] font-medium text-[#4ade80] mb-2">
              ✦ From idea to deck
            </span>
            <h3 className="text-[18px] sm:text-[22px] font-semibold tracking-tight text-white leading-[1.1] max-w-[22ch]">
              Turn a startup idea into a pitch deck that raises.
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-white/50 max-w-[30ch]">
              Slides, visuals, and export-ready PDF or PPTX — in minutes.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#4ade80] px-3 py-1.5 text-[10px] font-semibold text-black">
                Build your first deck →
              </span>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative w-44 h-28">
            {[
              { label: "Problem", rotate: -6, x: 0, z: 0 },
              { label: "Solution", rotate: 0, x: 52, z: 1 },
              { label: "Market", rotate: 6, x: 104, z: 0 },
            ].map((card) => (
              <div
                key={card.label}
                className="absolute top-0 w-[72px] h-[90px] rounded-xl border border-white/10 bg-[#141a15] p-2.5 flex flex-col justify-between"
                style={{
                  left: card.x,
                  transform: `rotate(${card.rotate}deg) translateY(${Math.abs(card.rotate) * 0.8}px)`,
                  zIndex: card.z,
                }}
              >
                <svg viewBox="0 0 48 48" className="size-4">
                  <rect width="48" height="48" rx="10" fill="#0c110d" />
                  <rect x="12" y="29" width="8" height="6" rx="1.2" fill="#fff" />
                  <rect x="22" y="25" width="8" height="10" rx="1.2" fill="#fff" />
                  <rect x="32" y="20" width="8" height="15" rx="1.2" fill="#4ade80" />
                </svg>
                <div>
                  <span className="block rounded-full bg-white/5 px-1.5 py-0.5 text-[7px] font-medium uppercase tracking-wider text-white/40 mb-1">
                    {card.label}
                  </span>
                  <div className="h-1 w-4/5 rounded-full bg-white/10 mb-1" />
                  <div className="h-1 w-2/5 rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function highlightFeature(text: string) {
  const keywords = ["BFS", "sliding window", "Multi-agent pipeline"];
  const parts: React.ReactNode[] = [text];
  for (const kw of keywords) {
    const next: React.ReactNode[] = [];
    for (const part of parts) {
      if (typeof part !== "string") {
        next.push(part);
        continue;
      }
      const segments = part.split(new RegExp(`(${kw})`, "gi"));
      for (let i = 0; i < segments.length; i++) {
        if (segments[i].toLowerCase() === kw.toLowerCase()) {
          next.push(
            <span key={`${kw}-${i}`} className="text-primary font-semibold">
              {segments[i]}
            </span>
          );
        } else {
          next.push(segments[i]);
        }
      }
    }
    parts.length = 0;
    parts.push(...next);
  }
  return parts;
}

const PREVIEW_MAP: Record<string, React.FC> = {
  Meo: MeoPreview,
  PitchAI: PitchAIPreview,
};

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real systems I&apos;ve built — from memory-agentic layers to AI-powered product tools.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => {
          const Preview = PREVIEW_MAP[project.title];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="group overflow-hidden border-border/5 bg-card hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden rounded-t-xl"
                >
                  {Preview ? (
                    <Preview />
                  ) : (
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                    <span className="text-white text-sm font-medium">View live site</span>
                    <div className="flex gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </span>
                    </div>
                  </div>
                </a>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant={"secondary"}
                          className="bg-secondary/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-1.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {highlightFeature(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
