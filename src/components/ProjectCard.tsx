
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  linkText: string;
  link: string;
}

const ProjectCard = ({ title, description, logo, linkText, link }: ProjectCardProps) => {
  // Icon mapping for improved project visuals
  const getIconForProject = (logoName: string) => {
    const iconMap: Record<string, string> = {
      "React.png": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Python.png": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "Html.png": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    };
    
    // If it's a full URL, use it directly
    if (logo.startsWith('http')) {
      return logo;
    }
    
    // If we have a mapping for this logo name, use it
    if (iconMap[logo]) {
      return iconMap[logo];
    }
    
    // Fallback
    return "https://cdn-icons-png.flaticon.com/512/2920/2920054.png";
  };
  
  // Get appropriate icon
  const logoSrc = getIconForProject(logo);
  
  // Determine if it's a GitHub link
  const isGithubLink = link.includes('github.com');

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-primary/10">
      <CardHeader className="p-6 pb-4 bg-gradient-to-br from-secondary/50 to-secondary">
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/30 p-2 flex items-center justify-center shadow-sm">
            <img 
              src={logoSrc} 
              alt={`${title} logo`} 
              className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">{title.split(' ')[0]}</span>
        </div>
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 pt-2 flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-all duration-300">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {isGithubLink ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
            {linkText}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
