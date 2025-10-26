// src/components/portfolio/Portfolio.tsx
'use client'

import { useState, useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onScrollToSection={scrollToSection}
      />
      <Hero onScrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
