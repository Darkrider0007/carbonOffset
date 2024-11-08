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
import { useToast } from "../hooks/use-toast";
import { AddToWallet } from "../api/stripe/checkout";
import ComprehensiveUserGuide from "../components/ComprehensiveUserGuide";
import { Card, CardHeader } from "../components/ui/card";

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

  const [userType, setUserType] = useState("");

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;
  const { toast } = useToast();

  const navigate = useNavigate();

  const handleOffsetNow = async () => {
    try {
      const token = await getTokenData();
      const tokenPrice = token.data.tokenPrice;

      const cost = tokenPrice * totalCost;

      if (cost === 0) {
        toast({
          title: "Error",
          description: "Please calculate your emissions first",
          variant: "destructive",
        });
        return;
      }

      const res = await AddToWallet({ amount: cost, tokens: totalCost });

      console.log(res);
    } catch (error) {
      toast({
        title: "Error",
        description: "Error in offsetting your emissions",
        variant: "destructive",
      });
    }
  };

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
      <ComprehensiveUserGuide />

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
        <>
          {userType == "" ? (
            <div className="p-40 bg-gray-50">
              <h1 className="text-2xl md:text-3xl font-bold  text-gray-700 mb-6">
                Please select the type of worker you are to calculate your
                emissions
              </h1>
              <div className="flex flex-row gap-20 w-full items-center justify-center">
                <Card
                  onClick={() => setUserType("onsite")}
                  className="w-full md:w-1/4 p-5 md:p-10 bg-green-500 text-white text-center cursor-pointer transition-transform transform hover:scale-105"
                >
                  <CardHeader className="text-2xl font-semibold">
                    <p>Onsite</p>
                    <p>Workers</p>
                  </CardHeader>
                </Card>
                <Card
                  onClick={() => setUserType("remote")}
                  className="w-full md:w-1/4 p-5 md:p-10 bg-green-500 text-white text-center cursor-pointer transition-transform transform hover:scale-105"
                >
                  <CardHeader className="text-2xl font-semibold">
                    Traveling Workers
                  </CardHeader>
                </Card>
              </div>
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
                      {index === 1 && (
                        <NaturalGas addInput={setNaturalGasCO2} />
                      )}
                      {index === 2 && (
                        <Electricity addInput={setElectricityCO2} />
                      )}
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
                          Tonnes CO2:{" "}
                          <span className="font-bold">{totalCO2}</span>
                        </p>
                        <p className="uppercase text-xs font-semibold tracking-widest text-gray-500">
                          Emission total tokens
                        </p>
                        <div className="bg-white px-4 py-3 rounded-md border border-gray-300 text-center shadow-sm mt-3">
                          <p className="font-semibold text-lg">{totalCost}</p>
                        </div>
                        <Button
                          onClick={handleOffsetNow}
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
        </>
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
