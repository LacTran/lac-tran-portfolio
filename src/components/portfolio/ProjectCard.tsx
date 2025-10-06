// src/components/portfolio/ProjectCard.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  details: string;
  buttons: { label: string; variant: "default" | "outline" | "ghost" | "destructive" | "link"; size: "default" | "sm" | "lg" | "icon" }[];
}

const ProjectCard = ({ title, description, image, alt, details, buttons }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{details}</p>
        <div className="flex space-x-2">
          {buttons.map((btn, index) => (
            <Button key={index} variant={btn.variant} size={btn.size}>
              {btn.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;