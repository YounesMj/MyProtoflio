"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, inventory management, and admin dashboard.",
  //   image: "/modern-ecommerce-interface.png",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "Tailwind CSS",
  //   ],

  //   live: "#",
  // },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive reporting dashboard.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Express.js", "MongoDB"],

    live: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization, scheduled posting, engagement tracking, and multi-platform integration.",
    image: "/social-media-analytics-dashboard.png",
    technologies: ["Next.js", "TypeScript", "OAuth"],

    live: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Modern chat application with real-time messaging, file sharing, group chats, message encryption, and responsive design for all devices.",
    image: "/modern-chat-app.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],

    live: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, weather alerts, and detailed meteorological data visualization.",
    image: "/weather-forecast-app.png",
    technologies: ["React", "OpenWeather API"],

    live: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance management tool with expense categorization, budget planning, financial insights, and data export functionality.",
    image: "/expense-tracker-app-interface.jpg",
    technologies: ["React.js", "MongoDB", "Chart.js"],

    live: "#",
  },
];

export function Projects() {
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
    <section
      id="projects"
      className="py-10 sm:py-20 px-4 sm:px-6 bg-card/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-5">
          <div
            className={`space-y-4 text-center sm:text-left transition-all duration-600 ${isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold flex justify-center">Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto animate-ping"></div>

          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 ${isInView ? "animate-stagger-in" : ""
              }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-600 ${isInView ? "animate-fade-in-up" : "opacity-0 translate-y-12"
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="hover:-translate-y-2 transition-transform duration-300">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-1 sm:p-6 space-y-4 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-2 text-xs font-medium bg-primary/20 hover:text-primary hover:animate-none rounded transition-all animate-bounce "
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <div className="flex-1">
                        </div>
                        <div className="flex-1">
                          <Button
                            size="sm"
                            className="gap-2 w-full hover:scale-105 transition-transform duration-200"
                          >
                            <span>↗</span>
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
