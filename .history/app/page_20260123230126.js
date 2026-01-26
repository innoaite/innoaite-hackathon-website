import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Sections/Hero';
import Marquee from '@/components/Sections/Marquee';
import About from '@/components/Sections/About';
import Features from '@/components/Sections/Features';
import CTA from '@/components/Sections/CTA';
import Contact from '@/components/Sections/Contact';
import Footer from '@/components/Sections/Footer';
import SiteBanner from '@/components/Sections/SiteBanner';

export default function Home() {
  return (
    <Layout>
      <SiteBanner />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </Layout>
  );
}