
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import CONTENT from "@/data/Content";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24 flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in animate-delay-100">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-2xl font-bold mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary/70 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a 
                      href={`mailto:${CONTENT.main.email}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {CONTENT.main.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/70 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      India
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold mb-4">
                Connect on Social Media
              </h3>
              <SocialLinks className="mb-8" />

              <div className="bg-secondary/50 rounded-lg p-6 border">
                <h3 className="font-display text-xl font-bold mb-4">
                  {CONTENT.support.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {CONTENT.support.description}
                </p>
                <a 
                  href="https://www.buymeacoffee.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Support My Work
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send a Message
              </h2>
              <div className="bg-card rounded-lg p-6 md:p-8 border shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
