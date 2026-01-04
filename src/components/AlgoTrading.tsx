import { Bot, Zap, Shield, BarChart3, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Execute trades in milliseconds, capturing opportunities instantly.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in stop-loss and position sizing for controlled risk.",
  },
  {
    icon: BarChart3,
    title: "Strategy-Based Trading",
    description: "Customized strategies based on your trading style and goals.",
  },
  {
    icon: Bot,
    title: "24/7 Market Monitoring",
    description: "Automated systems that never miss a trading opportunity.",
  },
];

const AlgoTrading = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="algo" className="py-20 bg-foreground text-background">
      <div className="container" ref={ref}>
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
            Algo Trading
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automated Trading Solutions
          </h2>
          <p className="text-background/70 text-lg">
            Algorithmic trading uses computer programs to execute trades based on predefined 
            strategies, eliminating emotional decisions and maximizing efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-background/5 backdrop-blur-sm p-6 rounded-xl border border-background/10 hover:bg-background/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">
                {benefit.title}
              </h3>
              <p className="text-background/60 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/917874503856?text=Hi%2C%20I%20am%20interested%20in%20Algo%20Trading%20solutions.%20Please%20share%20the%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            <MessageCircle size={20} />
            Contact for Algo Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlgoTrading;
