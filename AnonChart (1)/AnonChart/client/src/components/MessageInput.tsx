import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

export default function MessageInput({ onSendMessage, disabled = false }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const maxLength = 500;

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const remainingChars = maxLength - message.length;

  return (
    <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Textarea
            data-testid="input-message"
            placeholder="Type a message... (Press Enter to send, Shift+Enter for new line)"
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className="resize-none pr-20 min-h-[60px] text-[15px] bg-background/50 border-border/50 focus:border-primary/50"
            rows={2}
          />
          <div className="absolute right-3 bottom-3 flex items-center gap-2">
            <span className={`text-xs ${remainingChars < 50 ? 'text-destructive' : 'text-muted-foreground'}`} data-testid="text-char-count">
              {remainingChars}
            </span>
            <Button
              data-testid="button-send"
              size="icon"
              onClick={handleSend}
              disabled={!message.trim() || disabled}
              className="h-8 w-8"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
