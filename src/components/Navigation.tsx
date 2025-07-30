import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import torchLogo from "@/assets/torch-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/platform", label: "Platform" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={torchLogo} alt="Hope Wave Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-hope">Hope Wave</span>
              <span className="font-poppins text-xs text-trust">2027</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-raleway font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-hope border-b-2 border-hope"
                    : "text-gray-700 hover:text-hope"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-trust font-raleway">
              <Heart className="h-4 w-4 mr-2" />
              Donate
            </Button>
            <Button className="btn-youth font-raleway">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md font-raleway font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-hope bg-hope/10"
                      : "text-gray-700 hover:text-hope hover:bg-hope/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="btn-trust font-raleway">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate via MPESA
                </Button>
                <Button className="btn-youth font-raleway">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;