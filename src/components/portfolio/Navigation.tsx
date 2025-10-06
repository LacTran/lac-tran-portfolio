// src/components/portfolio/Navigation.tsx
'use client'
import { personalInfo } from "@/components/data/personalInfo";

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onScrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, isMenuOpen, onToggleMenu, onScrollToSection }: NavigationProps) => {
  const navItems = ["home", "about", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">{personalInfo.name}</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onScrollToSection(item)}
              className={`capitalize hover:text-primary transition-colors ${
                activeSection === item ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={onToggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item)}
                className={`capitalize text-left py-2 hover:text-primary transition-colors ${
                  activeSection === item ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
