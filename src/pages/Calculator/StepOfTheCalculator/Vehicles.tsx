import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import Vehicle from "./Vehicle";

function Vehicles() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-4xl font-bold">
            Vehicle Emissions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="w-[600px] flex flex-col gap-6">
              <Label className="text-xl" htmlFor="vehicle">
                Number of Vehicles
              </Label>
              <Slider
                value={[value]}
                max={10}
                step={1}
                onValueChange={handleChange}
              />
            </div>
            <div className="w-[600px] py-8">
              {[...Array(value)].map((_, index) => (
                <Vehicle key={index} vehicleNum={index + 1} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Vehicles;
