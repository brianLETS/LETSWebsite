import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// TODO: Remove mock functionality - Replace with real testimonials
const testimonials = [
  {
    quote: "Local Edge transformed our customer service. Their AI chatbot handles 70% of inquiries automatically, and our team can focus on complex issues. ROI in just 4 months.",
    author: 'Sarah Martinez',
    company: 'Martinez Retail Co.',
    role: 'Owner',
  },
  {
    quote: 'We were skeptical about AI, but the team made implementation painless. The predictive analytics tool has improved our inventory management by 45%. Game changer for our bottom line.',
    author: 'David Chen',
    company: 'Chen Logistics',
    role: 'Operations Director',
  },
  {
    quote: "Finally, enterprise-level technology we can actually afford and understand. The automation they built saves us 20 hours a week. Couldn't recommend them more highly.",
    author: 'Jessica Williams',
    company: 'Williams Consulting',
    role: 'Founder & CEO',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        <div className="relative">
          <div className="glass-card p-12 relative overflow-hidden" data-testid="testimonial-card">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed italic" data-testid="testimonial-quote">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 ring-2 ring-primary/30">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonials[currentIndex].author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold" data-testid="testimonial-author">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-muted-foreground" data-testid="testimonial-company">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                  data-testid={`dot-testimonial-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
