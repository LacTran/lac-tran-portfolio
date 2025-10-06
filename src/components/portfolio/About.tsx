// src/components/portfolio/About.tsx
import { Button } from "@/components/ui/button";
import { SKILLS } from "@/components/data/skills";
import Image from "next/image";
import { Download } from "lucide-react";
import { personalInfo } from "@/components/data/personalInfo";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=blueprint%20of%20a%20complex%20software%20architecture%2C%20digital%20art&id=about-architecture"
              alt="An abstract digital art piece representing a complex software architecture blueprint."
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <p className="text-lg mb-6">
              {personalInfo.aboutText}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>{SKILLS.REACT} & {SKILLS.NEXT_JS}</li>
                  <li>{SKILLS.TYPESCRIPT}</li>
                  <li>{SKILLS.REDUX}</li>
                  <li>{SKILLS.TAILWIND_CSS}</li>
                  <li>{SKILLS.REACT_NATIVE}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>{SKILLS.NODE_JS}</li>
                  <li>{SKILLS.CSHARP}</li>
                  <li>{SKILLS.SQL} & {SKILLS.NOSQL}</li>
                  <li>{SKILLS.REST_APIS}</li>
                  <li>{SKILLS.AZURE}</li>
                </ul>
              </div>
            </div>
            
            <Button asChild>
              <a href="/lac_tran_resume.pdf" download="lac_tran_resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;