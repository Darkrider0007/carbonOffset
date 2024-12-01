import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import UserContext from "../../../context/UserContext";
import LoginModal from "../../LoginModal";
import InteractiveCarbonResult from "./InteractiveCarbonResult ";

const Calculate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;

  return (
    <Card className="border-0 mx-auto max-w-full px-4 sm:max-w-sm md:max-w-md lg:max-w-2xl">
      <CardHeader className="flex items-center justify-center px-2 text-center">
        <CardTitle className="text-2xl font-bold text-green-700 sm:text-3xl lg:text-4xl">
          Calculate Your Annual Carbon Emissions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col justify-center items-center my-10">
          {user ? (
            <div className="text-center space-y-4">
              <InteractiveCarbonResult userDetails={user} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="text-base text-gray-700 font-medium sm:text-lg">
                Please log in to continue.
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md text-sm sm:text-base"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </CardContent>

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Card>
  );
};

export default Calculate;
