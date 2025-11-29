import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/home";
import ChatPage from "@/pages/chat";
import NotFound from "@/pages/not-found";
import DisclaimerModal from "@/components/DisclaimerModal";

const DISCLAIMER_ACCEPTED_KEY = "disclaimer_accepted";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/chat" component={ChatPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const accepted = localStorage.getItem(DISCLAIMER_ACCEPTED_KEY);
    setDisclaimerAccepted(accepted === "true");
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, "true");
    setDisclaimerAccepted(true);
  };

  // Show nothing while checking localStorage
  if (disclaimerAccepted === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!disclaimerAccepted && (
          <DisclaimerModal onAccept={handleAcceptDisclaimer} />
        )}
        {disclaimerAccepted && <Router />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
