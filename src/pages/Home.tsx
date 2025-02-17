import Navbar from "../components/Navbar";
import heroImg from "../assets/home/hero.png";
import curve from "../assets/home/curve.png";
import individual from "../assets/home/individual.png";
import farm from "../assets/home/farm.png";
import bg from "../assets/home/bg.png";
import howWeWork from "../assets/home/howWeWork.png";
import future1 from "../assets/home/future1.png";
import future2 from "../assets/home/future2.png";
import future3 from "../assets/home/future3.png";
import projectbg1 from "../assets/home/projectbg1.png";
import projectbg2 from "../assets/home/projectbg2.png";
import projectbg3 from "../assets/home/projectbg3.png";
import { FaTree } from "react-icons/fa6";
import "../index.css"; // Ensure you import the CSS file
import { FaArrowRight } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Newsletter from "../components/Newsletter";
import SmoothScroll from "../components/SmoothScroll";

const FutureData = [
  {
    title: "Renewable Energy initiatives",
    image: future1,
  },
  {
    title: "Urban Green Spaces",
    image: future2,
  },
  {
    title: "Sustainable agriculture Practices",
    image: future3,
  },
];

const ProjectData = [
  {
    title: "Clean Kailash",
    desc: "Clean Kailash is a movement to protect Mount Kailash’s sacred and ecological balance through responsible tourism, waste management, community empowerment, visitor education, and conservation. Join us in clean-up drives, awareness programs, and sustainable initiatives to preserve this iconic site for future generations.",
    image: projectbg1,
  },
  {
    title: "Urban Green Spaces",
    desc: "Our Urban Green Spaces project aims to create and maintain green areas within urban environments. These spaces provide essential ecological benefits, improve air quality, and offer recreational areas for communities, contributing to overall well-being and environmental sustainability.",
    image: projectbg2,
  },
  {
    title: "Sustainable Agriculture Practices",
    desc: "Our Sustainable Agriculture Practices project focuses on promoting eco-friendly farming techniques. By encouraging crop rotation, organic farming, and efficient water use, we aim to reduce the environmental impact of agriculture while ensuring food security and supporting local farmers.",
    image: projectbg3,
  },
];

const Home = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);

  // Ensure context is defined before accessing properties
  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;

  return (
    <SmoothScroll>
      <div>
        <Navbar />

        {/* Hero Section */}
        <div
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
          className="flex flex-col gap-3 justify-center items-center relative"
        >
          {/* Centered Heading */}
          <h1 className="text-white font-bold text-lg mt-20 text-center">
            SAFEGUARDING NATURE FOR FUTURE GENERATIONS
          </h1>

          {/* Larger Text Heading */}
          <h1 className="text-white text-4xl md:text-6xl font-bold w-full md:w-1/2 text-center">
            Working Towards A Sustainable World
          </h1>

          {/* Button */}
          {user ? (
            <button
              onClick={() => navigate("/calculator")}
              className="px-5 py-2 my-10 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
            >
              <FaTree /> Offset Now
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 my-10 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
            >
              <FaTree /> Login to Offset Now
            </button>
          )}

          {/* Curve Image */}
          <img src={curve} alt="curve" className="absolute bottom-20 w-full" />

          {/* White Background at Bottom */}
          <div className="bg-white w-full h-20 absolute bottom-0"></div>
        </div>

        {/* Onboarding */}
        <div className="bg-white h-[50vh] relative">
          <div className="bg-white mx-4 md:mx-16 flex flex-col md:flex-row border border-green-600 absolute -top-44 ">
            <div className="p-5 w-full md:w-1/2 px-5 md:px-14 border-r border-green-600 ">
              <h1 className="uppercase text-sm font-bold ">
                Sustainability Options For
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold my-3">
                Individuals
              </h1>
              <h1 className="text-lg mb-10">
                You can be a leader in the fight against climate change. Offset
                your carbon footprint and support our industry-leading projects!
              </h1>
              <div className="relative">
                <button
                  onClick={() => navigate("/about")}
                  className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full"
                >
                  <h1>Learn More</h1>
                  <FaArrowRight />
                </button>
                <img
                  src={individual}
                  alt="individual"
                  className="mt-5 md:mt-0"
                />
              </div>
            </div>

            <div className="p-5 w-full md:w-1/2 px-5 md:px-14 ">
              <h1 className="uppercase text-sm font-bold ">
                Sustainability Options For
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold my-3">
                Farm Onboarding
              </h1>
              <h1 className="text-lg mb-10">
                We can help Farm Onborder of all sizes measure and offset their
                carbon footprint!
              </h1>
              <div className="relative">
                <Link to="/joinUs/farmOnboardApplication">
                  <button className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full">
                    <h1>Learn More</h1>
                    <FaArrowRight />
                  </button>
                </Link>
                <img src={farm} alt="farm" className="mt-5 md:mt-0" />
              </div>
            </div>
          </div>
        </div>

        {/* call to action */}
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="w-full mt-96 lg:mt-0 md:w-1/2 p-5 md:p-14 flex flex-col gap-6 text-white">
            <h1 className="text-3xl md:text-5xl">Purchase Carbon Credits</h1>
            <h1 className="text-lg">
              A whopping 50,000 pounds a year! That’s the average carbon
              footprint from our home, work, travel and everything else we do
              and buy. You can be a leader in the fight against climate change.
              Offset your carbon footprint and support our industry-leading
              carbon reduction projects.
            </h1>
            <h1 className="text-lg mt-4">
              Need help? Use our calculators find out how much carbon to offset.
            </h1>
            <button
              onClick={() => {
                navigate("/calculator/individual");
              }}
              className="bg-green-600 px-3 py-2 rounded-full"
            >
              Individual Carbon Footprint Calculator
            </button>
          </div>
        </div>

        {/* how we work  */}
        <div className="flex flex-col mt-40 lg:mt-0 md:flex-row justify-between md:px-32 items-center p-5 md:p-10">
          <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <div className="flex gap-2 items-center">
              <FaLeaf color="green" />{" "}
              <h1 className="uppercase font-bold text-sm text-green-600">
                How We Work
              </h1>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mt-3">
              We Work Together For Bettering Tomorrow
            </h1>
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <img src={howWeWork} alt="how" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:px-32 py-5 gap-5 md:gap-14">
          {FutureData.map((item, index) => (
            <div
              key={index}
              className="p-5 flex flex-col gap-3 border border-green-600 w-full md:w-1/3"
            >
              <img src={item.image} alt={item.title} />
              <h1 className="text-lg">{item.title}</h1>
              {/* <FaArrowRight color="green" /> */}
            </div>
          ))}
        </div>

        {/* our projects */}
        <div>
          <h1 className="text-center text-3xl md:text-4xl font-bold my-5">
            Our Projects
          </h1>

          <div className="flex flex-col md:flex-row p-5 md:p-10 md:px-32 gap-5 md:gap-20 ">
            {ProjectData.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "450px",
                }}
                className="w-full md:w-[35%] flex flex-col gap-6 text-white "
              >
                <div className="w-full h-full bg-black/[0.6] p-6">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <h1>{item.desc}</h1>
                </div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="flex justify-center">
            <button className="bg-green-600 py-2 px-8 rounded-md text-white item-center text-md font-bold my-5">
              View More Projects
            </button>
          </Link>
        </div>

        {/* newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Home;
