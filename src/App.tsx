import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/HomeSection";
import Navbar from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import { ResultsSection } from "./components/ResultsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { Services } from "./components/Services";
import { TrustSection } from "./components/TrustSection";
import { WhyDaybreak } from "./components/WhyDaybreak";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <Navbar />
      <main>
        <HomeSection />
        <TrustSection />
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
  );
}
