// src/components/portfolio/Footer.tsx
import { personalInfo } from "@/components/data/personalInfo";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/30 border-t border-border">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {personalInfo.socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;