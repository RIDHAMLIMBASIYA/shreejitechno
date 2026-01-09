import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fullPhone = formData.phone ? `${formData.countryCode}${formData.phone}` : "";
      
      // Send contact email
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          phone: fullPhone,
        }
      });

      if (error) throw error;

      // Send welcome SMS if phone number is provided
      if (fullPhone) {
        try {
          await supabase.functions.invoke('send-welcome-sms', {
            body: {
              phone: fullPhone,
              name: formData.name,
            }
          });
        } catch (smsError) {
          console.error("SMS sending failed:", smsError);
          // Don't block form success if SMS fails
        }
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", countryCode: "+91", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              For pricing, course structure, and personalized guidance, please contact 
              us via Email or WhatsApp. We're here to help you start your trading journey.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:shreejitechno45@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">shreejitechno45@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/917874503856"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp / Call</div>
                  <div className="font-medium text-foreground">+91 7874503856</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Expect a response within 24 hours. For urgent queries, 
                  WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-card p-8 rounded-2xl border border-border shadow-medium transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Mobile / WhatsApp Number
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-1 px-3 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors min-w-[100px]"
                    >
                      <span>{countryCodes.find(c => c.code === formData.countryCode)?.flag}</span>
                      <span className="text-sm">{formData.countryCode}</span>
                      <ChevronDown size={14} className="text-muted-foreground" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-50 top-full left-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, countryCode: country.code });
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 hover:bg-accent text-left text-sm"
                          >
                            <span>{country.flag}</span>
                            <span className="text-foreground">{country.code}</span>
                            <span className="text-muted-foreground text-xs">{country.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your interest or questions..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
