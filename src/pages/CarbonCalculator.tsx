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
import { useNavigate } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";

const factors = ["Vehicle", "Natural Gas", "Electricity", "Fuel Oil", "Waste"];

const emissionFactorVehicle = 19.6;
const emissionFactorNaturalGas = 11.7;
const emissionFactorElectricity = 0.000417;
const emissionFactorFuelOil = 22.61;
const emissionFactorWaste = 692;

const naturalGasConversion = 10.23;
const tokenConversion = 0.1;

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

const calculateTotalCost = (co2: number): number => {
  return parseFloat((co2 * tokenConversion).toFixed(2));
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
    const co2 = calculateTotalCO2({
      vehicleCO2,
      naturalGasCO2,
      electricityCO2,
      fuelOilCO2,
      wasteCO2,
    });
    setTotalCO2(co2);
    setTotalCost(calculateTotalCost(co2));
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
  };

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

      {/* Calculator section */}
      <div className="p-5 md:p-10 flex flex-col gap-10 md:gap-20 items-center">
        <h1 className="text-lg md:text-2xl w-full md:w-[80%] text-center">
          Please complete each step of the emissions calculator that is relevant
          to your lifestyle, using actual (or estimated) annual operational
          data.
        </h1>

        <div className="w-full md:w-[80%] bg-[#EBFFEA] rounded-xl">
          <div className="flex flex-wrap justify-center p-5 md:px-20 border-b border-black">
            {!isSubmitted &&
              factors.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIndex(idx);
                  }}
                  className={`px-3 py-2 text-xs md:px-5 md:py-2 my-1 ${factors[index] === item
                    ? "bg-[#16A34A] border-white text-white"
                    : "bg-white border-black"
                    } rounded-full border uppercase shadow-xl mx-1`}
                >
                  {item}
                </button>
              ))}
            <AlertDialogDemo
              triggerText={<GrPowerReset className="cursor-pointer" />}
              triggerTextStyle="bg-grey-600 hover:bg-grey-500 p-2 rounded-full text-black font-bold rounded-md"
              headingText="Are you sure you want to reset the calculator?"
              contentText="You will lose all the data you have entered"
              submitBtn="Yes"
              submitBtnNavigation={handleReset}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row p-5 md:p-16">
            {!isSubmitted && (
              <div className="w-full md:w-1/2">
                {index === 0 && <Vehicle addInput={setVehicleCO2} />}
                {index === 1 && <NaturalGas addInput={setNaturalGasCO2} />}
                {index === 2 && <Electricity addInput={setElectricityCO2} />}
                {index === 3 && <FuelOil addInput={setFuelOilCO2} />}
                {index === 4 && <Waste addInput={setWasteCO2} />}
              </div>
            )}

            <div className="w-full md:w-1/2 flex flex-col gap-3 md:pl-20 items-center md:items-end">
              {isSubmitted && (
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-green-600">
                    Your Emissions
                  </h1>
                  <div className="flex flex-col gap-3">
                    <h1 className="my-3 text-center">
                      Tonnes CO2:{" "}
                      <span className="font-bold">{totalCO2}</span>{" "}
                    </h1>
                    <h1 className="uppercase text-xs font-semibold tracking-widest text-center">
                      Emission total tokens
                    </h1>
                    <div className="bg-white px-2 w-48 py-3 rounded-md border border-black text-center">
                      <h1 className="font-semibold">{totalCost}</h1>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-5 w-full">
                {!isSubmitted && index === 4 && (
                  !isLoggedin ? (
                    <AlertDialogDemo
                      triggerText="Login to calculate"
                      triggerTextStyle="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 md:py-8 text-white font-bold rounded-md"
                      headingText="Login to calculate"
                      contentText="You need to login to calculate your emissions"
                      submitBtn="Yes"
                      submitBtnNavigation={() => {
                        navigate("/login");
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleCalculate}
                      className="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 md:py-8 text-white font-bold rounded-md"
                    >
                      Calculate
                    </Button>
                  )
                )}

                {isSubmitted && (
                  <Button className="bg-green-600 hover:bg-green-500 w-full md:w-48 py-2 md:py-8 text-white font-bold rounded-md"
                    onClick={() => navigate("/offsetNow")}
                  >
                    Offset Now
                  </Button>
                )}

                {!isSubmitted && (
                  <div className="flex justify-between gap-5 w-full">
                    <Button
                      onClick={() => {
                        if (index > 0) {
                          setIndex(index - 1);
                        }
                      }}
                      disabled={index === 0}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 md:py-8 w-full md:w-auto text-white font-bold rounded-md flex items-center justify-center"
                    >
                      <FaLeftLong style={{ marginRight: "8px" }} /> Prev
                    </Button>

                    <Button
                      onClick={() => {
                        if (index < 4) {
                          setIndex(index + 1);
                        }
                      }}
                      disabled={index === 4}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 md:py-8 w-full md:w-auto text-white font-bold rounded-md flex items-center justify-center"
                    >
                      Next <FaRightLong style={{ marginLeft: "8px" }} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <button className="bg-green-600 w-40 py-2 rounded-full font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarbonCalculator;
