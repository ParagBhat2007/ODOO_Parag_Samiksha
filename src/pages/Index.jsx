// Update this page (the content is just a fallback if you fail to update the page)

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <InteractiveShowcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
