
import { Link } from "react-router-dom";
import CONTENT from "@/data/Content";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-bold">
              {CONTENT.main.name.split('.')[0]}
            </h3>
            <p className="text-muted-foreground">
              {CONTENT.homepage.title}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-bold">Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-display text-lg font-bold">Connect</h3>
            <p className="text-muted-foreground mb-2">
              Follow me on social media
            </p>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {CONTENT.main.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
