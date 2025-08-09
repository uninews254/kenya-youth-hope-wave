import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppBubble from "./WhatsAppBubble";
import SEO from "@/components/SEO";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Layout;