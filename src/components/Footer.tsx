import { Link } from "react-router-dom";
import logo from "../assets/home/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,

} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-700 py-12 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src={logo} alt="logo" className="w-24 mb-4" />
          <p className="text-white text-center md:text-left max-w-md">
            "1 World 1 Nation" envisions global unity, advocating peace,
            sustainability, and equity across borders for a harmonious future.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/calculator" className="text-white hover:underline">
              Carbon Calculator
            </Link>
            <Link to="/projects" className="text-white hover:underline">
              Projects
            </Link>
            <Link to="/joinUs/submitYourProposal" className="text-white hover:underline">
              Submit Your Proposal
            </Link>
            <Link to="/about" className="text-white hover:underline">
              About Us
            </Link>
          </nav>
        </div>
      </div>
      <hr className="border-t border-white mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} 1 World 1 Nation. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <FaSquareXTwitter className="text-white hover:text-gray-300 cursor-pointer" size={24} />
          <FaYoutube
            onClick={() =>
              window.open("https://www.youtube.com/@1world-1nation", "_blank")
            }
            className="text-white hover:text-gray-300 cursor-pointer"
            size={24}
          />
          <FaInstagramSquare
            onClick={() =>
              window.open("https://www.instagram.com/1world1nation1?igsh=MXBxNzQ1NXVmYWRnNg==", "_blank")
            }
            className="text-white hover:text-gray-300 cursor-pointer" size={24} />
          <FaFacebook
            onClick={() =>
              window.open("https://www.facebook.com/share/12LcVDvkeB9/?mibextid=wwXIfr", "_blank")}
            className="text-white hover:text-gray-300 cursor-pointer" size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
