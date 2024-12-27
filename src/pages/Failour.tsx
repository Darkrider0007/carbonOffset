import React from "react";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";

const FailurePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SmoothScroll>
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <svg
            className="mx-auto mb-4 h-16 w-16 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-6">
            Unfortunately, your payment could not be processed. Please try
            again.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default FailurePage;
