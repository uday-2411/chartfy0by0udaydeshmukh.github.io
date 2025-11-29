import UserList from '../UserList';

export default function UserListExample() {
  const sampleUsers = [
    { id: '1', username: 'Guest1234', avatarColor: '#3b82f6', isOnline: true },
    { id: '2', username: 'Guest5678', avatarColor: '#10b981', isOnline: true },
    { id: '3', username: 'Guest9012', avatarColor: '#f59e0b', isOnline: true },
    { id: '4', username: 'Guest3456', avatarColor: '#ec4899', isOnline: false },
    { id: '5', username: 'Guest7890', avatarColor: '#8b5cf6', isOnline: true },
  ];

  return (
    <div className="h-96 flex">
      <div className="flex-1" />
      <UserList users={sampleUsers} />
    </div>
  );
}
