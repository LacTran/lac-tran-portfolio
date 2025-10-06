// src/components/portfolio/Hero.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { personalInfo } from "@/components/data/personalInfo";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

const Hero = ({ onScrollToSection }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-1 border-primary">
          <Image
            src="/portrait.jpg"
            alt="Professional headshot of a senior software developer with friendly expression"
            fill
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => onScrollToSection("projects")}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => onScrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;