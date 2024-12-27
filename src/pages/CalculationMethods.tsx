import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/calculator/mainbg.png";
import SmoothScroll from "../components/SmoothScroll";

function CalculationMethods() {
  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <div className="min-h-screen">
          {/* Background section */}
          <div
            style={{
              backgroundImage: `url(${mainbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              width: "100%",
            }}
            className="flex items-center justify-center relative"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center shadow-md">
              Calculation Methods
            </h1>
            <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
          </div>

          {/* Basic Calculation Section */}
          <div className="px-6 py-12 bg-green-100">
            <h2 className="text-2xl font-bold text-green-700 mb-6 border-b-2 border-green-500 pb-2">
              Basic Calculation Explanation
            </h2>
            <p className="text-lg mb-6 text-green-900">
              The first image outlines a simplified carbon offset calculation
              for different types of workers (remote, onsite, traveling) and
              additional emissions. It uses predefined categories that assign a
              specific number of offset units based on the worker's role and
              activity level.
            </p>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Categories of Workers and Emission Factors:
              </h3>
              <ul className="list-disc list-inside text-green-900">
                <li>
                  <strong>Remote Worker:</strong> Smaller carbon footprint. Base
                  offset unit: 1 acre of forest.
                </li>
                <li>
                  <strong>Onsite Worker:</strong> Needs 2 acres for neutrality
                  due to commuting and workplace energy use.
                </li>
                <li>
                  <strong>Traveling Worker:</strong> Highest emissions, requires
                  4 acres for neutrality.
                </li>
                <li>
                  <strong>Additional Emissions:</strong> Extra emissions per ton
                  of CO₂ require additional offset units.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Offset Purchase Options:
              </h3>
              <p className="text-green-900">
                <strong>Option 1:</strong> One-time investment of 250 UNY per
                offset unit.
                <br />
                <strong>Option 2:</strong> Recurring yearly cost of 30 UNY per
                offset unit.
                <br />
                <strong>Option 3:</strong> Monthly recurring cost of 3 UNY per
                offset unit.
              </p>
            </div>
          </div>

          {/* Detailed Calculation Section */}
          <div className="px-6 py-12 bg-green-50">
            <h2 className="text-2xl font-bold text-green-700 mb-6 border-b-2 border-green-500 pb-2">
              Detailed Calculation Explanation
            </h2>
            <p className="text-lg mb-6 text-green-900">
              The remaining images provide a detailed breakdown of various
              emissions sources, such as vehicle emissions, natural gas usage,
              electricity consumption, fuel oil, propane, and waste. Here's a
              detailed explanation:
            </p>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                1. Vehicle Emissions
              </h3>
              <p className="text-green-900 mb-4">
                <strong>Formula:</strong> (Miles per Year / Fuel Efficiency) ×
                Emission Factor
                <br />
                For example, driving 11,398 miles per year at a fuel efficiency
                of 21.6 miles/gallon and an emission factor of 19.6 lbs
                CO₂/gallon results in:
                <strong>
                  {" "}
                  527.69 gallons/year × 19.6 lbs CO₂/gallon = 10,334.7 lbs
                  CO₂/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                2. Natural Gas Emissions
              </h3>
              <p className="text-green-900">
                <strong>Formula:</strong> (Monthly Consumption × Conversion to
                Therms) × 12 × Emission Factor
                <br />
                With a monthly consumption of 5,500 cubic feet of gas and a
                conversion factor of 10.23 cubic feet/therm:
                <strong>
                  {" "}
                  644.44 therms × 11.7 lbs CO₂/therm × 12 months = 75,398.8 lbs
                  CO₂/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                3. Electricity Emissions
              </h3>
              <p className="text-green-900">
                <strong>Formula:</strong> Monthly Consumption × 12 × Emission
                Factor
                <br />
                For a monthly consumption of 943 kWh and an emission factor of
                0.000417 metric tons CO₂/kWh:
                <strong>
                  {" "}
                  943 kWh × 12 × 0.000417 metric tons CO₂/kWh = 4.71 metric
                  tons/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                4. Fuel Oil Emissions
              </h3>
              <p className="text-green-900">
                <strong>Formula:</strong> Monthly Consumption × 12 × Emission
                Factor
                <br />
                With 46 gallons/month and 22.61 lbs CO₂/gallon, the result is:
                <strong>
                  {" "}
                  46 gallons × 12 × 22.61 lbs CO₂/gallon = 12,490.32 lbs
                  CO₂/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                5. Propane Emissions
              </h3>
              <p className="text-green-900">
                <strong>Formula:</strong> Monthly Consumption × 12 × Emission
                Factor
                <br />
                With a monthly usage of 39 gallons and an emission factor of
                12.43 lbs CO₂/gallon:
                <strong>
                  {" "}
                  39 gallons × 12 × 12.43 lbs CO₂/gallon = 5,811.48 lbs
                  CO₂/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                6. Waste Emissions
              </h3>
              <p className="text-green-900">
                <strong>Formula:</strong> Emission Factor × Number of People
                <br />
                For 1 person, waste emissions are:
                <strong>
                  {" "}
                  692 lbs CO₂/year/person × 1 = 692 lbs CO₂/year.
                </strong>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                7. Total CO₂ Emissions (Example Calculation)
              </h3>
              <p className="text-green-900">
                The total CO₂ emissions from all sources are:
                <ul className="list-disc list-inside">
                  <li>Vehicle Emissions: 10,334.7 lbs CO₂/year</li>
                  <li>Natural Gas Emissions: 75,398.8 lbs CO₂/year</li>
                  <li>Electricity Emissions: 10,411.52 lbs CO₂/year</li>
                  <li>Fuel Oil Emissions: 12,490.32 lbs CO₂/year</li>
                  <li>Propane Emissions: 5,811.48 lbs CO₂/year</li>
                  <li>Waste Emissions: 692 lbs CO₂/year</li>
                </ul>
                <strong>
                  Total CO₂ Emissions = 115,138.82 lbs CO₂/year (52.3 metric
                  tons CO₂/year).
                </strong>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default CalculationMethods;
