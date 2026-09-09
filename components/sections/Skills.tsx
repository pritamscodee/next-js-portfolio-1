"use client"
import React from 'react'
import {motion} from "framer-motion"
import { technologies } from '@/constants'
import { Card } from '../ui/card'
import Image from 'next/image'

const Skills = () => {
  
  return (
    <section id="skills" className='container mx-auto px-4 py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-3'><span className='text-primary'>Tech Stack</span></h2>
        <p className='text-muted-foreground max-w-xl mx-auto'>
          The tools and platforms I use to build agentic systems, production backends, and full-stack products.
        </p>
      </div>
      <motion.div
      initial={{opacity:0 , y:20}}
      animate={{opacity:1 , y:0}}
      transition={{duration:0.5}}
      className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
      >
        {
          technologies.map((tech , index)=>(
            <Card
            key={index}
            className='p-4 flex flex-col items-center justify-center hover:border-primary transition-colors'
            >
              <Image
              src={tech.logo}
              alt={tech.name}
              width={40}
              height={40}
              className='mb-2'
              />
              <span className='text-xs font-medium text-muted-foreground'>{tech.name}</span>
            </Card>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Skills