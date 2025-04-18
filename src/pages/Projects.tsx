
import { useState } from "react";
import CONTENT from "@/data/Content";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter projects based on search query
  const filteredProjects = CONTENT.projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24 flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6 animate-fade-in">
              My Projects
            </h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in animate-delay-100">
              A collection of my recent work, side projects, and experiments.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${(index % 3) * 100}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    logo={project.logo}
                    linkText={project.linkText}
                    link={project.link}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
