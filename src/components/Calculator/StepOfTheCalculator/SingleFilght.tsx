import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import {
  addFlightData,
  updateFlightData,
} from "../../../store/features/calculator/calculatorSlice";

interface FlightProps {
  flightNum: number;
}

const SingleFlight: React.FC<FlightProps> = ({ flightNum }) => {
  const dispatch = useDispatch();
  const flightData = useSelector((state: any) =>
    state.calculator.flight?.find((flight: any) => flight.id === flightNum)
  );

  const [distance, setDistance] = useState<number>(flightData?.distance || 0);

  useEffect(() => {
    if (!flightData) {
      // Initialize flight data if not present
      dispatch(
        addFlightData({
          id: flightNum,
          distance: 0, // Default distance value
        })
      );
    }
  }, [dispatch, flightNum, flightData]);

  const handleSliderChange = (value: number[]): void => {
    setDistance(value[0]);
    dispatch(
      updateFlightData({
        id: flightNum,
        distance: value[0],
      })
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white border-0">
      <CardHeader>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Flight {flightNum + 1}
        </h1>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 md:px-8 space-y-8">
        <div className="space-y-6">
          {/* Distance Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                Flight Distance (miles)
              </Label>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                {distance.toLocaleString()} mi
              </span>
            </div>
            <Slider
              value={[distance]}
              onValueChange={handleSliderChange}
              min={0}
              max={12000}
              step={100}
              defaultValue={[0]}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500">
              <span>0 mi</span>
              <span>12,000 mi</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleFlight;
