import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { AnonymousUser } from "@shared/schema";

interface UserListProps {
  users: AnonymousUser[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className="hidden lg:flex lg:flex-col w-64 border-l border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="p-4 border-b border-border/50">
        <h2 className="font-semibold text-foreground flex items-center gap-2" data-testid="text-active-users-title">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          Active Users ({users.length})
        </h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-2.5 rounded-lg hover-elevate active-elevate-2 transition-all duration-200"
              data-testid={`user-item-${user.id}`}
            >
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarFallback style={{ backgroundColor: user.avatarColor }} className="text-white text-xs font-medium">
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {user.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-card" data-testid={`status-online-${user.id}`} />
                )}
              </div>
              <span className="text-sm text-foreground truncate" data-testid={`text-username-${user.id}`}>
                {user.username}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
