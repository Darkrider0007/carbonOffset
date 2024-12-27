import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getProjects } from "../api/addProject";
import parse from "html-react-parser";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";

const OurProjects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await getProjects();
        setProjectData(res);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchdata();
  }, []);

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
            Our Projects
          </h1>

          <img src={curve} className="absolute bottom-0 w-full" />
        </div>

        {/* projects section */}
        <div className="p-5 md:p-24 flex flex-col gap-10 md:gap-20">
          {projectData.map((project: any, index: number) => (
            <div
              key={project._id}
              className={`flex flex-col md:flex-row p-4 rounded-md ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-5 md:gap-10 h-auto md:h-[70vh] shadow-xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 object-cover hover:scale-105 transform transition duration-500 ease-out rounded-md"
              />
              <div className="flex flex-col px-5 md:px-12 gap-6 justify-center w-full md:w-1/2">
                <h1 className="text-2xl md:text-4xl text-gray-600 font-bold">
                  {project.name}
                </h1>
                <h1 className="text-lg md:text-xl">
                  {parse(
                    project.details.split(" ").slice(0, 20).join(" ") + "..."
                  )}
                </h1>

                <Link
                  to={`/projects/${project._id}`}
                  state={project}
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 w-32 md:w-40 py-2 md:py-3 mb-4 text-lg rounded-xl text-white font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* newsletter */}
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default OurProjects;
