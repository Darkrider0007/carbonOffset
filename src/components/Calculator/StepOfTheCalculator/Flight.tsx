import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Slider } from "../../ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { changeFlight } from "../../../store/features/calculator/calculatorSlice";
import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";

function Flight() {
  const dispatch = useDispatch();
  const flightData = useSelector((state: any) => state.calculator.flight);
  const [value, setValue] = useState(3);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    dispatch(changeFlight(newValue[0]));
    setValue(newValue[0]);
  };

  useEffect(() => {
    setValue(flightData);
  }, [flightData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center items-center justify-center">
            Annual Carbon Emissions from Flight
            <span className="text-green-600 font-bold">
              <HoverCardOnInfo
                cardTrigger={
                  <FaInfoCircle className="text-lg sm:text-xl text-green-600" />
                }
                cardContent={
                  <div className="text-sm text-gray-700 text-left">
                    <p>
                      The average carbon emissions per passenger mile for a
                      commercial flight is 0.22 pounds. This calculation is
                      based on the assumption that the average passenger vehicle
                      emits 0.4047 pounds of CO2 per mile.
                    </p>
                    <p>
                      The average passenger vehicle emits 0.4047 pounds of CO2
                      per mile. The average commercial flight emits 0.22 pounds
                      of CO2 per mile.
                    </p>
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Monthly Fuel Oil Consumption Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="fuel-oil"
              >
                Monthly Flight Consumption
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={30} // Maximum allows for above-average consumption
                step={1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 flights</span>
                <span>30 flights</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Monthly Flight Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {value.toLocaleString()} flights
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Flight;
