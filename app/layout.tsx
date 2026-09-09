import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/footer";


const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Pritam Mondal | Backend & Harness Engineer",
  description: "Backend & Harness Engineer: can make agentic AI-ready backends with LLM SDKs (OpenAI, Claude, Mastra), secure RAG apps with guardrails, architect fault-tolerant systems with Docker and CircleCI, and production databases at scale (Redis, PostgreSQL, RabbitMQ).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
