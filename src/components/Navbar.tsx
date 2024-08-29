import { Link } from "react-router-dom";
import { FaTree } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";

const Navbar = () => {
  //   const navigation = useNavigate();
  return (
    <div className="w-full h-28   flex items-center px-10 justify-between ">
      <div className="flex gap-14 items-center">
        <h1 className="text-green-600 text-4xl font-bold">Carbon</h1>
        <div className="flex gap-10 pt-3 text-lg items-center">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/calculator" className="hover:text-green-600">
            Carbon Calculator
          </Link>
          <Link to="/" className="hover:text-green-600">
            Gallery
          </Link>
          <Link to="/projects" className="hover:text-green-600">
            Projects
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex gap-10 pt-3">
        <Link
          to="/services"
          className="px-5 py-2 border-green-600 border-2 rounded-xl font-bold"
        >
          Our Services
        </Link>
        <Link
          to="/offsetNow"
          className="px-5 py-2 bg-green-600 rounded-xl text-white flex gap-2 items-center font-bold"
        >
          <FaTree /> Offset Now
        </Link>
        <Link
          to="/userDashboard"
          className="px-5 py-2 ml-16 border-black border-2 rounded-xl  flex gap-2 items-center font-bold"
        >
          <RiWallet3Fill size={20} fill="black" /> Wallet
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
