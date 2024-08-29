import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";
import one from "../assets/projects/1.png";
import two from "../assets/projects/2.png";
import three from "../assets/projects/3.png";
import four from "../assets/projects/4.png";

import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getProjects } from "../api/addProject";

const projectDataDummy = [
  {
    id: 1,
    image: one,
    title: "CLEAN KAILASH",
    desc: "Cleanliness and Environmental Awareness Campaign The Essence of Cleanliness Our initiative underscores the importance of cleanliness, particularly in…",
    url: "#",
  },
  {
    id: 2,
    image: two,
    title: "Net Negative Footprint",
    desc: "Revolutionizing Environmental Responsibility The concept of a net negative footprint represents a transformative approach to sustainability. Unlike traditional…",
    url: "#",
  },
  {
    id: 3,
    image: three,
    title: "Universal Identification Number(UIN)",
    desc: "Universal Identification Number (UIN):Enhancing Global Security Introduction to UIN Technology The Universal Identification Number (UIN)",
    url: "#",
  },
  {
    id: 4,
    image: four,
    title: "ENVIRONMENTAL POWER GENERATION",
    desc: "Pedal-Powered Generator: k-12 ProjectIEEE ENCS and Society for Universal Oneness (www.sfuo.org), a non-profit organization stepped forward to…",
    url: "#",
  },
];

const OurProjects = () => {
  const [projectData, setProjectData] = useState(projectDataDummy);

  const image = [one, two, three, four];

  useEffect(() => {
    let isMounted = true;

    const fetchdata = async () => {
      try {
        const res = await getProjects();

        if (isMounted) {
          setProjectData(prev => {
            const transformedData = res.map((project: any, index: any): any => ({
              id: prev.length + index + 1, // Unique and incremental IDs
              image: image[index % image.length], // Cycles through the images
              title: project.name,
              desc: project.details.replace(/<[^>]+>/g, ''), // Strips HTML tags if needed
              url: "#",
            }));

            console.log('Transformed Data:', transformedData);
            return [...prev, ...transformedData];
          });
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchdata();

    return () => {
      isMounted = false; // Cleanup function to avoid setting state if the component is unmounted
    };
  }, []); // Empty dependency array ensures this effect runs only once




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
        <h1 className="text-5xl font-bold text-white">Our Projects</h1>

        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* projects section  */}
      <div className="p-24 flex flex-col gap-20">
        {projectData.map((project: any) => (
          <div
            key={project.id}
            style={
              project.id % 2 === 0
                ? { flexDirection: "row" }
                : { flexDirection: "row-reverse" }
            }
            className="flex gap-10 h-[60vh] shadow-xl"
          >
            <img src={project.image} alt={project.title} className="" />
            <div className="flex flex-col px-12 gap-6 justify-center ">
              <h1 className="text-4xl text-gray-600 font-bold">
                {project.title}
              </h1>
              <h1 className="text-xl">{project.desc}</h1>
              <button className="border-2 border-green-600 w-40 py-3 text-lg rounded-xl text-green-600 font-bold">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* newsletter  */}

      <div
        style={{
          backgroundImage: `url(${newsletterbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
        className="flex items-center justify-between px-16"
      >
        <div className="flex gap-16 items-center  ">
          <img src={logo} alt="logo" />
          <h1 className="text-xl text-white">Join Our Newsletter</h1>
        </div>
        <div className="flex gap-3">
          <input
            className="w-60 h-10 rounded-md p-2 bg-white "
            placeholder="Enter your email"
          />
          <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md ">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProjects;
