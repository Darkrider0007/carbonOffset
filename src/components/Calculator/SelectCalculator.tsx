import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SelectCalculatorProps {
  active: boolean;
  onClose: () => void;
}

const SelectCalculator: React.FC<SelectCalculatorProps> = ({
  active,
  onClose,
}) => {
  if (!active) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <Card
        className="z-40 relative top-auto left-auto transform-none items-center justify-center w-96 p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
      >
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-700">
              Calculate Carbon Footprint
            </h1>
            <p className="text-gray-500 text-sm">
              Measure your environmental impact
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => navigate("/calculator/individual")}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 h-12 rounded-lg"
            >
              <Leaf size={20} />
              <span>Individual</span>
            </Button>

            <Button
              onClick={() => navigate("/calculator/business")}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 h-12 rounded-lg"
            >
              <Leaf size={20} />
              <span>Business</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectCalculator;
