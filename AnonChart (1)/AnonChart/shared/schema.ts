import { z } from "zod";

// Message schema
export const messageSchema = z.object({
  id: z.string(),
  userId: z.string(),
  username: z.string(),
  avatarColor: z.string(),
  content: z.string(),
  timestamp: z.number(),
  replyTo: z.object({
    id: z.string(),
    username: z.string(),
    content: z.string(),
    avatarColor: z.string(),
  }).optional(),
});

export type Message = z.infer<typeof messageSchema>;

// Anonymous user schema
export const anonymousUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatarColor: z.string(),
  isOnline: z.boolean(),
});

export type AnonymousUser = z.infer<typeof anonymousUserSchema>;

// Insert message schema
export const insertMessageSchema = messageSchema.omit({ id: true, timestamp: true });
export type InsertMessage = z.infer<typeof insertMessageSchema>;
