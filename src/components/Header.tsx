import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Algo Trading", href: "#algo" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Shreeji Techno Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/917874503856?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20contacting%20*Shreeji%20Techno*%20%F0%9F%93%88%0A%0AWe%20provide%3A%0A%E2%9C%85%20Stock%20Market%20Courses%0A%E2%9C%85%20Trading%20%26%20Investing%20Guidance%0A%E2%9C%85%20Algo%20Trading%20Solutions%0A%0APlease%20share%3A%0A1)%20Your%20Name%0A2)%20Your%20Experience%20Level%20(Beginner%20%2F%20Intermediate%20%2F%20Advanced)%0A3)%20Your%20Requirement%0A%0AOur%20team%20will%20reply%20shortly."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/917874503856?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20contacting%20*Shreeji%20Techno*%20%F0%9F%93%88%0A%0AWe%20provide%3A%0A%E2%9C%85%20Stock%20Market%20Courses%0A%E2%9C%85%20Trading%20%26%20Investing%20Guidance%0A%E2%9C%85%20Algo%20Trading%20Solutions%0A%0APlease%20share%3A%0A1)%20Your%20Name%0A2)%20Your%20Experience%20Level%20(Beginner%20%2F%20Intermediate%20%2F%20Advanced)%0A3)%20Your%20Requirement%0A%0AOur%20team%20will%20reply%20shortly."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
