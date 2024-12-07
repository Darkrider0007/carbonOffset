import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Slider } from "../../../components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { changeWaste } from "../../../store/features/calculator/calculatorSlice";
import { HoverCardOnInfo } from "../../HoverCardOnInfo";
import { FaInfoCircle } from "react-icons/fa";

function Waste() {
  const dispatch = useDispatch();
  const wasteData = useSelector((state: any) => state.calculator.waste);
  const [value, setValue] = useState(3);

  // Handle slider value changes
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
    dispatch(changeWaste(newValue[0]));
  };

  useEffect(() => {
    setValue(wasteData);
  }, [wasteData]);

  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center items-center justify-center">
            Annual Carbon Emissions from Waste
            <span className="text-green-600 font-bold">
              <HoverCardOnInfo
                cardTrigger={
                  <FaInfoCircle className="text-lg sm:text-xl text-green-600" />
                }
                cardContent={
                  <div className="text-sm sm:text-base text-gray-700">
                    The average annual carbon emissions from waste per person in
                    the United States is 3 metric tons.
                  </div>
                }
              />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col justify-center items-center my-8 sm:my-10">
            <div className="w-full max-w-xs sm:max-w-md md:w-[600px] flex flex-col gap-6 px-4 sm:px-6 md:px-0">
              {/* Number of People in Household Input */}
              <Label
                className="text-lg sm:text-xl font-semibold text-gray-700"
                htmlFor="household-size"
              >
                Number of People in Household
              </Label>
              <Slider
                value={[value]}
                min={0}
                max={15} // Maximum to accommodate larger households
                step={1} // Step size for precise adjustments
                onValueChange={handleChange}
              />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <span>0 people</span>
                <span>15 people</span>
              </div>

              {/* Display Current Household Size */}
              <div className="text-center text-sm sm:text-lg font-medium text-gray-700">
                Current Household Size:{" "}
                <span className="text-green-600 font-bold">{value}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Waste;
