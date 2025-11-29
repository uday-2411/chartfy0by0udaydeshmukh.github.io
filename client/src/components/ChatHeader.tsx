import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Menu, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { AnonymousUser } from "@shared/schema";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ChatHeaderProps {
  onlineCount: number;
  users?: AnonymousUser[];
}

export default function ChatHeader({ onlineCount, users = [] }: ChatHeaderProps) {
  return (
    <header className="h-16 border-b border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="ghost" size="icon" data-testid="button-back-home">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-sm font-bold">AC</span>
          </div>
          <h1 className="text-lg font-semibold text-foreground" data-testid="text-app-title">
            Anonymous Chat
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="gap-1.5 bg-secondary/50 border-border/50" data-testid="badge-online-count">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>{onlineCount} online</span>
        </Badge>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="lg:hidden" data-testid="button-mobile-users">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-card/95 backdrop-blur-md border-border/50">
            <SheetHeader>
              <SheetTitle>Active Users ({users.length})</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <div className="space-y-2">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover-elevate active-elevate-2"
                  >
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback style={{ backgroundColor: user.avatarColor }} className="text-white text-xs font-medium">
                          {user.username.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {user.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" />
                      )}
                    </div>
                    <span className="text-sm text-foreground truncate">
                      {user.username}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" variant="ghost" data-testid="button-info">
              <Info className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card/95 backdrop-blur-md border-border/50">
            <DialogHeader>
              <DialogTitle>How to Use Anonymous Chat</DialogTitle>
              <DialogDescription className="space-y-3 pt-4">
                <p>Welcome to Anonymous Chat! Here's how it works:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>You're automatically assigned a guest name when you join</li>
                  <li>Type your message in the input box at the bottom</li>
                  <li>Press Enter to send, or Shift+Enter for a new line</li>
                  <li>Messages are limited to 500 characters</li>
                  <li>See who's online in the user list (desktop) or menu (mobile)</li>
                  <li>Chat freely - no registration required!</li>
                </ul>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
