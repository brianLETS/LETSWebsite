import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingPortal from '@/components/LoadingPortal';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Solutions from '@/components/Solutions';
import FounderBios from '@/components/FounderBios';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AIFaqAccordion from '@/components/AIFaqAccordion';
import ZeroRiskGuarantee from '@/components/ZeroRiskGuarantee';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyCtaButton from '@/components/StickyCtaButton';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <LoadingPortal />
      <Navigation />
      
      <main>
        <Hero />
        <StatsBar />
        <Solutions />
        <FounderBios />
        <TestimonialsCarousel />
        <AIFaqAccordion />
        <ZeroRiskGuarantee />
        <ContactSection />
      </main>

      <Footer />
      <StickyCtaButton />
    </div>
  );
}
