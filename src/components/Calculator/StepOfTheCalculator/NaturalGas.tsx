import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";

function NaturalGas() {
  // Initial value for monthly consumption (defaulting to ~7 cubic feet).
  const [value, setValue] = useState(7);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-4xl font-bold">
            Annual Natural Gas Emissions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="w-[600px] flex flex-col gap-6">
              {/* Monthly Consumption Input */}
              <Label className="text-xl" htmlFor="vehicle">
                Monthly Consumption (cubic feet)
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={20} // Maximum set to allow variations from the average
                step={0.1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 cubic feet</span>
                <span>20 cubic feet</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-lg font-medium text-gray-700">
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
