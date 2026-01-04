import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bull-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Shreeji Techno" 
                className="h-12 w-auto object-contain bg-background rounded-lg p-1"
              />
            </a>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional stock market education, trading mentorship, and 
              algorithmic trading solutions to help you master the markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-background/70 hover:text-background text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/algo-trading" className="text-background/70 hover:text-background text-sm transition-colors">
                  Algo Trading
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-background text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shreejitechno45@gmail.com"
                  className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
                >
                  <Mail size={16} />
                  shreejitechno45@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917874503856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
                >
                  <Phone size={16} />
                  +91 7874503856
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          {/* Disclaimer */}
          <p className="text-background/50 text-xs text-center">
            <strong>Disclaimer:</strong> Stock market trading involves risk. Past performance 
            does not guarantee future results. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
