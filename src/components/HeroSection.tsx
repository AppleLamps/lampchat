
import React from "react";
import { Button } from "@/components/ui/button";
import { BlurContainer } from "@/components/ui/blur-container";
import { MessageSquare, Bot, Sparkles, ArrowRight } from "lucide-react";
import { useApiKey } from "@/context/ApiKeyContext";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onOpenSettings: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSettings }) => {
  const { isKeySet } = useApiKey();

  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(200,210,255,0.3),rgba(255,255,255,0)_25%),radial-gradient(circle_at_80%_60%,rgba(200,240,230,0.35),rgba(255,255,255,0)_30%)]"></div>
      
      {/* Content */}
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_450px] items-center">
          <div className="flex flex-col justify-center space-y-4 animate-slide-up">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium animate-fade-in">
                <span className="flex items-center gap-1.5">
                  <div className="h-3.5 w-3.5 rounded-full overflow-hidden">
                    <img src="/lovable-uploads/d03f6a93-56ad-44c9-9425-21d55cef2fdf.png" className="h-full w-full object-cover" alt="Gemini Icon" />
                  </div>
                  Powered by Gemini
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Intelligent Conversations with Gemini AI
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Experience the power of Google's Gemini AI in a beautiful, responsive chat interface.
                Ask questions, get creative responses, and explore the capabilities of advanced AI.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="gap-2 rounded-full"
                >
                  <MessageSquare className="h-4 w-4" />
                  Start Chatting
                </Button>
              </Link>
              {!isKeySet && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 rounded-full border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                  onClick={onOpenSettings}
                >
                  Set Up Gemini API Key
                </Button>
              )}
            </div>
          </div>
          
          {/* Chat preview visualization */}
          <div className="animate-fade-in [animation-delay:300ms]">
            <BlurContainer className="p-6 md:p-8 relative" intensity="light">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground overflow-hidden">
                    <div className="h-full w-full">
                      <img src="/lovable-uploads/d03f6a93-56ad-44c9-9425-21d55cef2fdf.png" className="h-full w-full object-cover" alt="Bot" />
                    </div>
                  </div>
                  <div className="bg-muted/10 rounded-md p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm your Gemini AI assistant. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex flex-row-reverse items-start gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div className="bg-primary/10 rounded-md p-3 max-w-[80%]">
                    <p className="text-sm">Can you explain quantum computing in simple terms?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground overflow-hidden">
                    <img src="/lovable-uploads/d03f6a93-56ad-44c9-9425-21d55cef2fdf.png" className="h-full w-full object-cover" alt="Bot" />
                  </div>
                  <div className="bg-muted/10 rounded-md p-3 max-w-[80%]">
                    <p className="text-sm">Quantum computing uses quantum bits or qubits, which can be both 0 and 1 at the same time. This allows quantum computers to process complex problems much faster than traditional computers...</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-2">
                  <Link to="/chat" className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Continue this conversation
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </BlurContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
