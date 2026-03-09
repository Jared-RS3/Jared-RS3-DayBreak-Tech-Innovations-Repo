import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { CursorGlow } from "./components/CursorGlow";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import Navbar from "./components/Navbar";
import { PageReveal } from "./components/PageReveal";
import { ProcessSection } from "./components/ProcessSection";
import { ResultsSection } from "./components/ResultsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { Services } from "./components/Services";
import { SmoothScroll } from "./components/SmoothScroll";
import { WhyDaybreak } from "./components/WhyDaybreak";

export default function App() {
  return (
    <SmoothScroll>
      <PageReveal />
      <CursorGlow />
      <ScrollProgress />
      <div className="min-h-screen bg-navy-900 text-white">
        <Navbar />
        <main>
          <HomeSection />
          <Services />
          <ResultsSection />
          <ProcessSection />
          <WhyDaybreak />
          <AboutSection />
          <ReviewsSection />
          <FinalCTA />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
