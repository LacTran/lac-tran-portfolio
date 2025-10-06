// src/components/portfolio/Experience.tsx
import ExperienceItem from "@/components/portfolio/ExperienceItem";
import { SKILLS } from "@/components/data/skills";

const Experience = () => {
  const experiences = [
    {
      period: "2021 - Present",
      company: "Kassavirtanen Oy",
      role: "Full-stack Software Developer",
      description: [
        "Tech stack: React, .NET, SQL, Azure. Built and maintained 4 secure in -house financial products with React, .NET, and SQL, reducing bug- related support tickets by 40 %.",
        "Developed REST APIs in .NET used by 5 internal applications, ensuring consistent data handling and reducing duplicate logic.",
        "Modernized the codebase by upgrading outdated packages, refactoring modules, and standardizing dependencies, resulting in a 35 % faster response time and enhanced stability.",
        "Maintained and published a React Native app to Google Play Store and Apple App Store, reaching 1k + installs.",
        "Conducted comprehensive code reviews and facilitated technical roundtable discussions, leading to a 20 % decrease in bugs reported post - release and fostering collaborative problem - solving among development team members.",
        "Provided one - on - one mentorship to 10 + junior developers, resulting in a 25 % improvement in their technical skill assessments and enabling successful promotion of 3 team members within six months.",
      ],
      tags: [SKILLS.REACT, SKILLS.DOTNET, SKILLS.SQL, SKILLS.AZURE, SKILLS.REACT_NATIVE]
    },
    {
      period: "Sep 2019 - Oct 2020",
      company: "Reactron Technologies Ltd",
      role: "Frontend | Mobile Developer",
      description: [
        "Tech stack: React, React Native, NodeJs, NextJs, TypeScript.",
        "Delivered pixel-perfect UIs for 6+ client projects, improving usability and achieving cross-browser/device consistency with less than 2% defect rate in QA.",
        "Partnered with UX/UI designers to convert wireframes into production-ready solutions, shortening feedback loops and accelerating feature delivery.",
        "Worked together with CTO and senior developers to ensure smooth MVPs shipping.",
        "Created a reusable component library and form templates, reducing duplicated code by 25% and increasing frontend maintainability.",
        "Worked with microservice-based architecture and cloud-native solutions, enabling horizontal scaling and increasing application uptime to 99.9%.",
        "Collaborated in peer reviews and debugging sessions, improving code quality and accelerating issue resolution time by 33%."
      ],
      tags: [SKILLS.REACT, SKILLS.REACT_NATIVE, SKILLS.NODE_JS, SKILLS.NEXT_JS, SKILLS.TYPESCRIPT]
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;