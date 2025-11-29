import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({ href = "/", label = "Back to Home" }: BackButtonProps) {
  return (
    <Link href={href}>
      <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back">
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Button>
    </Link>
  );
}
