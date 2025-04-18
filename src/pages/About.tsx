import CONTENT from "@/data/Content";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24 flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold mb-8 animate-fade-in">
              {CONTENT.about.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in animate-delay-100">
              {CONTENT.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CONTENT.about.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-md px-4 py-3 text-center border animate-fade-in transform transition-transform duration-300 hover:scale-110 hover:-translate-y-7 hover:bg-secondary hover:shadow-secondary/100 hover:border-gray-300 dark:hover:border-gray-600"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {CONTENT.about.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-md px-4 py-3 text-center border transition-all duration-500 ease-in-out transform animate-fade-in hover:scale-110 hover:-translate-y-7 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/40 hover:border-white hover:mix-blend-multiply cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section className="bg-secondary/50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="space-y-8">
              {CONTENT.about.experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-background border rounded-lg p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-bold text-xl mb-1">{exp.position}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground bg-secondary/70 px-3 py-1 rounded-full">
                      {exp.period}
                    </p>
                  </div>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Articles Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">My Thoughts</h2>
            <p className="text-muted-foreground mb-8">
              {CONTENT.articles.description}
            </p>
            <div className="rounded-lg bg-secondary/50 border p-12 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">
                {CONTENT.articles.title}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Support My Work</h2>
            <p className="text-muted-foreground mb-8">
              {CONTENT.support.description}
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Buy Me a Coffee
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
