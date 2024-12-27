import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/home/hero.png";
import SmoothScroll from "../components/SmoothScroll";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <SmoothScroll>
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="flex items-center justify-center h-screen bg-gray-100"
      >
        <div className="text-center bg-gray-100/50 p-12 rounded-md">
          <h1 className="text-8xl font-extrabold text-green-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default PageNotFound;
