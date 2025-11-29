import ChatHeader from '../ChatHeader';

export default function ChatHeaderExample() {
  const sampleUsers = [
    { id: '1', username: 'Guest1234', avatarColor: '#3b82f6', isOnline: true },
    { id: '2', username: 'Guest5678', avatarColor: '#10b981', isOnline: true },
    { id: '3', username: 'Guest9012', avatarColor: '#f59e0b', isOnline: true },
  ];

  return <ChatHeader onlineCount={42} users={sampleUsers} />;
}
