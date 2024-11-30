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
import { changeFuelOil } from "../../../store/features/calculator/calculatorSlice";

function FuelOil() {
  const dispatch = useDispatch();
  const fuelOilData = useSelector((state: any) => state.calculator.fueloil);
  const [value, setValue] = useState(83);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    dispatch(changeFuelOil(newValue[0]));
    setValue(newValue[0]);
  };

  useEffect(() => {
    setValue(fuelOilData);
  }, [fuelOilData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-4xl font-bold">
            Annual Carbon Emissions from Fuel Oil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="w-[600px] flex flex-col gap-6">
              {/* Monthly Fuel Oil Consumption Input */}
              <Label className="text-xl" htmlFor="fuel-oil">
                Monthly Consumption (gallons)
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={200} // Maximum allows for above-average consumption
                step={1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 gallons</span>
                <span>200 gallons</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-lg font-medium text-gray-700">
                Current Monthly Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {value && value?.toLocaleString()} gallons
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FuelOil;
