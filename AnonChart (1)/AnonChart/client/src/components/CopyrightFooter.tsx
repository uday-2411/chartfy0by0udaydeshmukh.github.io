import { Heart, Sparkles } from "lucide-react";

export default function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      {/* Animated gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer-slow" />
      
      <div className="bg-gradient-to-t from-background via-background/95 to-transparent py-3 px-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          {/* Floating sparkle left */}
          <Sparkles className="h-3 w-3 text-primary/60 animate-twinkle" />
          
          {/* Copyright text with gradient */}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <span className="animate-fade-pulse">&copy;</span>
            <span className="animate-fade-pulse" style={{ animationDelay: '0.1s' }}>{currentYear}</span>
            <span className="mx-1 text-border">|</span>
            <span className="text-foreground/80">Created with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 animate-heartbeat mx-0.5" />
            <span className="text-foreground/80">by</span>
            <span className="font-semibold bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Uday
            </span>
          </div>

          {/* Floating sparkle right */}
          <Sparkles className="h-3 w-3 text-primary/60 animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Subtle moving particles */}
        <div className="absolute bottom-full left-0 right-0 h-8 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-[10%] w-1 h-1 rounded-full bg-primary/30 animate-rise" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-0 left-[30%] w-1.5 h-1.5 rounded-full bg-purple-400/30 animate-rise" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-[50%] w-1 h-1 rounded-full bg-pink-400/30 animate-rise" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-[70%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-rise" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-0 left-[90%] w-1 h-1 rounded-full bg-purple-400/30 animate-rise" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </footer>
  );
}
