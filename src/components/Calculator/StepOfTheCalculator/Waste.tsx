import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";

function Waste() {
  // Initial value for monthly fuel oil consumption (defaulting to ~83 gallons/month).
  const [value, setValue] = useState(3);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-4xl font-bold">
            Annual Carbon Emissions from Waste
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="w-[600px] flex flex-col gap-6">
              {/* Monthly Fuel Oil Consumption Input */}
              <Label className="text-xl" htmlFor="fuel-oil">
                Number of People in Household
              </Label>
              <Slider
                value={[value]}
                min={1}
                max={14} // Maximum allows for above-average consumption
                step={1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 gallons</span>
                <span>15 gallons</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Waste;
