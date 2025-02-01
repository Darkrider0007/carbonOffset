import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { EmissionsCalculator } from "./EmissionsCalculator";
import SmoothScroll from "../../components/SmoothScroll";

const IndividualCalculator: React.FC = () => {
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
          <div className="w-full flex flex-col items-start justify-center py-6 px-4 md:py-10 md:px-8 lg:py-20 lg:px-10">
            <div className="text-3xl md:text-4xl lg:text-6xl font-semibold flex flex-col md:flex-row md:gap-4">
              <h1 className="text-green-600">Individual</h1>
              <h1>Emissions</h1>
            </div>
            <h1 className="text-green-600 text-3xl md:text-4xl lg:text-6xl font-semibold">
              Calculator
            </h1>
          </div>

          <div className="w-full flex flex-col items-start justify-center pt-6 pb-4 px-4 bg-green-600 md:pt-10 md:pb-6 md:px-8 lg:pt-20 lg:pb-10 lg:px-10">
            <div className="text-2xl md:text-3xl lg:text-5xl font-semibold flex flex-col md:flex-row md:gap-4">
              <h1 className="text-white">User Guide</h1>
            </div>
            <div className="text-base md:text-lg lg:text-2xl text-white font-medium flex flex-col w-full md:w-4/5 p-4 md:p-6 lg:p-10">
              <h1 className="mb-4">Introduction to Carbon Footprint</h1>
              <p>
                A carbon footprint measures the total greenhouse gases (GHGs)
                generated by our actions. It is often measured in metric tons of
                carbon dioxide (CO2e) per year. Key sources include energy use,
                transportation, and waste. Understanding and managing your
                carbon footprint can help you reduce your environmental impact.
              </p>
            </div>
            {/* <div className="w-full flex justify-center md:justify-end">
              <button className="bg-black text-white font-semibold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-10 rounded-xl">
                More
              </button>
            </div> */}
          </div>

          <div className="w-full flex flex-col items-center justify-center py-6 px-4 md:py-10 md:px-8 lg:py-20 lg:px-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
              Complete Each Step of the Emissions Calculator
            </h1>

            <div className="w-full flex flex-col mt-4 md:mt-6 items-start justify-center pt-4 pb-4 px-4 md:pt-6 md:pb-6 md:px-6 lg:pt-10 lg:pb-10 lg:px-10">
              <EmissionsCalculator />
            </div>
          </div>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default IndividualCalculator;
