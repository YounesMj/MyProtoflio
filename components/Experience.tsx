import { Card } from "@/components/ui/card"

const experiences = [
  
    {
    period: "2022 — 2023",
    title: "React Developer",
    description:
      "Developed user interfaces for mobile-first web applications. Collaborated with UX designers to implement pixel-perfect designs and integrated with RESTful APIs.",
    technologies: ["Html", "Css", "Javascript", "React.js" , "Git"],
  },
  {
    period: "2023 — Present",
    title: "Mern stack develper",
    description:
      "Lead development of enterprise web applications using React, Node.js, and MongoDB. Architect scalable microservices . ",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "Docker"],
  },
  {
    period: "2024 — future",
    title: "Full-Stack Developer",
    description:
      "Built and maintained multiple client projects including e-commerce platforms  applications. Implemented responsive designs and optimized application performance, load times.",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "Linux","Docker"],
  },

 
]

const Experience = () =>  {
  return (
    <section id="experience" className="py-20 px-6 bg-card/30 hover:bg-card/100">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex justify-center">Experience</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto animate-ping"></div>

          </div>

          <div className="space-y-6 p-5">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:bg-card/20 h transition-colors">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-medium bg-primary/20 hover:bg-primary/90 text-primary cursor-pointer rounded-full hover:scale-110 hover:text-white transition-all "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;