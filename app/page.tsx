import  Home  from "@/components/home"
import { About } from "@/components/about"
import  Experience  from "@/components/experience"
import { Projects } from "@/components/projects"
// import { Skills } from "@/components/Skills"
import { Contact } from "@/components/contact"
import  Navigation  from "@/components/navigation"
// import { ParticleBackground } from "@/components/particle-background"

export default function Page() {
  return (
    <main className="relative min-h-screen">
        {/* <ParticleBackground /> */}
        <Navigation />
        <div className="relative z-10">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
     </main>
  )
}
