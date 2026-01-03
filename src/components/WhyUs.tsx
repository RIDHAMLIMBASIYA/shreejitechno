import { BookOpen, Target, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "Simple Teaching Approach",
    description: "Complex concepts explained in easy-to-understand language that anyone can follow.",
  },
  {
    icon: Target,
    title: "Practical Market Knowledge",
    description: "Learn with real market examples and hands-on practice, not just theory.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    description: "One-on-one mentorship to address your specific questions and trading style.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Continuous support even after course completion to help you grow as a trader.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Shreeji Techno?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to your success with a teaching methodology that prioritizes 
            practical knowledge and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
