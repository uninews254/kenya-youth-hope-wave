import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppBubble from "./WhatsAppBubble";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
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