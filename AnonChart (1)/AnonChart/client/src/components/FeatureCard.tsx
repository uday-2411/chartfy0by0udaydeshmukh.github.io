import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  disabled?: boolean;
  isFeatured?: boolean;
}

export default function FeatureCard({ title, description, icon: Icon, href, badge, disabled = false, isFeatured = false }: FeatureCardProps) {
  return (
    <Card 
      className={`group relative overflow-visible transition-all duration-300 ${isFeatured ? 'bg-gradient-to-br from-card/80 to-card/60 border-primary/50 animate-rotate-glow shadow-2xl' : 'bg-card/50 backdrop-blur-sm border-border/50'} ${disabled ? 'opacity-50' : `hover-elevate ${isFeatured ? 'hover:border-primary/70' : 'hover:border-primary/30'}`}`} 
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isFeatured ? 'bg-primary/30 border-primary/60 animate-pulse-scale' : 'bg-primary/15 border-primary/20'} text-primary border ${!disabled && 'group-hover:bg-primary/25 group-hover:border-primary/30 group-hover:animate-pulse-glow'} transition-all duration-300`}>
          <Icon className={`h-6 w-6 ${!disabled && 'group-hover:scale-110'} transition-transform duration-300 ${isFeatured ? 'animate-spin-slow' : ''}`} />
        </div>
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {badge && (
              <Badge variant="secondary" className="text-xs bg-secondary/50 border-border/50">
                {badge}
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {disabled ? (
          <Button variant="secondary" disabled className="w-full bg-secondary/50" data-testid={`button-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Coming Soon
          </Button>
        ) : (
          <Link href={href}>
            <Button className="w-full gap-2 group/btn" data-testid={`button-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Open {title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
