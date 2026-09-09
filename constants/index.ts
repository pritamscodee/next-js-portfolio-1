export const technologies = [
  { name: "NestJS", logo: "/logos/nestjs.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Mastra", logo: "/logos/mastra.svg" },
  { name: "Inngest", logo: "/logos/inngest.jpg" },
  { name: "OpenAI SDK", logo: "/logos/openai.svg" },
  { name: "Claude SDK", logo: "/logos/claude.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "RabbitMQ", logo: "/logos/rabbitmq.svg" },
  { name: "TanStack Query", logo: "/logos/tanstack-query.svg" },
  { name: "WebSocket", logo: "/logos/websocket.svg" },
  { name: "Better Auth", logo: "/logos/better-auth.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "CircleCI", logo: "/logos/circleci.svg" },
  { name: "Express.js", logo: "/logos/express.svg" },
  { name: "Git", logo: "/logos/git.svg" },
]

export const projects = [
  {
    title: "Meo",
    description: "A memory agentic layer for LLMs — persistent memory across sessions with short-term Redis rings, long-term Neo4j knowledge graph, and a grounding context window.",
    technologies: ["Next.js", "NestJS", "Redis", "Neo4j", "Mastra", "BullMQ", "OpenAI Agent SDK"],
    liveUrl: "https://meo-six-liard.vercel.app/",
    githubUrl: "https://github.com/pritamscodee",
    features: [
      "BFS algorithm — finds and merges duplicate memories in the knowledge graph",
      "Sliding window — keeps only the most relevant context for the AI",
      "Multi-agent pipeline — resolver, decision agent, then graph writer commits to Neo4j",
    ],
  },
  {
    title: "PitchAI",
    description: "Turn startup ideas into investor-ready pitch decks — slides, AI visuals, and export-ready PDF or PPTX in minutes.",
    technologies: ["Next.js", "HeroUI", "Better Auth", "Prisma", "PostgreSQL", "OpenAI", "Inngest"],
    liveUrl: "https://pitchai-rouge.vercel.app/",
    githubUrl: "https://github.com/pritamscodee",
    features: [
      "AI-generated pitch decks from a single prompt — no templates, no drag-and-drop",
      "YC-style 8-slide arc with AI-crafted visuals per slide",
      "Chat-based iteration and instant PDF/PPTX export",
    ],
  },
]