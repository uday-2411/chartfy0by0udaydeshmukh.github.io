import { MessageCircle, Users, ImageIcon, FileText, Gamepad2, Music, Sparkles, Menu, Settings, Info, Shield, Star, ExternalLink } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CopyrightFooter from "@/components/CopyrightFooter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const features = [
  {
    title: "Anonymous Chat",
    description: "Chat freely with anyone without registration. Your identity stays completely private.",
    icon: MessageCircle,
    href: "/chat",
  },
  {
    title: "Group Rooms",
    description: "Create or join topic-based chat rooms to discuss your interests.",
    icon: Users,
    href: "/rooms",
    badge: "Coming Soon",
    disabled: true,
  },
  {
    title: "Share Media",
    description: "Share images and files anonymously with other users.",
    icon: ImageIcon,
    href: "/media",
    badge: "Coming Soon",
    disabled: true,
  },
  {
    title: "Anonymous Notes",
    description: "Write and share anonymous notes with the community.",
    icon: FileText,
    href: "/notes",
    badge: "Coming Soon",
    disabled: true,
  },
  {
    title: "Mini Games",
    description: "Play fun multiplayer games with other anonymous users.",
    icon: Gamepad2,
    href: "/games",
    badge: "Coming Soon",
    disabled: true,
  },
  {
    title: "Music Room",
    description: "Listen to music together with synchronized playback.",
    icon: Music,
    href: "/music",
    badge: "Coming Soon",
    disabled: true,
  },
];

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function FloatingParticle({ size, top, left, delay }: { size: number; top: string; left: string; delay: number }) {
  return (
    <div 
      className="absolute rounded-full bg-primary/30 animate-float-particle"
      style={{
        width: size,
        height: size,
        top,
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }}
    />
  );
}

export default function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated floating orbs */}
      <FloatingOrb className="w-[600px] h-[600px] -top-64 -left-64 bg-primary/20" delay={0} />
      <FloatingOrb className="w-[500px] h-[500px] top-1/3 -right-48 bg-purple-500/15" delay={2} />
      <FloatingOrb className="w-[400px] h-[400px] -bottom-32 left-1/4 bg-pink-500/15" delay={4} />
      <FloatingOrb className="w-[300px] h-[300px] top-1/4 left-1/2 bg-blue-500/10" delay={1} />
      {/* Floating particles */}
      <FloatingParticle size={4} top="20%" left="10%" delay={0} />
      <FloatingParticle size={6} top="30%" left="85%" delay={1} />
      <FloatingParticle size={3} top="60%" left="15%" delay={2} />
      <FloatingParticle size={5} top="70%" left="80%" delay={0.5} />
      <FloatingParticle size={4} top="40%" left="50%" delay={1.5} />
      <FloatingParticle size={3} top="80%" left="40%" delay={3} />
      <FloatingParticle size={5} top="15%" left="60%" delay={2.5} />
      <FloatingParticle size={4} top="50%" left="25%" delay={1} />
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Top Menu Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
          </div>
          <span className="font-semibold text-foreground">Anonymous Space</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" data-testid="button-menu">
              <Menu className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-md border-border/50">
            <DropdownMenuLabel className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-primary" />
              Menu
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuItem onClick={() => setAboutOpen(true)} className="cursor-pointer" data-testid="menu-about">
              <Info className="h-4 w-4 mr-2" />
              About Us
            </DropdownMenuItem>
            
            <DropdownMenuItem onClick={() => setPrivacyOpen(true)} className="cursor-pointer" data-testid="menu-privacy">
              <Shield className="h-4 w-4 mr-2" />
              Privacy Policy
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem className="cursor-pointer" data-testid="menu-rate">
              <Star className="h-4 w-4 mr-2" />
              Rate App
            </DropdownMenuItem>
            
            <DropdownMenuItem className="cursor-pointer" data-testid="menu-share">
              <ExternalLink className="h-4 w-4 mr-2" />
              Share App
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <div className="px-2 py-1.5">
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
              <p className="text-xs text-muted-foreground">Made by Uday</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* About Dialog */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-border/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              About Anonymous Space
            </DialogTitle>
            <DialogDescription className="space-y-3 pt-4 text-left">
              <p>
                <span className="font-semibold text-foreground">Anonymous Space</span> is a platform where you can connect, chat, and share freely without revealing your identity.
              </p>
              <p>
                Our mission is to provide a safe and fun environment for anonymous communication while respecting everyone's privacy.
              </p>
              <div className="pt-2">
                <p className="text-sm font-medium text-foreground">Features:</p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                  <li>Anonymous real-time chat</li>
                  <li>Auto-generated guest names</li>
                  <li>No registration required</li>
                  <li>Beautiful dark aesthetic design</li>
                  <li>More features coming soon!</li>
                </ul>
              </div>
              <p className="pt-2 text-sm">
                Created with love by <span className="font-semibold text-primary">Uday</span>
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-border/50 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="space-y-4 pt-4 text-left">
              <div>
                <p className="font-medium text-foreground mb-2">Your Privacy Matters</p>
                <p className="text-sm">
                  At Anonymous Space, we take your privacy seriously. Here's what you need to know:
                </p>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-1">No Personal Data Collection</p>
                <p className="text-sm">
                  We do not collect, store, or share any personal information. Your identity remains completely anonymous.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-1">No Account Required</p>
                <p className="text-sm">
                  You don't need to create an account or provide any personal details to use our services.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-1">Chat Messages</p>
                <p className="text-sm">
                  Messages are temporary and not permanently stored. Once you leave, your chat history is gone.
                </p>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-1">Cookies</p>
                <p className="text-sm">
                  We only use essential cookies to remember your disclaimer acceptance. No tracking cookies are used.
                </p>
              </div>
              
              <p className="text-xs text-muted-foreground pt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl border border-primary/30 glow-primary-sm animate-pulse-glow mt-[0px] mb-[0px] bg-[#0053a6]">
            <Sparkles className="h-10 w-10 text-primary animate-spin-slow" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-hero-title">
            <span className="animate-fade-in-up inline-block" style={{ animationDelay: '0.1s' }}>Anonymous</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Space
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }} data-testid="text-hero-description">
            Connect, chat, and share freely without revealing your identity. 
            No registration required — just jump in and start exploring.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const isMainFeature = feature.title === "Anonymous Chat";
            return (
              <div 
                key={feature.title} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {isMainFeature ? (
                  <div className="relative animate-card-float">
                    {/* Bright animated glow background */}
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary via-purple-400 to-pink-400 blur-2xl opacity-80 animate-pulse z-0" />
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/60 via-purple-500/40 to-pink-500/60 blur-xl opacity-90 animate-shimmer-slow z-0" />
                    {/* Card with relative positioning */}
                    <div className="relative z-10">
                      <FeatureCard
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        href={feature.href}
                        badge={feature.badge}
                        disabled={feature.disabled}
                        isFeatured={isMainFeature}
                      />
                    </div>
                  </div>
                ) : (
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    href={feature.href}
                    badge={feature.badge}
                    disabled={feature.disabled}
                    isFeatured={isMainFeature}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm text-muted-foreground">
              No account needed. No data collected. Just pure anonymous interaction.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom gradient line */}
      <div className="absolute bottom-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
      <CopyrightFooter />
    </div>
  );
}
