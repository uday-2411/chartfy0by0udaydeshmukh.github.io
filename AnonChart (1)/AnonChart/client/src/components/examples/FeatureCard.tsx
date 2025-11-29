import FeatureCard from '../FeatureCard';
import { MessageCircle } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <FeatureCard
        title="Anonymous Chat"
        description="Chat freely with anyone without registration. Your identity stays private."
        icon={MessageCircle}
        href="/chat"
      />
    </div>
  );
}
