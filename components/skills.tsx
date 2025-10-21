// "use client"

// import { Card } from "@/components/ui/card"
// import { useRef, useEffect, useState } from "react"

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", level: 95 },
//       { name: "TypeScript", level: 90 },
//       { name: "Next.js", level: 88 },
//       { name: "Tailwind CSS", level: 92 },
//       { name: "Redux", level: 85 },
//       { name: "HTML/CSS", level: 95 },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", level: 92 },
//       { name: "Express.js", level: 90 },
//       { name: "MongoDB", level: 88 },
//       { name: "PostgreSQL", level: 82 },
//       { name: "REST APIs", level: 94 },
//       { name: "GraphQL", level: 78 },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     skills: [
//       { name: "Git", level: 90 },
//       { name: "Docker", level: 85 },
//       { name: "AWS", level: 80 },
//       { name: "Jest", level: 88 },
//       { name: "Webpack", level: 82 },
//       { name: "Linux", level: 85 },
//     ],
//   },
// ]

// export function Skills() {
//   const ref = useRef<HTMLElement>(null)
//   const [isInView, setIsInView] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true)
//         }
//       },
//       { threshold: 0.1, rootMargin: "-100px" },
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
//       <div className="max-w-6xl mx-auto">
//         <div className="space-y-8">
//           <div
//             className={`space-y-4 transition-all duration-600 ${isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
                                                                                                      
            
//             <div
//               className={`h-1 bg-primary rounded-full transition-all duration-800 delay-300 ${isInView ? "w-12" : "w-0"}`}
//             />
//           </div>

//           <div
//             className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${isInView ? "animate-stagger-in" : ""}`}
//           >
//             {skillCategories.map((category, categoryIndex) => (
//               <div
//                 key={category.title}
//                 className={`transition-all duration-600 ${isInView ? "animate-fade-in-up" : "opacity-0 translate-y-12"}`}
//                 style={{ animationDelay: `${categoryIndex * 300}ms` }}
//               >
//                 <div className="hover:-translate-y-1 transition-transform duration-300">
//                   <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full">
//                     <h3
//                       className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
//                       style={{ transitionDelay: `${categoryIndex * 300 + 500}ms` }}
//                     >
//                       {category.title}
//                     </h3>
//                     <div className="space-y-3 sm:space-y-4">
//                       {category.skills.map((skill, skillIndex) => (
//                         <div
//                           key={skill.name}
//                           className={`space-y-2 transition-all duration-400 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
//                           style={{ transitionDelay: `${categoryIndex * 300 + skillIndex * 100 + 700}ms` }}
//                         >
//                           <div className="flex justify-between items-center">
//                             <span className="text-sm font-medium">{skill.name}</span>
//                             <span className="text-xs text-muted-foreground">{skill.level}%</span>
//                           </div>
//                           <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
//                             <div
//                               className={`bg-primary h-2 rounded-full transition-all duration-1000 ease-out ${isInView ? "" : "w-0"}`}
//                               style={{
//                                 width: isInView ? `${skill.level}%` : "0%",
//                                 transitionDelay: `${categoryIndex * 300 + skillIndex * 100 + 900}ms`,
//                               }}
//                             />
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// code for line moving 
    //  <div
    //               className={`h-1 bg-primary rounded-full  sm:mx-0            transition-all duration-800 delay-300 ${
    //                 isInView ? "w-13" : "w-0"
    //               }`}
    //             />