import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import parse from "html-react-parser";
import SmoothScroll from "../components/SmoothScroll";

function Project() {
  const location = useLocation();
  const projectData = location.state || {
    name: "Tree Planting for Carbon Reduction",
    details: "<p>Our core mission is to plant trees to absorb carbon dioxide, combat climate change, and enhance biodiversity for a healthier planet.</p>",
    location: "Various locations",
    status: "Ongoing",
    createdAt: new Date().toISOString(),
  };

  const detailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      if (detailsRef.current) {
        observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <SmoothScroll>
      <div className="overflow-hidden">
        <Navbar />

        {/* Hero Section - Enhanced with gradient overlay and modern typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.9) 100%), url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply"
          }}
          className="relative flex items-center justify-center min-h-[70vh] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto"
          >
            <motion.p 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-white/90 tracking-wider uppercase"
            >
              Project Spotlight
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl leading-tight">
              {projectData.name}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-white mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          <motion.img 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            src={curve} 
            className="absolute bottom-0 w-full" 
            alt="curve" 
          />
        </motion.div>

        {/* Project Details Section - Modern card layout with glass morphism effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            {/* Project Image with modern frame */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-16 group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-30 group-hover:opacity-60 blur-md transition-all duration-500"></div>
              <motion.img
                whileHover={{ scale: 1.01 }}
                src={projectData.image}
                alt="project"
                className="relative w-full rounded-xl shadow-2xl object-cover aspect-video z-10 border-4 border-white"
              />
            </motion.div>

            {/* Project Details - Modern layout with glass cards */}
            <motion.div 
              ref={detailsRef}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 opacity-0"
            >
              {/* Main Content */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-2 space-y-8"
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 relative pb-4">
                    Project Overview
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></span>
                  </h2>
                  <div className="project-details text-lg leading-relaxed text-gray-600 space-y-6">
                    {parse(projectData.details)}
                  </div>
                </motion.div>

                {/* Additional Details Section */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Impact & Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Carbon Sequestration</h4>
                        <p className="text-gray-600 mt-1">Estimated 5000 tons CO₂ absorbed annually</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Biodiversity</h4>
                        <p className="text-gray-600 mt-1">Supporting 50+ native species</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Community</h4>
                        <p className="text-gray-600 mt-1">Engaging 200+ local volunteers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Education</h4>
                        <p className="text-gray-600 mt-1">10+ workshops conducted</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Project Meta - Sticky sidebar */}
              <motion.div 
                variants={itemVariants}
                className="space-y-8 lg:sticky lg:top-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 relative pb-4">
                    Project Details
                    <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700">Location</h4>
                        <p className="text-gray-600 mt-1">{projectData.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700">Started</h4>
                        <p className="text-gray-600 mt-1">{new Date(projectData.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700">Status</h4>
                        <p className="mt-1">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            projectData.status === "Ongoing" 
                              ? "bg-green-100 text-green-800" 
                              : projectData.status === "Completed" 
                                ? "bg-blue-100 text-blue-800" 
                                : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {projectData.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl shadow-xl text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Support This Project</h3>
                  <p className="mb-6 opacity-90">Join us in making a difference for our planet and future generations.</p>
                  {/* <button className="w-full bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Involved
                  </button> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter */}
        <Newsletter />

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Project;