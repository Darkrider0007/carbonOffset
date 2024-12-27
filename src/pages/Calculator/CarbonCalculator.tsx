import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import HeroSection from "../../components/Calculator/HeroSection";
import SmoothScroll from "../../components/SmoothScroll";

const CarbonCalculator: React.FC = () => {
  useEffect(() => {
    // Scroll to the <main> element on the first render
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <main>
          <HeroSection />
        </main>
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default CarbonCalculator;
