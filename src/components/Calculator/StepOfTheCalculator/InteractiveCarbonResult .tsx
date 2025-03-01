import React, { useState, useEffect } from "react";
import { Loader2, TreePineIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../../../api/calculator";
import { toast } from "../../../hooks/use-toast";
import { updateCalculatedState } from "../../../store/features/calculator/calculatorSlice";
import { Button } from "../../ui/button";
import { RiRestartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";

interface InteractiveCarbonResultProps {
  userDetails: any;
}

interface CalculatorState {
  calculator: any;
}

type CalculationState = "initial" | "loading" | "result";

const InteractiveCarbonResult: React.FC<InteractiveCarbonResultProps> = ({
  userDetails,
}) => {
  const [calculationState, setCalculationState] =
    useState<CalculationState>("initial");
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const [totalEmissions, setTotalEmissions] = useState<number>(0);

  const dispatch = useDispatch();
  const calculatorData = useSelector(
    (state: CalculatorState) => state.calculator
  );
  const loadingMessages: string[] = [
    "Evaluating your data...",
    "Hold on a few moments, we're about to show your results.",
    "Analyzing your vehicle emissions...",
    "Comparing with global standards...",
    "Running advanced calculations...",
    "Almost there! Processing final calculations...",
  ];

  useEffect(() => {
    if (calculatorData.isCalculated) {
      setCalculationState("result");
      setTotalEmissions(calculatorData.totalEmissions);
    }
  }, []);

  useEffect(() => {
    let messageInterval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (calculationState === "loading") {
      setProgress(0);

      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 100);

      // Random messages
      setCurrentMessage(
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
      );
      messageInterval = setInterval(() => {
        setCurrentMessage(
          loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
        );
      }, 2000);

      // Show final result after 5 seconds
      const resultTimer: NodeJS.Timeout = setTimeout(() => {
        clearInterval(messageInterval);
        clearInterval(progressInterval);
        setCalculationState("result");
      }, 9000);

      return () => {
        clearInterval(messageInterval);
        clearInterval(progressInterval);
        clearTimeout(resultTimer);
      };
    }
  }, [calculationState]);

  const handleCalculateClick = async () => {
    setCalculationState("loading");
    try {
      const res = await calculate(calculatorData);
      setTotalEmissions(res.data.totalEmissions);
      dispatch(updateCalculatedState(res.data.totalEmissions));
    } catch (error) {
      toast({
        title: "Error calculating emissions",
        description:
          "An error occurred while calculating your emissions. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full text-center space-y-4">
      {calculationState === "initial" && (
        <div className="px-4">
          <div className="py-8">
            <p className="text-xl sm:text-2xl text-gray-800 mb-4">
              Welcome back,{" "}
              <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {userDetails?.firstName}
              </span>
              !
            </p>
            <p className="text-sm sm:text-lg text-gray-600 mb-8">
              Ready to discover your environmental impact? Calculate your annual
              carbon emissions using our advanced analytics engine.
            </p>
            <button
              onClick={handleCalculateClick}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-emerald-700"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Calculate Now</span>
            </button>
          </div>
        </div>
      )}

      {calculationState === "loading" && (
        <div className="transform transition-all duration-500 px-4">
          <div className="bg-white py-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Glowing loader with gradient */}
              <div className="relative">
                <Loader2 className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 animate-spin" />
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-xs sm:max-w-md bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Animated message */}
              <div className="min-h-[2rem] sm:min-h-[3rem] flex items-center">
                <p className="text-sm sm:text-lg font-medium text-gray-700 animate-fade-in">
                  {currentMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {calculationState === "result" && (
        <div
          className="relative flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-[800px] md:max-w-[1000px] h-auto sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/y0xym8t/9640795-hd-1920-1080-25fps-ezgif-com-video-to-gif-converter.gif')",
          }}
        >
          {/* Red Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-20 rounded-lg"></div>
          {/* Content */}
          <div className="z-30 px-4">
            <div className="space-y-6 flex flex-col items-center">
              <div className="space-y-2">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-100">
                  YOUR CARBON IMPACT IS
                </h2>
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {totalEmissions ? totalEmissions.toFixed(4) : "0"}
                  </span>
                  <span className="text-lg sm:text-2xl font-medium text-gray-50">
                    METRIC TONS CO<sub>2</sub>
                  </span>
                </div>
              </div>

              <p className="text-gray-200 text-center text-sm sm:text-lg w-full max-w-xs sm:max-w-md">
                Protecting {(totalEmissions * 0.36).toFixed(2)} hectares of
                tropical forest can neutralise that amount of carbon dioxide.
              </p>

              <p className="text-gray-200 text-center text-xs sm:text-sm max-w-xs sm:max-w-lg">
                On average, a hectare of tropical forest stores carbon equating
                to 550 metric tons of CO<sub>2</sub>. With annual tropical deforestation
                rates averaging 0.5%, this results in 2.75 metric tons of CO<sub>2</sub>
                emitted per hectare each year.
                <a href="https://climate.mit.edu/ask-mit/how-many-new-trees-would-we-need-offset-our-carbon-emissions" target="_blank" className="flex flex-row items-center justify-center text-green-400"> Learn more <HiExternalLink /></a>
              </p>
              <Button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                onClick={() => setCalculationState("initial")}
              >
                <div className="flex items-center justify-center gap-2">
                  Reset Calculation
                  <RiRestartLine />
                </div>
              </Button>
              <Link
                to="/calculator"
                state={{ totalEmissions: Number(totalEmissions).toFixed(2), clientType: 'individual' }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300"
              >
                <div className="flex flex-row items-center justify-center">
                  Offset Now
                  <TreePineIcon className="h-6 w-6 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveCarbonResult;
