import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TypingIndicatorProps {
  username: string;
  avatarColor: string;
}

export default function TypingIndicator({ username, avatarColor }: TypingIndicatorProps) {
  const initials = username.substring(0, 2).toUpperCase();

  return (
    <div className="flex gap-3 mt-4 animate-slide-in" data-testid="typing-indicator">
      <div className="flex-shrink-0">
        <Avatar className="h-9 w-9">
          <AvatarFallback 
            style={{ backgroundColor: avatarColor }} 
            className="text-white text-xs font-semibold"
          >
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <span 
          className="text-sm font-semibold mb-1" 
          style={{ color: avatarColor }}
        >
          {username}
        </span>
        <div className="flex items-center gap-1 bg-card/80 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border/30">
          <div className="typing-dot" style={{ animationDelay: '0ms' }} />
          <div className="typing-dot" style={{ animationDelay: '150ms' }} />
          <div className="typing-dot" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
