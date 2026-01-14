import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, useLocation } from "wouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClickSpark from "./components/Reactbits/ClickSpark";

const queryClient = new QueryClient();

const AppContent = () => {
  const [location] = useLocation();

  return (
    <Router>
      <Route path="/" component={Index} />
      {location !== "/" && <Route path="*" component={NotFound} />}
    </Router>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Toaster />
        <Sonner />
        <AppContent />
      </ClickSpark>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
