import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red-light via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">Stock Market Education</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            Master the Stock Market with{" "}
            <span className="text-primary">Shreeji Techno</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up animation-delay-200">
            Professional stock market courses, trading mentorship, and algo trading solutions 
            designed to transform beginners into confident traders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <a
              href="https://wa.me/917874503856?text=Hello%20%F0%9F%91%8B%0AThank%20you%20for%20contacting%20*Shreeji%20Techno*%20%F0%9F%93%88%0A%0AWe%20provide%3A%0A%E2%9C%85%20Stock%20Market%20Courses%0A%E2%9C%85%20Trading%20%26%20Investing%20Guidance%0A%E2%9C%85%20Algo%20Trading%20Solutions%0A%0APlease%20share%3A%0A1)%20Your%20Name%0A2)%20Your%20Experience%20Level%20(Beginner%20%2F%20Intermediate%20%2F%20Advanced)%0A3)%20Your%20Requirement%0A%0AOur%20team%20will%20reply%20shortly."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-large group"
            >
              <MessageCircle size={20} />
              Contact on WhatsApp
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all group"
            >
              Get Course Details
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border opacity-0 animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Practical Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
