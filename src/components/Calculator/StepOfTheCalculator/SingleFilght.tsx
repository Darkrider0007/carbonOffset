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
  const [showKM, setShowKM] = useState(false); // Toggle for showing KM or Miles

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

  const toggleUnitDisplay = () => setShowKM(!showKM);

  const convertMilesToKM = (miles: number): number => miles * 1.60934;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white border-0">
      <CardHeader>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Flight {flightNum + 1}
        </h1>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 md:px-8 space-y-8">
        {/* Toggle Unit Display */}
        <div className="space-y-4">
          <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
            Units
          </Label>
          <button
            type="button"
            onClick={toggleUnitDisplay}
            className="p-3 mx-2 sm:p-4 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200"
          >
            Show in {showKM ? "Miles" : "KM"}
          </button>
        </div>

        {/* Distance Slider */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                Flight Distance ({showKM ? "KM" : "Miles"})
              </Label>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                {showKM
                  ? convertMilesToKM(distance).toFixed(2)
                  : distance.toLocaleString()}{" "}
                {showKM ? "km" : "mi"}
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
              <span>{showKM ? "0 km" : "0 mi"}</span>
              <span>
                {showKM ? `${(12000 * 1.60934).toFixed(2)} km` : "12,000 mi"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleFlight;
