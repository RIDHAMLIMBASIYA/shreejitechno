import { BookOpen, TrendingUp, BarChart3, Target, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/bull-logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    title: "Stock Market Fundamentals",
    level: "Beginner",
    duration: "4 Weeks",
    price: "₹4,999",
    description: "Master the basics of stock market investing. Learn about market structure, reading charts, and fundamental analysis.",
    features: [
      "Understanding stock exchanges",
      "How to read stock charts",
      "Fundamental analysis basics",
      "Building your first portfolio",
    ],
    icon: BookOpen,
    color: "bg-emerald-500",
  },
  {
    id: 2,
    title: "Technical Analysis Mastery",
    level: "Intermediate",
    duration: "6 Weeks",
    price: "₹7,999",
    description: "Deep dive into technical analysis with candlestick patterns, indicators, and chart patterns for precise entries.",
    features: [
      "Candlestick pattern recognition",
      "Moving averages & RSI",
      "Support & resistance trading",
      "Risk management strategies",
    ],
    icon: BarChart3,
    color: "bg-primary",
  },
  {
    id: 3,
    title: "Options Trading Pro",
    level: "Advanced",
    duration: "8 Weeks",
    price: "₹12,999",
    description: "Learn advanced options strategies including spreads, straddles, and iron condors for consistent profits.",
    features: [
      "Options Greeks mastery",
      "Advanced spread strategies",
      "Volatility trading",
      "Portfolio hedging techniques",
    ],
    icon: Target,
    color: "bg-amber-500",
  },
  {
    id: 4,
    title: "Complete Trading Mentorship",
    level: "All Levels",
    duration: "12 Weeks",
    price: "₹24,999",
    description: "1-on-1 mentorship program with live trading sessions, personalized feedback, and lifetime support.",
    features: [
      "Personal trading mentor",
      "Live market sessions",
      "Customized trading plan",
      "Lifetime community access",
    ],
    icon: Users,
    color: "bg-violet-500",
  },
];

const CoursesPage = () => {
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
              <Link to="/algo-trading" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Algo Trading
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stock Market <span className="text-primary">Courses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your trading journey with our comprehensive courses designed for all skill levels. 
            Learn from industry experts and gain practical market knowledge.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.id}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${course.color} p-3 rounded-xl text-white`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {course.level}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} /> {course.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <a
                      href={`https://wa.me/917874503856?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Not sure which course is right for you?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get a free consultation with our experts to find the perfect learning path.
          </p>
          <a
            href="https://wa.me/917874503856?text=Hi,%20I%20need%20help%20choosing%20the%20right%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default CoursesPage;
