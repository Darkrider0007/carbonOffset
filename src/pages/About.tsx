import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";
import about from "../assets/about/about.png";
import { FaLeaf } from "react-icons/fa";

const aboutData = [
  {
    title: "What is Carbon Offset?",
    description:
      "Carbon offsetting involves compensating for carbon dioxide emissions by funding equivalent carbon dioxide savings elsewhere. It's a practical way to mitigate the impact of activities that produce greenhouse gases.",
  },
  {
    title: "Importance of Carbon Offset",
    description:
      "Carbon offsets are essential in the fight against climate change. They provide a mechanism for individuals and companies to neutralize their carbon footprint and support global efforts to reduce greenhouse gas emissions.",
  },
  {
    title: "Types of Carbon Offset Projects",
    description:
      "Carbon offset projects vary widely, including renewable energy projects, reforestation, energy efficiency improvements, and methane capture from landfills. Each project type offers unique benefits for the environment and communities.",
  },
  {
    title: "Renewable Energy Projects",
    description:
      "These projects focus on generating energy from renewable sources such as wind, solar, and hydro power. By displacing fossil fuel energy production, they significantly reduce greenhouse gas emissions.",
  },
  {
    title: "Reforestation and Afforestation",
    description:
      "Reforestation involves planting trees in deforested areas, while afforestation refers to creating new forests on lands that were not previously forested. Both methods enhance carbon sequestration, improve biodiversity, and support ecosystems.",
  },
  {
    title: "How to Get Involved",
    description:
      "Individuals and businesses can contribute to carbon offset projects by purchasing carbon credits, reducing their own carbon footprint, and supporting sustainability initiatives. Every action counts towards a greener, more sustainable future.",
  },
];

const About = () => {
  return (
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
        <h1 className="text-3xl md:text-5xl font-bold text-white">About Us</h1>

        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <img src={about} alt="About us" />
        </div>
        <div className="w-full md:w-1/2 py-5 md:py-10 px-5 md:pr-10 flex flex-col">
          <div className="flex gap-2 items-center text-green-600 font-semibold">
            <FaLeaf />
            <h1>The Tapestry of Change</h1>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold">Who We Are</h1>
          <h1 className="text-base md:text-lg mt-3 md:mt-5">
            The Society for Universal Oneness (SFUO), born in the verdant
            landscapes of North Carolina in October 2002, represents more than
            an organization—it is a testament to the power of collective action
            in fostering planetary stewardship. As a torchbearer of
            environmental consciousness, SFUO stands at the vanguard of uniting
            diverse entities—spanning businesses, governments, individuals, and
            fellow organizations—to weave a tapestry of transformative change.
            Our endeavors are sanctified by the IRS 501(c)(3) status, ensuring
            that every contribution furthers our shared mission and brings tax
            benefits to our supporters.
          </h1>
          <h1 className="my-3 md:my-5 text-lg md:text-xl font-bold">
            Vision in Focus
          </h1>
          <h1 className="text-base md:text-lg">
            SFUO is the crucible where science and spirituality meld, forging
            solutions and systems that not only remedy the past but pave a
            verdant path to the future. Our vision is a mosaic of saved lives,
            rejuvenated ecosystems, an advanced society, and a peace that
            transcends boundaries—reaching the zenith of global integration and
            universal interdependence.
          </h1>
        </div>
      </div>

      {/* About Data Columns */}
      <div className="flex flex-col md:flex-wrap md:flex-row px-5 md:px-10">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-5 md:p-10 flex flex-col gap-3"
          >
            <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
            <h1 className="text-base md:text-lg">{item.description}</h1>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div
        style={{
          backgroundImage: `url(${newsletterbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
        className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-5"
      >
        <div className="flex gap-5 md:gap-16 items-center">
          <img src={logo} alt="logo" />
          <h1 className="text-lg md:text-xl text-white">Join Our Newsletter</h1>
        </div>
        <div className="flex gap-3 mt-5 md:mt-0">
          <input
            className="w-full md:w-60 h-10 rounded-md p-2 bg-white"
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

export default About;
