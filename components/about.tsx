"use client";

import { useRef, useEffect, useState } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div
            className={`space-y-4 transition-all duration-600 ${
              isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold flex justify-center">About</h2>
             <div className="w-12 h-1 bg-primary rounded-full mx-auto animate-ping"></div>

            <div
              className={`h-1  bg-primary rounded-full transition-all duration-800 delay-300 ${
                isInView ? "w-12" : "w-0"
              }`}
            />
          </div>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p
              className={`transition-all duration-600 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0ms" }}
            >
                I'm a passionate Full-stack developer with expertise in the {" "}
               <span className="text-foreground font-medium hover:text-green-600 transition-colors duration-200">
                Mern stack {" "}
              </span>,
                crafting digital experiences that seamlessly blend
                intuitive design with robust engineering. My work focuses on
                building scalable applications that not only look great but are
                meticulously architected for performance and maintainability.
            </p>

            <p
              className={`transition-all duration-600 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              Currently, I'm a{" "}
              <span className="text-foreground font-medium hover:text-primary transition-colors duration-200">
                Senior Full-Stack Engineer {" "}
              </span>
        
                where I lead the development of enterprise-grade web
                applications. I specialize in React ecosystem technologies,
                Node.js  and MongoDB database design and also 
            </p>
                 <p
              className={`transition-all duration-600 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              exploring new technologies
              contributing to open-source projects, or sharing knowledge through
              technical blog posts and conference talks. I'm always excited to
              tackle new challenges and collaborate on innovative projects.
            </p>

            <p
              className={`transition-all duration-600 ${
                isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "400ms" }}
            >
             i've some projects like {" "}
              <span className="text-foreground font-medium hover:text-primary transition-colors duration-200">
                E-commerce platforms
              </span>{" "}
              ,{" "}
              <span className="text-foreground font-medium hover:text-primary transition-colors duration-200">
                Task managment applications 
              </span> , {" "} 
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200">
                Real-time Chat Application
              </span>{" "} 
             and more ... 
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
}
