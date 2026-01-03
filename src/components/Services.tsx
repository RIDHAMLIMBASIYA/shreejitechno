import { TrendingUp, Bot, Users } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Stock Market Courses",
    description: "Comprehensive courses from beginner to advanced level covering technical analysis, fundamental analysis, and trading strategies.",
  },
  {
    icon: Bot,
    title: "Algo Trading Solutions",
    description: "Automated trading systems with strategy-based and risk-managed approaches for consistent market performance.",
  },
  {
    icon: Users,
    title: "Trading & Investing Mentorship",
    description: "Personal guidance and support to help you develop your own trading style and make informed investment decisions.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete stock market education and trading solutions tailored to your goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-large transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
