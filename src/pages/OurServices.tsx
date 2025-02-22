import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import vehicle from "../assets/services/vehicle.png";
import trees from "../assets/services/trees.png";
import Footer from "../components/Footer";
import road from "../assets/offset/road.png";
import certificate from "../assets/offset/certificate.png";
import { FaArrowRight, FaTree } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import SmoothScroll from "../components/SmoothScroll";

const OurServices = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;
  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Carbon Footprint Offset
          </h1>

          <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
        </div>

        {/* vehicle and trees */}
        <div className="p-5 md:p-10 flex flex-col">
          <h1 className="text-lg md:text-3xl px-5 md:px-16 my-5 md:my-10 text-center">
            That’s the average American’s carbon footprint (about 16 metric tons per year, according to the EPA) from our home, work, travel, and everything else we do and buy. You can be a leader in
            the fight against climate change. Offset your carbon footprint and
            support our industry-leading carbon reduction projects. Thank you!
          </h1>

          <div className="flex flex-col md:flex-row gap-5 md:gap-20 w-full justify-center my-8 md:my-16">
            <div
              style={{
                backgroundImage: `url(${vehicle})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
                width: "100%",
              }}
              className="flex justify-center items-center cursor-pointer group rounded-xl md:w-[40%]"
            >
              <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaCarRear color="white" size={40} />
                <h1 className="text-xl font-bold text-white">Vehicle</h1>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${trees})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
                width: "100%",
              }}
              className="flex justify-center items-center cursor-pointer group rounded-xl md:w-[40%]"
            >
              <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaTree color="white" size={40} />
                <h1 className="text-xl font-bold text-white">Trees</h1>
              </div>
            </div>
          </div>
        </div>

        {/* calculator */}
        <div className="bg-[#DEFFDD] p-10 md:p-20 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-center">
            <h1 className="uppercase text-xs font-bold text-center">
              unsure about your impact ?
            </h1>
            <h1 className="text-2xl md:text-3xl w-full md:w-[70%] text-center">
              Use Our Calculator To See How Much Carbon To Offset
            </h1>
            <button
              onClick={() => {
                navigate("/calculator");
              }}
              className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[40%] rounded-full"
            >
              <h1 className="font-bold">Calculate Carbon Footprint</h1>
              <FaArrowRight />
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-center mt-10 md:mt-0">
            <h1 className="uppercase text-xs font-bold text-center">
              Already Know Your Impact ?
            </h1>
            <h1 className="text-2xl md:text-3xl w-full md:w-[70%] text-center">
              Instantly Offset Your Carbon With Our Custom Purchase Tool
            </h1>
            {user ? (
              <button
                onClick={() => {
                  navigate("/offsetNow");
                }}
                className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[40%] rounded-full"
              >
                <h1 className="font-bold">Buy Carbon Credits Now</h1>
                <FaArrowRight />
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[40%] rounded-full"
              >
                <h1 className="font-bold">Login to Buy Carbon Credits Now</h1>
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>

        {/* certificate */}
        <div className="flex flex-col md:flex-row">
          <div className="bg-black p-10 md:px-20 md:py-10 text-white w-full md:w-[70%]">
            <h1 className="uppercase text-xs font-bold">Proof Of Purchase</h1>
            <h1 className="text-xl md:text-3xl w-full md:w-80">
              Receive A Certificate Upon Purchase
            </h1>
          </div>
          <div className="w-full md:w-[30%] relative mt-10 md:mt-0">
            <img src={road} className="w-full" alt="road" />
            <img
              src={certificate}
              className="w-full absolute -top-10 md:-left-72 left-0"
              alt="certificate"
            />
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default OurServices;
