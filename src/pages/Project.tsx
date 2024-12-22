import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Project() {
  const location = useLocation();
  const projectData = location.state || {
    name: "Tree Planting for Carbon Reduction",
    details:
      "<p>Our core mission is to plant trees to absorb carbon dioxide, combat climate change, and enhance biodiversity for a healthier planet.</p>",
    location: "Various locations",
    status: "Ongoing",
    createdAt: new Date().toISOString(),
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          width: "100%",
        }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Our Project
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            {projectData.name}
          </h2>
        </div>

        <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
      </div>

      {/* Project Details Section */}
      <div className="py-16 px-4 md:px-20 lg:px-40 bg-gray-50">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 text-gray-700 space-y-6">
            <div className="w-full flex items-center justify-center">
              <img
                src={projectData.image}
                alt="project"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-green-600">
              {projectData.name}
            </h2>

            <div
              className="text-lg leading-relaxed text-gray-600"
              dangerouslySetInnerHTML={{ __html: projectData.details }}
            ></div>

            <div className="text-base md:text-lg text-gray-600">
              <p>
                <strong>Location:</strong> {projectData.location}
              </p>
              <p>
                <strong>Status:</strong> {projectData.status}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(projectData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Project;
