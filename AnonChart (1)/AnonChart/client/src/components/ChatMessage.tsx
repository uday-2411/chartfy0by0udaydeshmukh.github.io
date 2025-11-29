import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import type { Message } from "@shared/schema";

interface ChatMessageProps {
  message: Message;
  isConsecutive?: boolean;
  onReply?: (message: Message, reply: string) => void;
}

export default function ChatMessage({ message, isConsecutive = false, onReply }: ChatMessageProps) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const initials = message.username.substring(0, 2).toUpperCase();
  const timeAgo = formatDistanceToNow(new Date(message.timestamp), { addSuffix: true });

  const handleReply = () => {
    if (replyText.trim() && onReply) {
      onReply(message, replyText.trim());
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className={`flex gap-3 ${isConsecutive ? 'mt-0.5' : 'mt-4'} group animate-slide-in`} data-testid={`message-${message.id}`}>
      <div className="flex-shrink-0">
        {!isConsecutive ? (
          <Avatar className="h-9 w-9">
            <AvatarFallback 
              style={{ backgroundColor: message.avatarColor }} 
              className="text-white text-xs font-semibold"
            >
              {initials}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className="h-9 w-9" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        {!isConsecutive && (
          <div className="flex items-baseline gap-2 mb-1">
            <span 
              className="text-sm font-semibold" 
              style={{ color: message.avatarColor }}
              data-testid={`text-username-${message.id}`}
            >
              {message.username}
            </span>
            <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" data-testid={`text-timestamp-${message.id}`}>
              {timeAgo}
            </span>
          </div>
        )}
        {message.replyTo && (
          <div className="mb-2 pl-3 border-l-2 border-primary/50 bg-card/80 rounded py-2 px-2">
            <p className="text-xs font-medium" style={{ color: message.replyTo.avatarColor }}>
              Replying to {message.replyTo.username}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {message.replyTo.content}
            </p>
          </div>
        )}
        <p className="text-[15px] text-foreground/90 break-words leading-relaxed" data-testid={`text-content-${message.id}`}>
          {message.content}
        </p>
        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onReply && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs gap-1"
              onClick={() => setShowReplyInput(!showReplyInput)}
              data-testid={`button-reply-${message.id}`}
            >
              <MessageCircle className="h-3 w-3" />
              Reply
            </Button>
          )}
        </div>
        {showReplyInput && (
          <div className="mt-3 space-y-2 bg-card/50 p-2 rounded-lg">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Your reply..."
              className="w-full bg-background/50 border border-border/50 rounded px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              rows={2}
            />
            <div className="flex gap-1">
              <Button
                size="sm"
                className="h-7 text-xs"
                onClick={handleReply}
                disabled={!replyText.trim()}
                data-testid={`button-send-reply-${message.id}`}
              >
                Send
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs"
                onClick={() => {
                  setShowReplyInput(false);
                  setReplyText("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
