"use client";
import {motion} from "framer-motion";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='container mx-auto px-4 pt-32 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
            initial={{opacity:0 , x:-20}}
            animate={{opacity:1 , x:0}}
            transition={{duration:0.5}}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I&apos;m <span className="text-primary">Pritam Mondal</span>
                </h1>
                <span className="inline-block bg-primary/10 text-primary border border-primary/40 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                    Backend & Harness Engineer
                </span>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    I build agentic AI systems with persistent memory, multi-agent pipelines, and production infrastructure. From memory layers backed by Redis + Neo4j to pitch deck generators with AI agents and background job queues.
                </p>
                <ul className="text-muted-foreground mb-8 space-y-2 list-disc list-inside">
                    <li><span className="text-primary font-semibold">Agentic memory systems</span> — Redis short-term rings, Neo4j knowledge graphs, and context window grounding for LLMs</li>
                    <li><span className="text-primary font-semibold">Multi-agent pipelines</span> — BullMQ queues, NestJS orchestrators, and Mastra-powered AI agents with tool use</li>
                    <li><span className="text-primary font-semibold">Full-stack product engineering</span> — Next.js frontends, Better Auth, Prisma databases, and background job processing</li>
                    <li><span className="text-primary font-semibold">Production infrastructure</span> — Docker, CI/CD with CircleCI, Redis, RabbitMQ, and WebSockets</li>
                </ul>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <Button variant={"default"} className="gap-2">
                        <Mail className="w-4 h-4"/>
                        Contact Me
                    </Button>
                    <Link href={"https://github.com/pritamscodee"} target="_blank">
                        <Button variant={"outline"} className="gap-2">
                            <Github className="w-4 h-4"/>
                            Github
                        </Button>
                    </Link>
                </div>
            </motion.div>

            <motion.div
             initial={{opacity:0 , x:20}}
             animate={{opacity:1 , x:0}}
             transition={{duration:0.5}}
             className="flex justify-center"
            >
                <Image 
                src={"/hero.svg"}
                alt="Developer Illustration"
                width={500}
                height={500}
                priority
                className="w-full h-auto max-w-[300px] sm:max-w-md lg:max-w-lg"
                />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero