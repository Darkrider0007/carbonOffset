import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const IndividualCalculator: React.FC = () => {
  useEffect(() => {
    // Scroll to the <main> element on the first render
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div className="w-full flex flex-col items-start justify-center py-20 px-10">
          <div className="text-6xl font-semibold flex md:flex-row md:gap-4">
            <h1 className="text-green-600">Individual</h1>
            <h1>Emissions</h1>
          </div>
          <h1 className="text-green-600 text-6xl font-semibold">Calculator</h1>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndividualCalculator;
