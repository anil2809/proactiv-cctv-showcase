
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const HeroSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="aurora-bg"></div>
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="absolute top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="rounded-full w-10 h-10"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                Professional CCTV Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white text-gray-900">
              Protect Your Property With
              <span className="text-gradient"> Advanced CCTV</span> Solutions
            </h1>
            
            <p className="text-lg dark:text-white/70 text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Protect what matters most with our state-of-the-art CCTV installation and monitoring services. Get professional security solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="dark:border-white/10 dark:hover:bg-white/5 dark:text-white border-gray-300 text-gray-800 hover:bg-gray-100 text-lg px-8 py-6"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">500+</span>
                <span className="text-sm dark:text-white/70 text-gray-600">Projects Completed</span>
              </div>
              <div className="h-12 w-px dark:bg-white/10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">98%</span>
                <span className="text-sm dark:text-white/70 text-gray-600">Customer Satisfaction</span>
              </div>
              <div className="h-12 w-px dark:bg-white/10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">24/7</span>
                <span className="text-sm dark:text-white/70 text-gray-600">Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="public/lovable-uploads/f5352d46-81c5-4c7b-8d6d-196a5d2e481a.png" 
                alt="CCTV Security System" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs dark:text-white/70 text-gray-600">HD Security Camera</span>
                  </div>
                  <h3 className="dark:text-white text-gray-800 font-medium mt-1">Advanced CCTV System</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
