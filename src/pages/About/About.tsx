import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import about from "../../assets/about/about.png";
import { FaLeaf } from "react-icons/fa";
import Newsletter from "../../components/Newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import SmoothScroll from "../../components/SmoothScroll";

// Define types for the data items
interface AboutDataItem {
  title: string;
  description: string;
}

interface ServicesDataItem {
  trigger: string;
  content: string;
}

const aboutData: AboutDataItem[] = [
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

const servicesData: ServicesDataItem[] = [
  {
    trigger: "Business and IP Consulting",
    content:
      "Business and IP Consulting (Business Plans, Business Case, Proposals, Business Analysis, Enterprise Reengineering, Create Intellectual Property, Consultation to File Patents, Create Business Analysis Reports)",
  },
  {
    trigger: "Technology Consulting",
    content:
      "Technology Consulting (IT, Medical Science, Engineering, Interdisciplinary): Creating Technology Reports, Executing Technology Projects from Concepts to Commissioning on a turn-key basis.",
  },
  {
    trigger: "Environment Friendly Power Generation",
    content:
      "Environment Friendly Power Generation: IP creation, File Patent, Build Prototype, Turn Key Projects, Create Environment Friendly Communities.",
  },
  {
    trigger: "Information Technology",
    content:
      "Information Technology: Understanding client needs, pain points, business priorities, budget constraints and relate these to state of the art in technology to create roadmap and solution architecture for realizable initiatives. Areas of expertise span AI/ML, Big Data and Analytics, 5G, IoT, Cognitive Computing, Microservice, Service Oriented Architecture, transforming legacy applications, building software from the ground up, re-architecting, software engineering, process improvement and re-engineering, agile development, program management, and programming services.",
  },
  {
    trigger: "System Dynamics",
    content:
      "System Dynamics: Modeling complex problems for root cause analysis, and researching scope for improvement. Scope can range from social to technical to environmental problems.",
  },
];

const About: React.FC = () => {
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            About Us
          </h1>
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
              an organization—it is a testament to the power of collective
              action in fostering planetary stewardship. As a torchbearer of
              environmental consciousness, SFUO stands at the vanguard of
              uniting diverse entities—spanning businesses, governments,
              individuals, and fellow organizations—to weave a tapestry of
              transformative change. Our endeavors are sanctified by the IRS
              501(c)(3) status, ensuring that every contribution furthers our
              shared mission and brings tax benefits to our supporters.
            </h1>
            <h1 className="my-3 md:my-5 text-lg md:text-xl font-bold">
              Vision in Focus
            </h1>
            <h1 className="text-base md:text-lg">
              SFUO is the crucible where science and spirituality meld, forging
              solutions and systems that not only remedy the past but pave a
              verdant path to the future. Our vision is a mosaic of saved lives,
              rejuvenated ecosystems, an advanced society, and a peace that
              transcends boundaries—reaching the zenith of global integration
              and universal interdependence.
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

        {/* Services Section */}
        <div className="flex flex-col w-full items-start p-6 md:px-20 text-lg my-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 pb-2 inline-block">
            Services
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {servicesData.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline w-full text-start hover:text-green-900 font-semibold py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm mb-2 transition duration-200 ease-in-out transform hover:-translate-y-1">
                  {service.trigger}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 p-4 w-full bg-green-50 border-l-4 border-green-400 rounded-b-md">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Future Vision and Roadmap */}
        <div className="flex flex-col w-full items-center p-6 md:px-20 text-lg my-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 border-b-4 border-green-600 pb-2 inline-block">
            Future Vision and Roadmap
          </h1>
          <img
            src="https://1world1nation.org/wp-content/uploads/2024/02/Screen-Shot-2019-06-28-at-3.10.48-PM-1024x496.png"
            alt="Future Vision and Roadmap"
            className="w-full max-w-4xl rounded-lg shadow-lg mt-4"
          />
        </div>

        <div className="w-full flex justify-center items-center my-10 px-4 md:px-0">
          <iframe
            width="100%"
            height="auto"
            style={{ maxWidth: "650px", aspectRatio: "16/9" }}
            src="https://www.youtube.com/embed/AH1uw5PbWqQ?si=V2WQNkMELukw2OWR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default About;
