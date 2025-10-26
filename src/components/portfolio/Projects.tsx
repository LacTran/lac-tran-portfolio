// src/components/portfolio/Projects.tsx
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "https://picsum.photos/seed/project-1/400/300",
      alt: "Modern e-commerce platform dashboard showing analytics and product management interface",
      details: "Built with React, Node.js, and MongoDB. Features include payment processing, user authentication, and admin dashboard.",
      buttons: [
        { label: "Live Demo", variant: "outline" as const, size: "sm" as const },
        { label: "GitHub", variant: "outline" as const, size: "sm" as const }
      ]
    },
    {
      title: "Healthcare Analytics",
      description: "Data visualization platform for medical professionals",
      image: "https://picsum.photos/seed/project-2/400/300",
      alt: "Healthcare analytics dashboard displaying various charts, graphs and patient statistics",
      details: "Interactive dashboard for healthcare data analysis using D3.js, Python backend, and complex data processing algorithms.",
      buttons: [{ label: "Case Study", variant: "outline" as const, size: "sm" as const }]
    },
    {
      title: "Task Management App",
      description: "Cross-platform productivity application",
      image: "https://picsum.photos/seed/project-3/400/300",
      alt: "Clean mobile app interface for task management with intuitive user experience",
      details: "React Native application with offline capability, cloud sync, and intuitive UX design for personal and team productivity.",
      buttons: [
        { label: "App Store", variant: "outline" as const, size: "sm" as const },
        { label: "GitHub", variant: "outline" as const, size: "sm" as const }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on that demonstrate my technical expertise and problem-solving skills.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;