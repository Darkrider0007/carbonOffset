import { Link } from "react-router-dom";
import logo from "../assets/home/logo.png";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-600 py-10 px-5 md:px-20 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between w-full mb-5">
        <div className="w-full md:w-80 mb-5 md:mb-0">
          <img src={logo} alt="logo" />
          <h1 className="text-white mt-3">
            "1 World 1 Nation" envisions global unity, advocating peace,
            sustainability, and equity across borders, aiming for a harmonious,
            interconnected future.
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h1 className="font-bold">Quick Links</h1>
          <Link to='/'> Home</Link>
          <Link to='/calculator'> Carbon Calculator</Link>
          <Link to='/projects'> Projects</Link>
          <Link to='/farm-onboarding'> Submit Your Proposal</Link>
          <Link to='/about'> About Us</Link>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-white my-5" />
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white mb-3 md:mb-0">Copyright Reserved @2024</h1>
        <div className="flex gap-5">
          <FaTwitter color="white" size={20} />
          <FaYoutube onClick={() => window.open('https://www.youtube.com/@1world-1nation', '_blank')} color="white" size={20} />
          <FaInstagramSquare color="white" size={20} />
          <FaFacebook color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
