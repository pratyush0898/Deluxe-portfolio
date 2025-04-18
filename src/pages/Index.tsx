
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CONTENT from "@/data/Content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Show only the first 3 projects on homepage
  const featuredProjects = CONTENT.projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="bg-secondary/50 section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                Here are some of my recent projects. Check out the Projects page for more.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-fade-in animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="font-display text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {CONTENT.about.description.slice(0, 150)}...
              </p>
              <Button asChild className="mt-2 w-full sm:w-auto">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-secondary/50 p-8 rounded-lg border">
              <h3 className="font-display text-xl font-bold mb-6">My Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CONTENT.about.skills.slice(0, 6).map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/50 rounded-md px-4 py-3 text-center border animate-fade-in transform transition-transform duration-300 hover:scale-110 hover:-translate-y-7 hover:bg-secondary hover:shadow-secondary/100 hover:border-gray-300 dark:hover:border-gray-600"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-secondary/50 section-padding">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Have a project in mind? Let's discuss how I can help bring your ideas to life with clean, efficient code and modern design.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
