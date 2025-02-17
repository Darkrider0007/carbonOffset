import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "../../ui/label";
import { Slider } from "../../ui/slider";
import { useDispatch, useSelector } from "react-redux";

import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";
import { removeFlightData } from "../../../store/features/calculator/calculatorSlice";
import SingleFlight from "./SingleFilght";

function Flight() {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();
  const flightData = useSelector((state: any) => state.calculator.flight);

  // Sync slider value with flight data length
  useEffect(() => {
    setValue(flightData.length);
  }, [flightData]);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
  };

  useEffect(() => {
    setValue(flightData.length);
    if (flightData.length - 1 === value) {
      const flightRemove = flightData[flightData.length - 1];
      dispatch(removeFlightData(flightRemove.id));
      setValue(value - 1);
    }
  }, [flightData, value]);

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
                      emits 0.4047 pounds of CO<sub>2</sub> per mile.
                    </p>
                    <p>
                      The average passenger vehicle emits 0.4047 pounds of CO<sub>2</sub>
                      per mile. The average commercial flight emits 0.22 pounds
                      of CO<sub>2</sub> per mile.
                    </p>
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col w-full justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Monthly Fuel Oil Consumption Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="fuel-oil"
              >
                Number of Flights per Month
              </Label>
              <Slider
                value={[value]}
                max={30}
                step={1}
                onValueChange={handleChange}
                className="w-full"
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 flights</span>
                <span>30 flights</span>
              </div>

              {/* Display Current Monthly and Annual Consumption */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Monthly Flight Consumption:{" "}
                <span className="text-green-600 font-bold">
                  {value?.toLocaleString()} flights
                </span>
              </div>
              <div className="flex justify-center w-full py-4 sm:py-6 md:py-8">
                <div className="w-full sm:w-[400px] md:w-[600px] flex flex-col items-center">
                  {[...Array(value)].map((_, index) => (
                    <SingleFlight key={index} flightNum={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Flight;
