import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/917874503856?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20contacting%20*Shreeji%20Techno*%20%F0%9F%93%88%0A%0AWe%20provide%3A%0A%E2%9C%85%20Stock%20Market%20Courses%0A%E2%9C%85%20Trading%20%26%20Investing%20Guidance%0A%E2%9C%85%20Algo%20Trading%20Solutions%0A%0APlease%20share%3A%0A1)%20Your%20Name%0A2)%20Your%20Experience%20Level%20(Beginner%20%2F%20Intermediate%20%2F%20Advanced)%0A3)%20Your%20Requirement%0A%0AOur%20team%20will%20reply%20shortly.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl hover:scale-110 transition-transform animate-pulse-gentle"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
