import Navbar from "../components/Navbar";
import mainbg from "../assets/calculator/mainbg.png";
import subbg from "../assets/calculator/subbg.png";
import curve from "../assets/home/curve.png";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import Vehicle from "../components/Calculator/Vehicles";
import NaturalGas from "../components/Calculator/NaturalGas";
import Electricity from "../components/Calculator/Electricity";
import FuelOil from "../components/Calculator/FuelOil";
import Waste from "../components/Calculator/Waste";
import { Button } from "../components/ui/button";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import UserContext from "../context/UserContext";
import { AlertDialogDemo } from "../components/AleartBox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import CarbonOffsetCalculator from "../components/Calculator/Calculator";
import { getTokenData } from "../api/token";
import Newsletter from "../components/Newsletter";

const factors = ["Vehicle", "Natural Gas", "Electricity", "Fuel Oil", "Waste"];

const emissionFactorVehicle = 19.6;
const emissionFactorNaturalGas = 11.7;
const emissionFactorElectricity = 0.000417;
const emissionFactorFuelOil = 22.61;
const emissionFactorWaste = 692;

const naturalGasConversion = 10.23;

interface CalculateTotalCO2Props {
  vehicleCO2: number;
  naturalGasCO2: number;
  electricityCO2: number;
  fuelOilCO2: number;
  wasteCO2: number;
}

const calculateTotalCO2 = ({
  vehicleCO2,
  naturalGasCO2,
  electricityCO2,
  fuelOilCO2,
  wasteCO2,
}: CalculateTotalCO2Props): number => {
  const totalEmissions =
    vehicleCO2 * emissionFactorVehicle +
    (naturalGasCO2 / naturalGasConversion) * emissionFactorNaturalGas +
    electricityCO2 * emissionFactorElectricity +
    fuelOilCO2 * emissionFactorFuelOil +
    wasteCO2 * emissionFactorWaste;
  return parseFloat(totalEmissions.toFixed(2));
};

const calculateTotalCost = async (co2: number): Promise<number> => {
  try {
    const res = await getTokenData();
    const tokenConversion = res.data.tokenPerTon;
    return parseFloat((co2 * tokenConversion).toFixed(2));
  } catch (error) {
    console.error("Error getting token data:", error);
    throw error;
  }
};

const CarbonCalculator = () => {
  const [totalCO2, setTotalCO2] = useState(0.0);
  const [totalCost, setTotalCost] = useState(0.0);
  const [vehicleCO2, setVehicleCO2] = useState(0.0);
  const [naturalGasCO2, setNaturalGasCO2] = useState(0.0);
  const [electricityCO2, setElectricityCO2] = useState(0.0);
  const [fuelOilCO2, setFuelOilCO2] = useState(0.0);
  const [wasteCO2, setWasteCO2] = useState(0);
  const [index, setIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedin(!!user);
  }, [user]);

  useEffect(() => {
    const func = async () => {
      const co2 = calculateTotalCO2({
        vehicleCO2,
        naturalGasCO2,
        electricityCO2,
        fuelOilCO2,
        wasteCO2,
      });
      setTotalCO2(co2);
      const cost = await calculateTotalCost(co2);
      setTotalCost(cost);
    };
    func();
  }, [vehicleCO2, naturalGasCO2, electricityCO2, fuelOilCO2, wasteCO2]);

  const handleCalculate = () => {
    if (!isLoggedin) {
      alert("Please login to continue");
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setVehicleCO2(0);
    setNaturalGasCO2(0);
    setElectricityCO2(0);
    setFuelOilCO2(0);
    setWasteCO2(0);
    setTotalCO2(0);
    setTotalCost(0);
    setIsSubmitted(false);
    setIndex(0);

    localStorage.removeItem("numVehicles");
    localStorage.removeItem("vehicles");
    localStorage.removeItem("fuelOilMonthlyConsumption");
    localStorage.removeItem("milesPerYear");
    localStorage.removeItem("fuelEfficiency");
    localStorage.removeItem("monthlyConsumption");
    localStorage.removeItem("electricityMonthlyConsumption");
    localStorage.removeItem("wasteNumberOfPeople");
    window.location.reload();
  };

  const location = useLocation();

  const [selectedCalculator, setSelectedCalculator] = useState("carbonOffset");

  useEffect(() => {
    if (location.state && location.state.from === "/calculator") {
      setSelectedCalculator("existing");
    }
  }, []);

  return (
    <div>
      <Navbar />
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
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          Individual Emissions Calculator
        </h1>
        <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
      </div>

      {/* Comprehensive User Guide Section */}
      <div className="w-full md:w-[80%] mx-auto my-10 p-5 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Comprehensive User Guide
        </h2>
        <div className="space-y-4">
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              1. Introduction to Carbon Footprint
            </h3>
            <p className="text-gray-600">
              A carbon footprint measures the total greenhouse gases (GHGs)
              generated by our actions. It is often measured in metric tons of
              carbon dioxide (CO2e) per year. Key sources include energy use,
              transportation, and waste. Understanding and managing your carbon
              footprint can help you reduce your environmental impact.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              2. How to Use the Carbon Footprint Calculator
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                Select the type of calculator you want to use:
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Carbon Offset Calculator:</strong> Calculates the
                    emissions you need to offset based on your activities.
                  </li>
                  <li>
                    <strong>Emissions Calculator:</strong> Breaks down your
                    total emissions from various activities.
                  </li>
                </ul>
              </li>
              <li>
                Enter values for each factor (Vehicle, Natural Gas, Electricity,
                Fuel Oil, Waste). Ensure accurate inputs to get the most precise
                results.
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Vehicle:</strong> Include annual miles driven and
                    fuel efficiency (MPG).
                  </li>
                  <li>
                    <strong>Natural Gas:</strong> Enter monthly natural gas
                    usage in cubic feet or kilowatt-hours.
                  </li>
                  <li>
                    <strong>Electricity:</strong> Input monthly electricity
                    usage in kilowatt-hours.
                  </li>
                  <li>
                    <strong>Fuel Oil:</strong> Specify fuel oil usage if
                    applicable.
                  </li>
                  <li>
                    <strong>Waste:</strong> Estimate your waste production,
                    based on the number of people in your household.
                  </li>
                </ul>
              </li>
            </ol>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              3. Understanding the Emission Factors
            </h3>
            <p className="text-gray-600">
              Each factor (Vehicle, Natural Gas, Electricity, etc.) has a
              specific emission factor, which is used to calculate the CO2
              emissions based on your inputs.
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2">
              <li>
                <strong>Vehicle Emissions:</strong> Calculated based on the fuel
                efficiency and distance traveled.
              </li>
              <li>
                <strong>Natural Gas Emissions:</strong> Considered for heating
                and cooking, converted based on your usage.
              </li>
              <li>
                <strong>Electricity Emissions:</strong> Vary depending on the
                electricity source. Renewable energy sources have a lower
                emission factor compared to coal or gas.
              </li>
              <li>
                <strong>Fuel Oil Emissions:</strong> Common in regions using oil
                for heating. High emission factor due to its density and carbon
                content.
              </li>
              <li>
                <strong>Waste Emissions:</strong> Include CO2 from decomposing
                organic matter in landfills.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              4. Tips for Reducing Your Carbon Footprint
            </h3>
            <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2">
              <li>
                <strong>Transportation:</strong> Opt for public transportation,
                biking, or walking. Consider carpooling or using electric
                vehicles. Reduce air travel where possible.
              </li>
              <li>
                <strong>Energy Consumption:</strong> Use energy-efficient
                appliances and LED lighting. Install a programmable thermostat
                to manage heating and cooling. Consider renewable energy options
                like solar or wind power.
              </li>
              <li>
                <strong>Waste Management:</strong> Reduce, reuse, and recycle
                materials to minimize waste. Compost organic waste to reduce
                methane emissions from landfills.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              5. Offsetting Your Carbon Footprint
            </h3>
            <p className="text-gray-600">
              After calculating your total emissions, you can offset them by
              investing in projects like:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2">
              <li>Reforestation and afforestation projects.</li>
              <li>Renewable energy projects (solar, wind).</li>
              <li>Methane capture and utilization projects.</li>
            </ul>
            <p className="text-gray-600">
              Use the calculator to estimate the cost of offsetting your
              emissions. The cost is calculated based on the total CO2 produced
              and the price per ton of carbon offsets.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              6. Frequently Asked Questions (FAQs)
            </h3>
            <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2">
              <li>
                <strong>How accurate is the calculator?</strong> The calculator
                provides estimates based on average emission factors. Actual
                emissions may vary depending on specific factors like energy
                source, vehicle efficiency, and more.
              </li>
              <li>
                <strong>Can I save my data and use it later?</strong> Yes, the
                calculator saves data locally in your browser storage. Make sure
                to keep your data private and secure.
              </li>
              <li>
                <strong>What is a carbon offset?</strong> A carbon offset is a
                reduction in GHG emissions made to compensate for emissions
                produced elsewhere. Offsetting can be done through various
                environmental projects.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-gray-700">
              7. Final Steps
            </h3>
            <p className="text-gray-600">
              After reviewing your total emissions, you can take action by
              reducing your footprint and considering offset options. Track your
              progress and revisit the calculator regularly to update your data
              and see improvements.
            </p>
          </section>
        </div>
      </div>

      {/* Dropdown for Selecting Calculator */}
      <div className="w-full md:w-[80%] mx-auto my-10">
        <select
          value={selectedCalculator}
          onChange={(e) => setSelectedCalculator(e.target.value)}
          className="px-4 py-2 border-2 rounded-lg w-full md:w-1/2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-green-500 hover:ring-4 hover:ring-green-300 transition-all"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg"><path d="M30 50 L70 90 L110 50" stroke="black" stroke-width="5" fill="none"/></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(100% - 10px) center",
            paddingRight: "30px",
            appearance: "none",
            border: "1px solid #d1d5db",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <option value="carbonOffset">Carbon Offset Calculator</option>
          <option value="existing">Emissions Calculator</option>
        </select>
      </div>

      {/* Conditionally Render Based on Selected Calculator */}
      {selectedCalculator === "carbonOffset" ? (
        <div className="w-full md:w-[80%] my-10 p-5 mx-auto">
          <CarbonOffsetCalculator />
        </div>
      ) : (
        <div className="p-5 md:p-10 flex flex-col gap-12 md:gap-16 items-center bg-gray-50">
          <h1 className="text-xl md:text-3xl w-full md:w-[80%] text-center font-semibold text-gray-700">
            Complete Each Step of the Emissions Calculator
          </h1>

          <div className="w-full md:w-[80%] bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-wrap justify-center p-6 md:px-20 border-b border-gray-300 bg-green-100">
              {!isSubmitted &&
                factors.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndex(idx)}
                    className={`px-4 py-2 text-sm md:text-base my-1 mx-2 md:mx-3 rounded-full border-2 shadow-sm transition-transform transform hover:scale-105 ${
                      factors[index] === item
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-white border-gray-400 text-gray-700 hover:bg-green-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              <AlertDialogDemo
                triggerText={
                  <GrPowerReset className="cursor-pointer text-gray-500" />
                }
                triggerTextStyle="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                headingText="Are you sure you want to reset the calculator?"
                contentText="You will lose all the data you have entered."
                submitBtn="Yes"
                submitBtnNavigation={handleReset}
              />
            </div>

            <div
              className={`w-full flex flex-col bg-gray-100 md:flex-row p-6 md:p-10 gap-10 md:gap-16 ${
                isSubmitted && "items-center justify-center"
              }`}
            >
              {!isSubmitted && (
                <div className="w-full md:w-1/2 flex flex-col  items-start gap-8">
                  {index === 0 && <Vehicle addInput={setVehicleCO2} />}
                  {index === 1 && <NaturalGas addInput={setNaturalGasCO2} />}
                  {index === 2 && <Electricity addInput={setElectricityCO2} />}
                  {index === 3 && <FuelOil addInput={setFuelOilCO2} />}
                  {index === 4 && <Waste addInput={setWasteCO2} />}
                </div>
              )}

              <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
                {isSubmitted ? (
                  <div className="w-full bg-green-50 p-6 rounded-lg shadow-md text-center">
                    <h1 className="text-xl md:text-2xl font-bold text-green-700">
                      Your Emissions
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-700">
                      Tonnes CO2: <span className="font-bold">{totalCO2}</span>
                    </p>
                    <p className="uppercase text-xs font-semibold tracking-widest text-gray-500">
                      Emission total tokens
                    </p>
                    <div className="bg-white px-4 py-3 rounded-md border border-gray-300 text-center shadow-sm mt-3">
                      <p className="font-semibold text-lg">{totalCost}</p>
                    </div>
                    <Button
                      onClick={() => navigate("/offsetNow")}
                      className="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 text-white font-bold rounded-md shadow-md my-5"
                      disabled={totalCO2 === 0}
                    >
                      Offset Now
                    </Button>
                  </div>
                ) : (
                  index === 4 &&
                  (!isLoggedin ? (
                    <AlertDialogDemo
                      triggerText="Login to calculate"
                      triggerTextStyle="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 text-white font-bold rounded-md shadow-md"
                      headingText="Login to calculate"
                      contentText="You need to login to calculate your emissions"
                      submitBtn="Yes"
                      submitBtnNavigation={() => {
                        navigate("/login");
                      }}
                      to={`/login`}
                      state={{ from: "/calculator" }}
                    />
                  ) : (
                    <Button
                      onClick={handleCalculate}
                      className="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 text-white font-bold rounded-md shadow-md"
                    >
                      Calculate
                    </Button>
                  ))
                )}

                {!isSubmitted && (
                  <div className="flex justify-between w-full">
                    <Button
                      onClick={() => setIndex(index - 1)}
                      disabled={index === 0}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 w-full md:w-auto text-white font-bold rounded-md flex items-center justify-center shadow-md"
                    >
                      <FaLeftLong className="mr-2" /> Prev
                    </Button>

                    <Button
                      onClick={() => setIndex(index + 1)}
                      disabled={index === 4}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 w-full md:w-auto text-white font-bold rounded-md flex items-center justify-center shadow-md"
                    >
                      Next <FaRightLong className="ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calculation methods */}
      <div
        style={{
          backgroundImage: `url(${subbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
        }}
        className="px-5 md:px-48 py-10 flex items-center relative"
      >
        <div className="bg-white w-full md:w-[40%] flex flex-col gap-3 p-6">
          <h1 className="font-semibold text-xs uppercase">
            Calculation Methods
          </h1>
          <h1 className="text-xl md:text-3xl">
            The data for this calculator comes from the EPA and U.S. Department
            of Energy. See our Calculation Methods page for more information.
          </h1>
          <Link
            to={"/calculator/calculationMethods"}
            className="bg-green-600 hover:bg-green-700 w-40 py-2 flex justify-center items-center rounded-full font-semibold text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CarbonCalculator;
