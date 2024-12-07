import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { changeNaturalGas } from "../../../store/features/calculator/calculatorSlice";
import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";

function NaturalGas() {
  const dispatch = useDispatch();
  const naturalGasData = useSelector(
    (state: any) => state.calculator.naturalgas
  );
  const [value, setValue] = useState(7);
  const [showCubicCentimeters, setShowCubicCentimeters] = useState(false); // Toggle for cubic centimeters display

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
    dispatch(changeNaturalGas(newValue[0]));
  };

  const toggleUnitDisplay = () => {
    setShowCubicCentimeters(!showCubicCentimeters);
  };

  const convertToCubicCentimeters = (cubicFeet: number): number =>
    cubicFeet * 28316.8466; // Conversion factor from cubic feet to cubic centimeters

  useEffect(() => {
    setValue(naturalGasData);
  }, [naturalGasData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center items-center justify-center">
            Annual Natural Gas Emissions
            <span className="text-green-600 font-bold">
              <HoverCardOnInfo
                cardTrigger={
                  <FaInfoCircle className="text-lg sm:text-xl text-green-600" />
                }
                cardContent={
                  <div className="text-sm text-gray-700">
                    Natural gas is a fossil fuel used for heating, cooking, and
                    electricity generation. It is primarily composed of methane,
                    a potent greenhouse gas. The average household in the United
                    States consumes about 70 cubic feet of natural gas per day,
                    or 2,100 cubic feet per month.
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Toggle Unit Display */}
              <Label className="text-lg sm:text-xl font-semibold text-gray-700">
                Units
              </Label>
              <button
                type="button"
                onClick={toggleUnitDisplay}
                className="p-3 mx-2 sm:p-4 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200"
              >
                Show in{" "}
                {showCubicCentimeters ? "Cubic Feet" : "Cubic Centimeters"}
              </button>

              {/* Monthly Consumption Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="natural-gas"
              >
                Monthly Consumption (
                {showCubicCentimeters ? "cubic centimeters" : "cubic feet"})
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={20} // Maximum set to allow variations from the average
                step={0.1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-xs sm:text-sm text-gray-600">
                <span>{showCubicCentimeters ? "0 cc" : "0 cubic feet"}</span>
                <span>
                  {showCubicCentimeters
                    ? `${(20 * 28316.8466).toLocaleString()} cc`
                    : "20 cubic feet"}
                </span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Current Monthly Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {showCubicCentimeters
                    ? convertToCubicCentimeters(value).toLocaleString()
                    : value.toFixed(1)}{" "}
                  {showCubicCentimeters ? "cc" : "cubic feet"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default NaturalGas;
