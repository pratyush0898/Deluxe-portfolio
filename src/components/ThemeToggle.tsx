
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="rounded-full w-10 h-10 relative overflow-hidden transition-all duration-300 hover:bg-secondary group"
    >
      <span className="sr-only">Toggle theme</span>
      <span 
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          theme === 'light' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <Moon className="h-5 w-5 text-primary group-hover:text-primary/80" />
      </span>
      <span 
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          theme === 'dark' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <Sun className="h-5 w-5 text-primary group-hover:text-primary/80" />
      </span>
    </Button>
  );
};

export default ThemeToggle;
