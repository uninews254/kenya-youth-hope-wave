import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppBubble = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+254700000000"; // Replace with actual campaign WhatsApp number
    const message = "Hi! I'm interested in supporting the Hope Wave 2027 campaign. How can I get involved?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-pulse-hope">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default WhatsAppBubble;