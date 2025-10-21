"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import  Experience  from "./experience"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

 const Navigation = () => {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xs border-b border-border animate-slide-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary hover:scale-110 hover:rotate-x-20 transition-all cursor-pointer">
            {"<MJ />"}
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                <Button
                  variant={activeSection === item.href.slice(0) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm  hover:scale-105 transition-transform"
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary animate-expand-width" />
                  )}
                </Button>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 hover:scale-110 cursor-pointer transition-all"
            >
              {isMobileMenuOpen ? (
                <span className="text-lg animate-rotate-in">✕</span>
              ) : (
                <span className="text-lg animate-rotate-in">☰</span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  inset-0 top-[100px] bg-background/100 backdrop-blur-lg z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <Button
                  variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
                  size="lg"
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg font-medium w-full min-w-[100px] hover:scale-110 transition-transform cursor-pointer "
                >
                  {item.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navigation;