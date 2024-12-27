import React from "react";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SmoothScroll>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <svg
            className="mx-auto mb-4 h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m-6 6h9m2-5a9 9 0 11-6.265-8.721"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your payment was processed
            successfully.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Success;
