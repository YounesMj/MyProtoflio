"use client"

import { Button } from "@/components/ui/button"
import { use, Suspense } from "react"
import Image from "next/image"




 function Home () {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance animate-fade-in-up animation-delay-200">
              {/* {heroData.name} */}
              Younes Majad

            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground animate-fade-in-up animation-delay-400">
              {/* {heroData.title} */}
              MERN Stack Developer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-600">
              {/* {heroData.description} */}
                I build scalable, pixel-perfect web applications using MongoDB, Express.js, React, and Node.js. Passionate about creating seamless user experiences with robust backend architectures. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-900 ">
            <Button size="lg" className="gap-2 w-full sm:w-auto hover:scale-105 transition-transform cursor-pointer">
              <a href="#contact" className="scroll-smooth px-4 ">✉</a>
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent w-full sm:w-auto hover:scale-105 transition-transform cursor-pointer"
            >
              <a href="#projects" className="scroll-smooth px-5">↗</a>
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
            <Button variant="ghost" size="icon" className="hover:scale-115 hover:rotate-10 transition-all">
              <span className="text-lg md:hidden"> ¯\_(ツ)_/¯  </span>
            </Button>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="w-64 h-64 sm:w-80 sm:h-70 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/90 rounded-full blur-3xl shadow-3xl " />
            <div className="relative w-full h-full bg-card rounded-full border border-border flex items-center justify-center  hover:scale-105 transition-transform">
              <div className="text-4xl sm:text-6xl font-mono text-bold animate-rotate-y z-10">
                {/* MyPhoto  */}
                <img src={"me.png"} alt="My image" 
                 className="rounded-full object-cover w-full backdrop-blur-lg cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )


function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="h-16 bg-muted rounded-lg animate-pulse" />
            <div className="h-8 bg-muted rounded-lg animate-pulse" />
            <div className="h-24 bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
        <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-muted rounded-full animate-pulse" />
      </div>
    </section>
  )
}
}

export default Home;