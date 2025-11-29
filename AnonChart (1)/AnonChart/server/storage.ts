import type { Message, AnonymousUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Messages
  getMessages(): Promise<Message[]>;
  addMessage(message: Message): Promise<Message>;
  
  // Users
  getActiveUsers(): Promise<AnonymousUser[]>;
  addUser(user: AnonymousUser): Promise<AnonymousUser>;
  removeUser(userId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private messages: Message[];
  private users: Map<string, AnonymousUser>;

  constructor() {
    this.messages = [];
    this.users = new Map();
  }

  async getMessages(): Promise<Message[]> {
    return this.messages;
  }

  async addMessage(message: Message): Promise<Message> {
    this.messages.push(message);
    return message;
  }

  async getActiveUsers(): Promise<AnonymousUser[]> {
    return Array.from(this.users.values()).filter(user => user.isOnline);
  }

  async addUser(user: AnonymousUser): Promise<AnonymousUser> {
    this.users.set(user.id, user);
    return user;
  }

  async removeUser(userId: string): Promise<void> {
    this.users.delete(userId);
  }
}

export const storage = new MemStorage();
