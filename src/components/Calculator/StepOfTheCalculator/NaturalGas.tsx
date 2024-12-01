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

function NaturalGas() {
  const dispatch = useDispatch();
  const naturalGasData = useSelector(
    (state: any) => state.calculator.naturalgas
  );
  const [value, setValue] = useState(7);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
    dispatch(changeNaturalGas(newValue[0]));
  };

  useEffect(() => {
    setValue(naturalGasData);
  }, [naturalGasData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Annual Natural Gas Emissions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Monthly Consumption Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="vehicle"
              >
                Monthly Consumption (cubic feet)
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={20} // Maximum set to allow variations from the average
                step={0.1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-xs sm:text-sm text-gray-600">
                <span>0 cubic feet</span>
                <span>20 cubic feet</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Current Monthly Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {value.toFixed(1)} cubic feet
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
