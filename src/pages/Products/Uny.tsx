import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import { FaLeaf, FaGlobe, FaMoneyBillWave, FaHandHoldingHeart, FaEnvelope, FaGlobeAmericas, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const benefits = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-green-600" />,
    title: "Real Value for Investors",
    description: "Grounded in appreciating green assets and sustainable projects with measurable impact."
  },
  {
    icon: <FaLeaf className="text-4xl text-green-600" />,
    title: "Environmental Stewardship",
    description: "Direct contribution to carbon reduction and ecosystem restoration through every transaction."
  },
  {
    icon: <FaGlobe className="text-4xl text-green-600" />,
    title: "Global Economic Shift",
    description: "Pioneering the transition to a green economy with tangible financial instruments."
  }
];

const featureCards = [
  {
    title: "Phased Decentralization",
    description: "Gradual decentralization to ensure stability during development.",
    bg: "bg-gradient-to-br from-green-50 to-white"
  },
  {
    title: "Asset-Backed Value",
    description: "Hypothecated green assets provide intrinsic value to each UNY token.",
    bg: "bg-gradient-to-br from-blue-50 to-white"
  },
  {
    title: "Global Transformation",
    description: "All assets will be converted to UNY, creating a unified green economy.",
    bg: "bg-gradient-to-br from-teal-50 to-white"
  }
];

function Uny() {

  return (
    <SmoothScroll>
      <div className="bg-white text-gray-800 overflow-hidden">
        <Navbar />

        {/* Hero Section with Animated Background */}
        <div className="relative h-[70vh] bg-gradient-to-r from-green-700 to-teal-800 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
          </motion.div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to <span className="text-green-300">UNY</span>
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white max-w-3xl mb-8"
            >
              The World's First Digital Green Currency
            </motion.p>


          </div>

          <img src={curve} className="absolute bottom-0 w-full z-20" alt="curve" />
        </div>

        {/* Modern Climate Crisis Section */}
        <div className="relative py-20 bg-gradient-to-br from-white to-green-50 overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')] bg-cover bg-center opacity-20" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 p-3 bg-green-100 rounded-full pr-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaGlobe className="text-green-600 text-3xl md:text-4xl" />
                  </motion.div>
                  <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                    Addressing the Global Climate Crisis
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Climate change is the defining challenge of our time. UNY is currently in its development phase as the world's first digital green currency designed to drive sustainability, economic growth, and environmental equity.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100%", label: "Sustainable" },
                    { value: "24/7", label: "Global Impact" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                      <p className="text-gray-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-tr from-green-100 to-teal-100 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Climate action"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-800/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium">UNY Initiative</p>
                    <h3 className="text-xl font-bold mt-1">Building a Greener Future</h3>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-green-200/50 blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-teal-200/50 blur-xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* What is UNY Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center gap-4 mb-6">
                <FaLeaf className="text-green-600 text-4xl" />
                <h2 className="text-3xl md:text-4xl font-bold">What is UNY?</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                UNY aims to become the world's first digital green currency, backed by sustainable assets and green technologies, ensuring its value remains resilient and impactful.
              </p>
            </motion.div>

            {/* Interactive Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`${card.bg} p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Carousel */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              UNY is Envisioned to <span className="text-green-600">Deliver</span>
            </h2>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-12"
            >
              {benefits.map((benefit, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="h-full bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Cards Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Reaching New Heights Together",
                    description: "Collaboration during this development phase will help us:",
                    points: [
                      "Foster Innovation",
                      "Scale Global Impact",
                      "Accelerate Adoption",
                      "Achieve Carbon Neutrality"
                    ]
                  },
                  {
                    title: "Visionary Development Opportunity",
                    description: "Engaging with UNY during its development phase offers a unique chance to:",
                    points: [
                      "Shape the Future",
                      "Early Engagement Opportunities",
                      "Create Lasting Impact"
                    ]
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-lg text-gray-600 mb-4 italic">{card.description}</p>
                    <ul className="space-y-2">
                      {card.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                            <FaChevronRight className="text-green-600 text-sm" />
                          </div>
                          <span className="text-lg text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-4xl aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lc8U3CxLbmA"
                  title="UNY Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-green-700 to-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-green-300 p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <FaHandHoldingHeart className="text-green-300 text-4xl" />
                    <h2 className="text-3xl md:text-4xl font-bold">Join the Movement for a Sustainable Future</h2>
                  </div>
                  <div className="space-y-4 text-lg text-white">
                    <p>
                      UNY invites you to be part of a global mission to revolutionize finance and combat climate change.
                    </p>
                    <div className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Revolutionize the global economy with a sustainable currency</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Combat climate change through innovative, impactful solutions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Create a prosperous and equitable future for generations to come</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 bg-white bg-opacity-10 p-6 rounded-lg">
                  <p className="font-semibold text-xl mb-4">Ways to Get Involved:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Collaborate: Share your expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Advocate: Spread awareness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                        <FaChevronRight className="text-green-300 text-sm" />
                      </div>
                      <span>Prepare to Invest: Stay informed</span>
                    </li>
                  </ul>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-green-300" />
                      <a href="mailto:info@ouruny.com" className="hover:underline">
                        info@ouruny.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGlobeAmericas className="text-green-300" />
                      <a href="https://www.ouruny.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        www.ouruny.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Uny;