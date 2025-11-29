import MessageInput from '../MessageInput';

export default function MessageInputExample() {
  const handleSend = (content: string) => {
    console.log('Message sent:', content);
  };

  return (
    <div className="h-32">
      <MessageInput onSendMessage={handleSend} />
    </div>
  );
}
