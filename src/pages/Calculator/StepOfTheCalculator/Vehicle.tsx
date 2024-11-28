import React, { useState } from "react";
import { Car, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";

interface VehicleProps {
  vehicleNum: number;
  totalVehicles?: number;
  onVehicleCountChange?: (action: "increment" | "decrement") => void;
}

interface FormData {
  months: number;
  milesPerYear: number;
  fuelEfficiency: number;
}

type VehicleType = "gas" | "ev";

interface SliderConfig {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

const Vehicle: React.FC<VehicleProps> = ({ vehicleNum }) => {
  const [vehicleType, setVehicleType] = useState<VehicleType>("gas");
  const [formData, setFormData] = useState<FormData>({
    months: 8,
    milesPerYear: 12000,
    fuelEfficiency: 25,
  });

  const handleSliderChange = (name: keyof FormData, value: number[]): void => {
    setFormData((prev) => ({
      ...prev,
      [name]: value[0],
    }));
  };

  const getSliderConfig = (type: keyof FormData): SliderConfig => {
    switch (type) {
      case "months":
        return { min: 1, max: 12, step: 1, defaultValue: 8 };
      case "milesPerYear":
        return { min: 1000, max: 30000, step: 1000, defaultValue: 12000 };
      case "fuelEfficiency":
        return { min: 10, max: 50, step: 1, defaultValue: 25 };
      default:
        return { min: 0, max: 100, step: 1, defaultValue: 0 };
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white border-0">
      <CardHeader>
        <h1 className="text-3xl font-bold">Vehicle {vehicleNum}</h1>
      </CardHeader>

      <CardContent className="px-6 space-y-8">
        {/* Vehicle Type Selection */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-gray-700">
            Vehicle Type <span className="text-red-500">*</span>
          </Label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setVehicleType("gas")}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                vehicleType === "gas"
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
              }`}
            >
              <Car
                className={
                  vehicleType === "gas" ? "text-green-600" : "text-gray-400"
                }
                size={24}
              />
              <span className="font-medium">Gas Vehicle</span>
            </button>
            <button
              type="button"
              onClick={() => setVehicleType("ev")}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                vehicleType === "ev"
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-200 hover:border-green-200 hover:bg-gray-50"
              }`}
            >
              <Zap
                className={
                  vehicleType === "ev" ? "text-green-600" : "text-gray-400"
                }
                size={24}
              />
              <span className="font-medium">Electric Vehicle</span>
            </button>
          </div>
        </div>

        {/* Slider Inputs */}
        <div className="space-y-6">
          {(Object.keys(formData) as Array<keyof FormData>).map(
            (field) =>
              (field !== "fuelEfficiency" || vehicleType === "gas") && (
                <div key={field} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold text-gray-700">
                      {field === "milesPerYear"
                        ? "Miles per Year"
                        : field === "fuelEfficiency"
                        ? "Fuel Efficiency (MPG)"
                        : "Months in a Year"}
                    </Label>
                    <span className="text-2xl font-bold text-green-600">
                      {field === "milesPerYear"
                        ? formData[field].toLocaleString()
                        : formData[field]}
                    </span>
                  </div>
                  <Slider
                    value={[formData[field]]}
                    onValueChange={(value) => handleSliderChange(field, value)}
                    min={getSliderConfig(field).min}
                    max={getSliderConfig(field).max}
                    step={getSliderConfig(field).step}
                    defaultValue={[getSliderConfig(field).defaultValue]}
                    className="cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      {field === "milesPerYear"
                        ? "1,000 mi"
                        : field === "fuelEfficiency"
                        ? "10 MPG"
                        : "1 month"}
                    </span>
                    <span>
                      {field === "milesPerYear"
                        ? "30,000 mi"
                        : field === "fuelEfficiency"
                        ? "50 MPG"
                        : "12 months"}
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Vehicle;
