import { FC, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import SelectCalculator from "./SelectCalculator";

const HeroSection: FC = () => {
  const [isModalActive, setModalActive] = useState(false);
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center text-white relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/Jv4zfjL/Forest-Home.jpg')",
      }}
    >
      {/* Motion background overlay */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 2 }}
        style={{ transformOrigin: "left" }}
      />
      {/* Static background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10" />

      {/* Content */}
      <div className="px-6 md:px-20 z-20 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-bold mb-4 md:mb-6 leading-tight">
          Carbon
        </h1>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-10 leading-tight">
          Calculator
        </h1>
        {/* Button */}
        <button
          onClick={() => setModalActive(true)}
          className="bg-green-500 text-white py-3 px-8 md:px-12 rounded-full text-lg hover:bg-green-600 transition flex flex-row gap-2 items-center justify-center mx-auto md:mx-0"
        >
          <FaPaperPlane /> Start
        </button>

        <SelectCalculator
          active={isModalActive}
          onClose={() => setModalActive(false)}
        />
      </div>
    </div>
  );
};

export default HeroSection;
