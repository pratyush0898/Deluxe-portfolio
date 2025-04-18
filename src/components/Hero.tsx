
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CONTENT from "@/data/Content";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="section-padding flex flex-col items-center justify-center text-center min-h-[80vh] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Decorative blob shapes */}
      <div className="absolute top-20 -right-10 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow blur-3xl" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 animate-pulse-slow blur-3xl" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[15%] left-[15%] w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[60%] left-[35%] w-1 h-1 rounded-full bg-accent animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[70%] right-[35%] w-1 h-1 rounded-full bg-accent animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Code symbols floating in background */}
      <div className="absolute top-[20%] left-[15%] text-primary/20 text-4xl font-mono animate-float-slow" style={{ animationDelay: "0.5s" }}>{ "{" }</div>
      <div className="absolute top-[70%] left-[25%] text-primary/20 text-4xl font-mono animate-float-slow" style={{ animationDelay: "1.2s" }}>{"<>"}</div>
      <div className="absolute top-[30%] right-[15%] text-primary/20 text-4xl font-mono animate-float-slow" style={{ animationDelay: "0.8s" }}>{"=>"}</div>
      <div className="absolute top-[60%] right-[25%] text-primary/20 text-4xl font-mono animate-float-slow" style={{ animationDelay: "1.8s" }}>{";"}</div>
      
      <div className="container-custom max-w-4xl relative z-10">
        {/* Profile image */}
        <div className="relative mb-10 inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6 mx-auto relative">
            <img 
              src={CONTENT.main.logo}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60 mix-blend-overlay" />
          </div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20">
            {CONTENT.main.name}
          </span>
        </div>
        
        <h1 className="animate-fade-in font-display font-bold tracking-tight mb-4 highlight-gradient">
          {CONTENT.homepage.title}
        </h1>
        
        <div className="absolute -inset-1 -z-10 rounded-lg blur-xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 opacity-70"></div>
        
        <p className="animate-fade-in animate-delay-100 mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          {CONTENT.homepage.description}
        </p>
        
        <div className="animate-fade-in animate-delay-200 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md hover:shadow-lg transition-all">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2 shadow-sm hover:shadow-md transition-all hover:bg-secondary/80">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
        
        <div className="animate-fade-in animate-delay-300 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/50 via-background to-secondary/50 blur-xl opacity-30 rounded-full"></div>
          <SocialLinks className="justify-center" />
        </div>
      </div>
      
      {/* Tech stack icons */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 opacity-50">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-6 h-6" alt="MongoDB" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-6 h-6" alt="Express.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-6 h-6" alt="Node.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-6 h-6" alt="Next.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-6 h-6" alt="TypeScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
      </div>
    </section>
  );
};

export default Hero;
