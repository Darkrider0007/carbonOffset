import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Car, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import {
  addVehicleData,
  updateVehicleData,
} from "../../../store/features/calculator/calculatorSlice";

interface VehicleProps {
  vehicleNum: number;
}

interface FormData {
  months: number;
  milesPerYear: number;
  fuelEfficiency: number; // Stored as MPG
}

type VehicleType = "gas" | "ev";

interface SliderConfig {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

const Vehicle: React.FC<VehicleProps> = ({ vehicleNum }) => {
  const dispatch = useDispatch();
  const vehicleData = useSelector((state: any) =>
    state.calculator.vehicleData.find(
      (vehicle: any) => vehicle.id === vehicleNum
    )
  );

  const [vehicleType, setVehicleType] = useState<VehicleType>(
    vehicleData?.vehicleType || "gas"
  );
  const [formData, setFormData] = useState<FormData>({
    months: vehicleData?.months || 8,
    milesPerYear: vehicleData?.milesPerYear || 12000,
    fuelEfficiency: vehicleData?.fuelEfficiency || 25,
  });
  const [showKM, setShowKM] = useState(false); // Toggle for displaying KM or Miles

  useEffect(() => {
    if (!vehicleData) {
      dispatch(
        addVehicleData({
          id: vehicleNum,
          vehicleType,
          ...formData,
        })
      );
    }
  }, [dispatch, vehicleNum, vehicleData, vehicleType, formData]);

  const handleSliderChange = (name: keyof FormData, value: number[]): void => {
    const updatedFormData = {
      ...formData,
      [name]: value[0],
    };
    setFormData(updatedFormData);
    dispatch(
      updateVehicleData({
        id: vehicleNum,
        vehicleType,
        ...updatedFormData,
      })
    );
  };

  const handleVehicleTypeChange = (type: VehicleType): void => {
    setVehicleType(type);
    dispatch(
      updateVehicleData({
        id: vehicleNum,
        vehicleType: type,
        ...formData,
      })
    );
  };

  const toggleUnitDisplay = () => setShowKM(!showKM);

  const convertMilesToKM = (miles: number): number => miles * 1.60934;

  const convertMPGToKMPL = (mpg: number): number => mpg * 0.425144; // 1 MPG ≈ 0.425144 KM/L

  const getSliderConfig = (type: keyof FormData): SliderConfig => {
    switch (type) {
      case "months":
        return { min: 0, max: 12, step: 1, defaultValue: 8 };
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Vehicle {vehicleNum + 1}
        </h1>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 md:px-8 space-y-8">
        {/* Vehicle Type Selection */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
            Vehicle Type <span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => handleVehicleTypeChange("gas")}
              className={`flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
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
              onClick={() => handleVehicleTypeChange("ev")}
              className={`flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
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

        {/* Toggle Unit Display */}
        <div className="space-y-4 gap-4">
          <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
            Units
          </Label>
          <button
            type="button"
            onClick={toggleUnitDisplay}
            className="p-3 mx-2 sm:p-4 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200"
          >
            Show in {showKM ? "Miles/MPG" : "KM/KMPL"}
          </button>
        </div>

        {/* Slider Inputs */}
        <div className="space-y-6">
          {(Object.keys(formData) as Array<keyof FormData>).map(
            (field) =>
              (field !== "fuelEfficiency" || vehicleType === "gas") && (
                <div key={field} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                      {field === "milesPerYear"
                        ? `Miles per Year (${showKM ? "KM" : "Miles"})`
                        : field === "fuelEfficiency"
                        ? `Fuel Efficiency (${showKM ? "KM/L" : "MPG"})`
                        : "Months in a Year"}
                    </Label>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                      {field === "milesPerYear" && showKM
                        ? convertMilesToKM(formData[field]).toFixed(2)
                        : field === "fuelEfficiency" && showKM
                        ? convertMPGToKMPL(formData[field]).toFixed(2)
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
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                    <span>
                      {field === "milesPerYear"
                        ? showKM
                          ? "1,609 KM"
                          : "1,000 mi"
                        : field === "fuelEfficiency"
                        ? showKM
                          ? "4.25 KM/L"
                          : "10 MPG"
                        : "1 month"}
                    </span>
                    <span>
                      {field === "milesPerYear"
                        ? showKM
                          ? "48,280 KM"
                          : "30,000 mi"
                        : field === "fuelEfficiency"
                        ? showKM
                          ? "21.26 KM/L"
                          : "50 MPG"
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
