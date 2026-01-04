import { CheckCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courseFeatures = [
  "Beginner, Intermediate & Advanced Trading Courses",
  "Long-term Investing & Short-term Trading Strategies",
  "Live & Practical Market Learning Sessions",
  "Technical & Fundamental Analysis Training",
  "Risk Management & Portfolio Building",
  "Real-time Market Practice & Case Studies",
];

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="courses" className="py-20">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Courses & Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Learn Trading the Right Way
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our structured courses are designed to take you from a complete beginner 
              to a confident trader with practical knowledge and hands-on experience.
            </p>

            <ul className="space-y-4 mb-8">
              {courseFeatures.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-secondary rounded-lg border border-border mb-6">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Note:</strong> For pricing and complete course details, 
                please contact us on WhatsApp or Email.
              </p>
            </div>

            <a
              href="https://wa.me/917874503856?text=Hi%2C%20I%20am%20interested%20in%20your%20stock%20market%20courses.%20Please%20share%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              <MessageCircle size={20} />
              Get Course Details
            </a>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Beginner Level</h4>
                      <p className="text-sm text-muted-foreground">Market Basics & Foundation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-medium border border-border ml-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Intermediate Level</h4>
                      <p className="text-sm text-muted-foreground">Technical Analysis & Strategies</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-medium border border-border ml-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Advanced Level</h4>
                      <p className="text-sm text-muted-foreground">Professional Trading & Algo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
