
import { Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import CONTENT from "@/data/Content";
import { Button } from "@/components/ui/button";

const SocialLinks = ({ className = "" }: { className?: string }) => {
  const socialIcons = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: CONTENT.socials.github, 
      color: "hover:text-[#333] hover:bg-[#f5f5f5] dark:hover:bg-[#333]/20",
      ariaLabel: "Visit my GitHub profile"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: CONTENT.socials.twitter, 
      color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
      ariaLabel: "Follow me on Twitter" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: CONTENT.socials.linkedin, 
      color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
      ariaLabel: "Connect with me on LinkedIn" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: CONTENT.socials.instagram, 
      color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10",
      ariaLabel: "Follow me on Instagram" 
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: CONTENT.socials.facebook, 
      color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
      ariaLabel: "Connect with me on Facebook" 
    },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialIcons.map((social, index) => (
        <Button
          key={social.name}
          variant="ghost"
          size="icon"
          asChild
          className={`h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-md animate-fade-in group`}
          style={{ animationDelay: `${300 + index * 100}ms` }}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
          >
            <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">{social.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
