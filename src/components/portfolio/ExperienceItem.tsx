// src/components/portfolio/ExperienceItem.tsx
interface ExperienceItemProps {
  period: string;
  company: string;
  role: string;
  description: Array<string>;
  tags: string[];
}

const ExperienceItem = ({ period, company, role, description, tags }: ExperienceItemProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">{period}</h3>
        <p className="text-muted-foreground">{company}</p>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold mb-2">{role}</h3>
        <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;