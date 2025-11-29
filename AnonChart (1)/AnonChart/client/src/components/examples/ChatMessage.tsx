import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  const sampleMessages = [
    {
      id: '1',
      userId: 'user1',
      username: 'Guest1234',
      avatarColor: '#3b82f6',
      content: 'Hey everyone! This is my first message in the chat.',
      timestamp: Date.now() - 120000,
    },
    {
      id: '2',
      userId: 'user1',
      username: 'Guest1234',
      avatarColor: '#3b82f6',
      content: 'This is a consecutive message from the same user.',
      timestamp: Date.now() - 115000,
    },
    {
      id: '3',
      userId: 'user2',
      username: 'Guest5678',
      avatarColor: '#10b981',
      content: 'Welcome! Great to have you here.',
      timestamp: Date.now() - 60000,
    },
  ];

  return (
    <div className="p-4 space-y-1">
      <ChatMessage message={sampleMessages[0]} />
      <ChatMessage message={sampleMessages[1]} isConsecutive />
      <ChatMessage message={sampleMessages[2]} />
    </div>
  );
}
