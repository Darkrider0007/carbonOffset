import logo from "../assets/home/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green-600 py-10 px-20 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <div className="w-80">
          <img src={logo} />
          <h1 className="text-white">
            "1 World 1 Nation" envisions global unity, advocating peace,
            sustainability, and equity across borders, aiming for a harmonious,
            interconnected future.
          </h1>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h1 className="font-bold">Quick Links</h1>
          <h1> Home</h1>
          <h1> Books</h1>
          <h1> Projects</h1>
          <h1> Submit Your Proposal</h1>
          <h1> About Us</h1>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-white my-5 " />
      <div className="w-full flex justify-between">
        <h1 className="text-white">Copyright Reserved @2024</h1>
        <div className="flex gap-5">
          <FaTwitter color="white" size={20} />
          <FaLinkedin color="white" size={20} />
          <FaInstagramSquare color="white" size={20} />
          <FaFacebook color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
