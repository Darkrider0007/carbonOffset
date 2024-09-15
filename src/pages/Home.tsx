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
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";
import { FaTree } from "react-icons/fa6";
import "../index.css"; // Ensure you import the CSS file
import { FaArrowRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg1,
  },
  {
    title: "Urban Green Spaces",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg2,
  },
  {
    title: "Sustainable agriculture Practices",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem eligendi maiores voluptatibus voluptatum velit laboriosam tenetur exercitationem quae assumenda quis dolor hic libero est quam nostrum cumque eos at consequuntur illo, deserunt rerum fugiat. Laudantium, qui, saepe, expedita cupiditate provident aliquid eaque pariatur consequatur omnis esse modi iste voluptatibus!",
    image: projectbg3,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
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
        <button
          onClick={() => navigate("/offsetNow")}
          className="px-5 py-2 my-10 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
        >
          <FaTree /> Offset Now
        </button>

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
            <h1 className="text-4xl md:text-6xl font-bold my-3">Individuals</h1>
            <h1 className="text-lg mb-10">
              You can be a leader in the fight against climate change. Offset
              your carbon footprint and support our industry-leading projects!
            </h1>
            <div className="relative">
              <button className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full">
                <h1>Learn More</h1>
                <FaArrowRight />
              </button>
              <img src={individual} alt="individual" className="mt-5 md:mt-0" />
            </div>
          </div>

          <div className="p-5 w-full md:w-1/2 px-5 md:px-14 ">
            <h1 className="uppercase text-sm font-bold ">
              Sustainability Options For
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold my-3">Farm Onboarding</h1>
            <h1 className="text-lg mb-10">
              We can help Farm Onborder of all sizes measure and offset their
              carbon footprint!
            </h1>
            <div className="relative">
              <button className="flex bg-green-600 text-white items-center gap-3 px-3 py-2 rounded-full">
                <h1>Learn More</h1>
                <FaArrowRight />
              </button>
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
        <div className="w-full md:w-1/2 p-5 md:p-14 flex flex-col gap-6 text-white">
          <h1 className="text-3xl md:text-5xl">Purchase Carbon Credits</h1>
          <h1 className="text-lg">
            A whopping 50,000 pounds a year! That’s the average carbon footprint
            from our home, work, travel and everything else we do and buy. You
            can be a leader in the fight against climate change. Offset your
            carbon footprint and support our industry-leading carbon reduction
            projects.
          </h1>
          <h1 className="text-lg mt-4">
            Need help? Use our calculators find out how much carbon to offset.
          </h1>
          <button className="bg-green-600 px-3 py-2 rounded-full">
            Individual Carbon Footprint Calculator
          </button>
        </div>

        <div className="w-full hidden md:w-1/2 md:flex flex-col gap-5 items-center p-5  text-white">
          <h1 className="uppercase text-xs font-bold">I want to offset by</h1>
          <div className="flex gap-2">
            <button className="bg-white text-green-600 font-bold px-7 py-2 rounded-md">
              Dollar/INR Amount
            </button>
            <button className="border-2 border-green-600 font-bold px-10 py-2 rounded-md">
              Credit Amount
            </button>
          </div>
          <div className="bg-white text-black w-full md:w-[80%] gap-4 p-5 rounded-md flex flex-col items-center ">
            <h1 className="font-semibold">Enter Dollar Amount</h1>
            <input
              placeholder="100 $"
              className="w-full h-14 text-4xl font-bold text-center border-b-2 border-black focus:outline-none focus:border-b-2"
            />
            <h1 className="font-semibold">Select Frequency</h1>
            <div className="flex flex-wrap gap-3">
              <div className="w-24 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                One-Time
              </div>
              <div className="w-24 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                Monthly
              </div>
              <div className="w-24 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                Quaterly
              </div>
              <div className="w-24 md:w-32 text-center py-3 bg-gray-300 hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer">
                Yearly
              </div>
            </div>
            <h1 className="text-xs tracking-[4px] uppercase font-bold">
              total <span className="text-green-600">10 tokens</span>
            </h1>
            <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[80%] rounded-full">
              <h1 className="font-bold">Add to Wallet</h1>
              <FaLock />
            </button>
          </div>
        </div>
      </div>

      {/* how we work  */}
      <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10">
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
            <FaArrowRight color="green" />
          </div>
        ))}
      </div>

      {/* our projects */}
      <div>
        <h1 className="text-center text-3xl md:text-4xl font-bold my-5">Our Projects</h1>

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
        <div className="flex justify-center">
          <button className="bg-green-600 py-2 px-8 rounded-md text-white item-center text-md font-bold my-5">
            View More Projects
          </button>
        </div>
      </div>

      {/* newsletter */}
      <div
        style={{
          backgroundImage: `url(${newsletterbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
        className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-5 md:py-0"
      >
        <div className="flex gap-5 md:gap-16 items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-xl text-white">Join Our Newsletter</h1>
        </div>
        <div className="flex gap-3 mt-5 md:mt-0">
          <input
            className="w-60 h-10 rounded-md p-2 bg-white"
            placeholder="Enter your email"
          />
          <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
