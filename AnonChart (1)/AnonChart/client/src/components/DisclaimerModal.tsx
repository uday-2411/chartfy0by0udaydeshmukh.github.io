import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Heart, Sparkles } from "lucide-react";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after a short delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
      
      {/* Floating orbs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Modal content */}
      <div 
        className={`relative max-w-lg w-full bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        data-testid="modal-disclaimer"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-pulse-glow">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-foreground mb-2" data-testid="text-disclaimer-title">
          Disclaimer
        </h2>
        
        {/* Warning badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-yellow-500 font-medium">Please Read Carefully</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-8" data-testid="text-disclaimer-content">
          <p>
            This website is created and provided for <span className="text-foreground font-medium">educational purposes only</span>.
          </p>
          <p>
            The owner of this website is <span className="text-foreground font-medium">not responsible</span> for any:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Misuse of the platform or its features</li>
            <li>Content shared by users in chat rooms</li>
            <li>Personal information voluntarily disclosed</li>
            <li>Actions taken based on conversations</li>
            <li>Technical issues or data loss</li>
          </ul>
          <p>
            By clicking "I Understand & Accept" below, you acknowledge that you have read, understood, and agree to these terms.
          </p>
        </div>

        {/* Accept button */}
        <Button 
          className="w-full h-12 text-base font-semibold gap-2"
          onClick={onAccept}
          data-testid="button-accept-disclaimer"
        >
          <Shield className="h-5 w-5" />
          I Understand & Accept
        </Button>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Use this platform responsibly and respect other users.
        </p>

        {/* Owner copyright */}
        <div className="flex items-center justify-center gap-1.5 mt-4 pt-4 border-t border-border/30">
          <Sparkles className="h-3 w-3 text-primary/60 animate-twinkle" />
          <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()}</span>
          <span className="text-xs text-muted-foreground">Created with</span>
          <Heart className="h-3 w-3 text-red-500 animate-heartbeat" />
          <span className="text-xs text-muted-foreground">by</span>
          <span className="text-xs font-semibold bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            Uday
          </span>
          <Sparkles className="h-3 w-3 text-primary/60 animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
}
