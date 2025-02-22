import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import Vehicle from "./Vehicle";
import { useDispatch, useSelector } from "react-redux";
import { removeVehicalData } from "../../../store/features/calculator/calculatorSlice";
import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";

function Vehicles() {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();

  const vehiclesData = useSelector(
    (state: any) => state.calculator.vehicleData
  );

  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  useEffect(() => {
    setValue(vehiclesData.length);
    if (vehiclesData.length - 1 === value) {
      // Remove the last vehicle (assuming vehicle IDs are sequentially based on array index)
      const vehicleToRemove = vehiclesData[vehiclesData.length - 1];
      dispatch(removeVehicalData(vehicleToRemove.id));
      setValue(value - 1);
    }
  }, [vehiclesData, value]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold items-center justify-center">
            Vehicle Emissions
            <span className="text-green-600 font-bold">
              <HoverCardOnInfo
                cardTrigger={
                  <FaInfoCircle className="text-lg sm:text-xl text-green-600" />
                }
                cardContent={
                  <div className="text-sm text-gray-700">
                    <li>
                      The average car emits 4.6 metric tons of CO<sub>2</sub> per year.
                    </li>
                    <li>
                      The average car emits 404 grams of CO<sub>2</sub> per mile driven.
                    </li>
                    <li>The average car emits 9,000 pounds of CO<sub>2</sub> per year.</li>
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex flex-col justify-center items-center my-6 sm:my-10">
            {/* Responsive Container for Slider */}
            <div className="w-full sm:w-[400px] md:w-[600px] flex flex-col gap-4 sm:gap-6">
              <Label
                className="text-base sm:text-lg md:text-xl"
                htmlFor="vehicle"
              >
                Number of Vehicles
              </Label>
              <Slider
                value={[value]}
                max={10}
                step={1}
                onValueChange={handleChange}
                className="w-full"
              />
            </div>
            {/* Responsive Container for Vehicle List */}
            <div className="w-full sm:w-[400px] md:w-[600px] py-4 sm:py-6 md:py-8">
              {[...Array(value)].map((_, index) => (
                <Vehicle key={index} vehicleNum={index} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Vehicles;
