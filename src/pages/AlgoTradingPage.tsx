import { Bot, Zap, Shield, TrendingUp, Clock, Settings, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bull-logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const algoProducts = [
  {
    id: 1,
    title: "Intraday Scalping Bot",
    type: "High Frequency",
    accuracy: "78%",
    description: "Automated scalping strategy for quick intraday profits. Perfect for volatile market conditions with tight risk management.",
    features: [
      "5-15 minute timeframe trading",
      "Auto stop-loss & take-profit",
      "Real-time market scanning",
      "Daily profit targets",
    ],
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    id: 2,
    title: "Swing Trading Algorithm",
    type: "Medium Term",
    accuracy: "82%",
    description: "Capture larger market moves with our swing trading algo. Holds positions for 2-7 days for maximum profit potential.",
    features: [
      "Multi-timeframe analysis",
      "Trend following system",
      "Portfolio diversification",
      "Weekly performance reports",
    ],
    icon: TrendingUp,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Options Premium Bot",
    type: "Options Selling",
    accuracy: "85%",
    description: "Generate consistent monthly income through strategic options selling. Optimized for Nifty and Bank Nifty indices.",
    features: [
      "Iron Condor strategies",
      "Theta decay optimization",
      "Delta neutral adjustments",
      "Margin efficiency focus",
    ],
    icon: Shield,
    color: "bg-primary",
  },
  {
    id: 4,
    title: "Custom Algo Development",
    type: "Enterprise",
    accuracy: "Custom",
    description: "Get a personalized trading algorithm built to your specifications. Full customization with ongoing support and optimization.",
    features: [
      "Strategy consultation",
      "Custom indicator development",
      "Backtesting & optimization",
      "Dedicated support team",
    ],
    icon: Settings,
    color: "bg-violet-500",
  },
];

const stats = [
  { label: "Active Traders", value: "500+" },
  { label: "Trades Executed", value: "1M+" },
  { label: "Avg. Monthly ROI", value: "12%" },
  { label: "Uptime", value: "99.9%" },
];

const AlgoTradingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Shreeji Techno Logo" className="h-10 md:h-12 w-auto object-contain" />
              <span className="font-bold text-lg text-foreground">Shreeji Techno</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Courses
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Bot size={18} className="text-primary" />
            <span className="text-sm font-medium text-primary">Automated Trading Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Algo Trading <span className="text-primary">Systems</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let algorithms work for you 24/7. Our battle-tested trading systems execute trades with precision, 
            eliminating emotional decisions and maximizing profits.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algo Products Grid */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Algo Trading Products</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose from our range of proven algorithmic trading systems or get a custom solution built for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {algoProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${product.color} p-3 rounded-xl text-white`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {product.type}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <BarChart3 size={12} /> {product.accuracy} Accuracy
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <a
                      href={`https://wa.me/917874503856?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Get Details
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Choose Your Strategy</h3>
              <p className="text-muted-foreground text-sm">
                Select from our pre-built algorithms or request a custom solution tailored to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Connect Your Broker</h3>
              <p className="text-muted-foreground text-sm">
                We integrate with major Indian brokers for seamless automated execution of trades.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Earning</h3>
              <p className="text-muted-foreground text-sm">
                Sit back and let the algorithm work. Monitor performance through our dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to automate your trading?
          </h2>
          <p className="text-muted-foreground mb-6">
            Schedule a free demo and see our algorithms in action.
          </p>
          <a
            href="https://wa.me/917874503856?text=Hi,%20I%20want%20to%20schedule%20an%20algo%20trading%20demo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule Free Demo
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default AlgoTradingPage;
