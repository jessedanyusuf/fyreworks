import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IdeaFireSection from "@/components/IdeaFireSection";
import ClientCarousel from "@/components/ClientCarousel";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeDoItSection from "@/components/HowWeDoItSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import ManifestoSection from "@/components/ManifestoSection";
import JoinTheMovementSection from "@/components/JoinTheMovementSection";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    document.title = "Fireworks — Build a movement";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <IdeaFireSection />
          <ClientCarousel />
          <WhatWeDoSection />
          {/* <HowWeDoItSection /> */}
          <WhoWeWorkWithSection />
          <ManifestoSection />
          <JoinTheMovementSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
