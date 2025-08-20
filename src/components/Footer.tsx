import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import torchLogo from "@/assets/torch-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kenya-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={torchLogo} alt="Muchanga Kiragu Campaign Torch Logo - Kikuyu Constituency MP 2027" className="h-12 w-12" />
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-hope">Muchanga Kiragu</h3>
                <p className="font-poppins text-sm text-trust">Mungu mbele • Ngai mbere • God First</p>
              </div>
            </div>
            <p className="font-roboto text-gray-300 mb-4 max-w-md">
              Building a Kenya where every youth voice matters. Together, we rise to create jobs, 
              improve education, and ensure clean leadership for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hope transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://wa.me/254768664079" className="text-gray-400 hover:text-green-500 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-trust transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-youth transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-raleway font-semibold text-lg mb-4 text-hope">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/platform" className="text-gray-400 hover:text-white transition-colors">Our Platform</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-raleway font-semibold text-lg mb-4 text-trust">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-youth" />
                <span className="text-gray-400">+254 768 664079</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-youth" />
                <span className="text-gray-400">kiraguevans4@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-youth" />
                <span className="text-gray-400">Kikuyu Town, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Muchanga Kiragu Campaign. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;