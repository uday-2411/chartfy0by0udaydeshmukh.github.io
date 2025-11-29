import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import MessageInput from "@/components/MessageInput";
import UserList from "@/components/UserList";
import TypingIndicator from "@/components/TypingIndicator";
import CopyrightFooter from "@/components/CopyrightFooter";
import type { Message, AnonymousUser } from "@shared/schema";

// Helper to generate random guest username
function generateGuestName(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `Guest${num}`;
}

// Helper to generate avatar color - using vibrant colors that pop on dark background
function generateAvatarColor(): string {
  const colors = [
    '#a855f7', '#ec4899', '#f43f5e', '#f97316', '#eab308',
    '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6', '#8b5cf6'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Bot questions - college, study, games, dreams, and more
const BOT_QUESTIONS = [
  "🎓 What's your favorite subject to study?",
  "🎮 What's your go-to game when you want to chill?",
  "💭 What's the most interesting dream you've had recently?",
  "📚 Are you more of a note-taker or a concept learner?",
  "🎯 What's your biggest goal for this semester?",
  "🎮 Do you prefer single-player or multiplayer games?",
  "🌙 What's a fun fact about yourself that surprises people?",
  "💼 What career are you interested in pursuing?",
  "🎨 What's a hobby you're passionate about?",
  "📖 If you could learn anything instantly, what would it be?",
  "🏆 What achievement are you most proud of?",
  "🎭 What's the funniest thing that happened to you at college?",
  "🌟 Who's someone you admire and why?",
  "🎪 What's your idea of a perfect day?",
  "🔥 What's currently on your mind?",
  "🚀 If you had unlimited time, what would you do?",
  "💡 What's a skill you want to master?",
  "🎵 What music makes you happy?",
  "🍕 What's your favorite food to eat while studying?",
  "⚡ What's something you learned today?",
  "🌈 What's your favorite color and why?",
  "🎲 What's something you've been wanting to try?",
  "📱 How do you usually take breaks from studying?",
  "🌍 If you could travel anywhere, where would you go?",
  "💬 What's the best advice you've ever received?",
  "🎯 What's a challenge you're currently facing?",
  "✨ What makes you smile?",
  "🧠 What's something you're curious about?",
  "🏅 What's your biggest strength?",
  "🌱 What's one thing you want to improve about yourself?"
];

const BOT_USER: AnonymousUser = {
  id: 'bot',
  username: 'ChatBot',
  avatarColor: '#a78bfa',
  isOnline: true,
};

export default function ChatPage() {
  const [currentUser] = useState<AnonymousUser>(() => ({
    id: crypto.randomUUID(),
    username: generateGuestName(),
    avatarColor: generateAvatarColor(),
    isOnline: true,
  }));

  //todo: remove mock functionality
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      userId: 'system',
      username: 'Guest2847',
      avatarColor: '#a855f7',
      content: 'Welcome to Anonymous Chat! Feel free to chat with anyone here.',
      timestamp: Date.now() - 300000,
    },
    {
      id: '2',
      userId: 'user2',
      username: 'Guest5821',
      avatarColor: '#22c55e',
      content: 'Hey everyone! How is your day going?',
      timestamp: Date.now() - 180000,
    },
    {
      id: '3',
      userId: 'user3',
      username: 'Guest9234',
      avatarColor: '#f97316',
      content: 'Pretty good! Just discovered this chat app. Nice design!',
      timestamp: Date.now() - 120000,
    },
    {
      id: '4',
      userId: 'user3',
      username: 'Guest9234',
      avatarColor: '#f97316',
      content: 'Anyone know if there are different chat rooms?',
      timestamp: Date.now() - 115000,
    },
  ]);

  //todo: remove mock functionality
  const [users, setUsers] = useState<AnonymousUser[]>([
    currentUser,
    { id: 'user2', username: 'Guest5821', avatarColor: '#22c55e', isOnline: true },
    { id: 'user3', username: 'Guest9234', avatarColor: '#f97316', isOnline: true },
    { id: 'user4', username: 'Guest1456', avatarColor: '#ec4899', isOnline: true },
    { id: 'user5', username: 'Guest7392', avatarColor: '#3b82f6', isOnline: true },
  ]);

  // Track who is currently typing
  const [typingUsers, setTypingUsers] = useState<AnonymousUser[]>([]);
  
  // Track used bot questions
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());

  // Bot message interval - every 4 minutes (240000 ms)
  useEffect(() => {
    const sendBotMessage = () => {
      // Get available questions (not used yet)
      const availableIndices = Array.from({ length: BOT_QUESTIONS.length })
        .map((_, i) => i)
        .filter(i => !usedQuestions.has(i));
      
      // If all questions used, reset
      if (availableIndices.length === 0) {
        setUsedQuestions(new Set());
        for (let i = 0; i < BOT_QUESTIONS.length; i++) {
          availableIndices.push(i);
        }
      }
      
      // Pick random question from available
      const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      
      // Mark as used
      setUsedQuestions(prev => new Set([...prev, randomIndex]));
      
      // Create bot message
      const botMessage: Message = {
        id: crypto.randomUUID(),
        userId: 'bot',
        username: BOT_USER.username,
        avatarColor: BOT_USER.avatarColor,
        content: BOT_QUESTIONS[randomIndex],
        timestamp: Date.now(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    };

    // Send first bot message after 10 seconds
    const initialTimeout = setTimeout(sendBotMessage, 10000);
    
    // Then send every 4 minutes
    const interval = setInterval(sendBotMessage, 240000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [usedQuestions]);

  // Simulate random users typing (for demo purposes)
  useEffect(() => {
    const simulateTyping = () => {
      const otherUsers = users.filter(u => u.id !== currentUser.id);
      const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      
      if (randomUser && !typingUsers.find(u => u.id === randomUser.id)) {
        setTypingUsers(prev => [...prev, randomUser]);
        
        // Stop typing after 2-4 seconds
        setTimeout(() => {
          setTypingUsers(prev => prev.filter(u => u.id !== randomUser.id));
        }, 2000 + Math.random() * 2000);
      }
    };

    // Start typing simulation every 5-10 seconds
    const interval = setInterval(simulateTyping, 5000 + Math.random() * 5000);
    
    // Initial typing simulation after 2 seconds
    const initialTimeout = setTimeout(simulateTyping, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [users, currentUser.id, typingUsers]);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      username: currentUser.username,
      avatarColor: currentUser.avatarColor,
      content,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newMessage]);
    console.log('Message sent:', newMessage);
  };

  const handleReplyToMessage = (originalMessage: Message, replyContent: string) => {
    const replyMessage: Message = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      username: currentUser.username,
      avatarColor: currentUser.avatarColor,
      content: replyContent,
      timestamp: Date.now(),
      replyTo: {
        id: originalMessage.id,
        username: originalMessage.username,
        content: originalMessage.content,
        avatarColor: originalMessage.avatarColor,
      },
    };
    setMessages((prev) => [...prev, replyMessage]);
  };

  // Group messages by consecutive same user
  const groupedMessages = messages.reduce((acc, message, index) => {
    const prevMessage = messages[index - 1];
    const isConsecutive = prevMessage && prevMessage.userId === message.userId;
    acc.push({ message, isConsecutive });
    return acc;
  }, [] as Array<{ message: Message; isConsecutive: boolean }>);

  return (
    <div className="flex h-screen flex-col bg-background">
      <ChatHeader onlineCount={users.filter(u => u.isOnline).length} users={users} />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col">
          <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
            <div className="max-w-4xl mx-auto py-4">
              {groupedMessages.map(({ message, isConsecutive }) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isConsecutive={isConsecutive}
                  onReply={handleReplyToMessage}
                />
              ))}
              {typingUsers.map(user => (
                <TypingIndicator
                  key={user.id}
                  username={user.username}
                  avatarColor={user.avatarColor}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <MessageInput onSendMessage={handleSendMessage} />
        </div>

        <UserList users={users} />
      </div>
      
      <CopyrightFooter />
    </div>
  );
}
