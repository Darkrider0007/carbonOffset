import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import curve from "../../assets/home/curve.png";
// Icons
import {
  FaLeaf,
  FaAward,
  FaRoad,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaRecycle,
  FaShieldAlt,
  FaGlobeAmericas,
  FaUsers,
  FaEnvelope
} from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > CMR Bitplast",
};

const introductionContent = {
  title: "CMR Bitplast – Wet Process Technology: Pioneering Sustainable Infrastructure",
  subtitle: "Transforming Waste Plastic into Durable Roads for a Sustainable Future",
};

const innovationForGreenerTomorrow = {
  title: "Innovation for a Greener Tomorrow",
  describe: "In an era where sustainability is a necessity, CMR Bitplast's wet process technology has emerged as a groundbreaking innovation in eco-friendly infrastructure development. By transforming waste plastic into a valuable resource for road construction, this technology addresses two pressing global challenges: plastic waste management and infrastructure durability.",
  subTitle: "Our Vision: ",
  subDescription: "Build roads that not only last longer but also protect the planet for future generations.",
};

const accreditationAndCertification = {
  title: "Accreditation and Certification",
  points: [
    "Indian Road Congress Accreditation: A mark of adherence to the highest standards in road construction.",
    "Certification by NIT (National Institute of Technology): Recognized as more efficient and effective than traditional dry processes.",
  ],
  summary: "This recognition showcases the technology's superior performance, making it a trusted solution for sustainable road construction.",
};

const EnvironmentalImpactandSustainability = {
  title: "Environmental Impact and Sustainability",
  description: "At the heart of CMR Bitplast is its commitment to environmental preservation and circular economy principles. The technology delivers significant ecological benefits:",
  points: [
    "Plastic Waste Management: Converts non-recyclable plastic into a construction resource, reducing landfill overflow and ocean pollution.",
    "Conservation of Natural Resources: Limits the consumption of virgin materials, promoting resource efficiency.",
    "Circular Economy Integration: Encourages reusability of materials, fostering sustainable development.",
  ],
  summary: "These benefits make CMR Bitplast a scalable and replicable model for green infrastructure globally.",
};

const implementationAndAchievements = {
  title: "Implementation and Achievements",
  discription: "CMR Bitplast's success speaks for itself:",
  points: [
    "800+ Kilometers of Roads: Successfully laid across Southern India, demonstrating real-world impact and viability.",
    "Adoption by Governments and Civil Societies: Recognized as a reliable solution for sustainable infrastructure by multiple stakeholders.",
    "Durability and Efficiency: Roads constructed using this technology have shown reduced wear, tear, and maintenance costs, ensuring longevity.",
  ],
  summary: "These achievements position CMR Bitplast as a proven model for implementing eco-friendly infrastructure solutions at scale.",
};

const SuperiorityOverTraditionalMethods = {
  title: "Superiority over Traditional Methods",
  description: "The CMR Bitplast wet process offers a clear advantage over traditional road construction techniques, particularly the dry process:",
  points: [
    "Homogeneous Mixture: Ensures thorough binding of plastic with bitumen, improving road strength and quality.",
    "Enhanced Durability: Roads are more resilient to wear and tear, significantly extending their lifespan.",
    "Reduced Maintenance Costs: Longer-lasting roads lead to lower repair and maintenance expenses.",
    "Sustainability Impact: Reduces the consumption of non-renewable resources and mitigates environmental pollution.",
  ],
  summary: "This innovative approach combines superior road performance with measurable environmental benefits.",
};

const collaborationOpportunitiesContent = {
  title: "Collaboration Opportunities: How We Can Achieve Greater Heights",
  description: "CMR Bitplast believes that collaboration is key to driving sustainable development. By joining forces with individuals, organizations, and governments, we can amplify the positive impact of this technology and address critical infrastructure and environmental challenges worldwide. Here's how different stakeholders can collaborate and benefit:",
  sections: [
    {
      title: "For Government Bodies and Municipalities:",
      icon: <FaShieldAlt className="text-2xl" />,
      points: [
        "Adopt Sustainable Policies: Integrate CMR Bitplast into road construction guidelines and infrastructure policies.",
        "Pilot Projects: Partner with us to implement pilot projects in urban and rural areas, showcasing the benefits of plastic roads.",
        "Environmental Impact Initiatives: Collaborate on programs to reduce plastic waste while building resilient infrastructure.",
        "Funding and Grants: Leverage government funding opportunities to scale the adoption of sustainable road technology.",
      ],
    },
    {
      title: "For Corporations and Businesses:",
      icon: <FaChartLine className="text-2xl" />,
      points: [
        "Corporate Social Responsibility (CSR): Partner with CMR Bitplast to fund or implement road construction projects that utilize waste plastic, aligning with sustainability goals.",
        "Waste Management Partnerships: Collaborate on collecting and repurposing plastic waste generated by businesses.",
        "Supply Chain Integration: Integrate CMR Bitplast technology into logistics and industrial infrastructure development.",
        "Brand Positioning: Showcase your commitment to environmental sustainability by supporting eco-friendly infrastructure initiatives.",
      ],
    },
    {
      title: "For Civil Societies and NGOs:",
      icon: <FaUsers className="text-2xl" />,
      points: [
        "Awareness Campaigns: Collaborate with CMR Bitplast to raise awareness about plastic waste management and its role in sustainable infrastructure.",
        "Community-Led Initiatives: Mobilize local communities to collect plastic waste for repurposing in road construction.",
        "Advocacy Programs: Partner with policymakers to promote sustainable road-building practices on national and global platforms.",
        "Funding Partnerships: Support infrastructure projects that bring tangible environmental and community benefits.",
      ],
    },
    {
      title: "For Educational Institutions and Researchers:",
      icon: <FaLightbulb className="text-2xl" />,
      points: [
        "Research and Development: Collaborate with us to improve and scale wet process technology for global adoption.",
        "Student Projects: Partner on internships, research studies, and field projects that explore sustainable engineering solutions.",
        "Skill Development Programs: Train future engineers and environmentalists in innovative infrastructure technologies.",
      ],
    },
    {
      title: "For Individuals and Local Communities:",
      icon: <FaRecycle className="text-2xl" />,
      points: [
        "Plastic Collection Drives: Participate in initiatives to collect and repurpose plastic waste for road construction.",
        "Community Advocacy: Encourage local governments and decision-makers to adopt eco-friendly infrastructure models.",
        "Volunteer Programs: Support implementation projects that bring sustainable infrastructure to your region.",
        "Educate and Share: Spread awareness about the environmental and economic benefits of waste plastic roads.",
      ],
    },
  ],
};

const sharedVisionContent = {
  title: "Join the Movement",
  description: "Together, we can revolutionize infrastructure development, reduce plastic waste, and create a sustainable future for generations to come:",
  points: [
    "Adopt Eco-Friendly Policies: Integrate waste plastic technology into your projects.",
    "Collaborate for Change: Partner with us to implement solutions that benefit the environment, economy, and society.",
    "Inspire Innovation: Be a leader in sustainable infrastructure development and global change.",
  ],
};

const contactContent = {
  contactInfo: [
    {
      "type": "email",
      "icon": "📧",
      "label": "Contact Us Today:",
      "value": "info@cmrbitplast.com",
      "link": "mailto:info@cmrbitplast.com"
    },
    {
      "type": "website",
      "icon": "🌍",
      "label": "Learn More:",
      "value": "Discover how we can transform infrastructure together at www.cmrbitplast.com",
      "link": "https://www.cmrbitplast.com"
    }
  ]
};

const stats = [
  { value: "800+", label: "Kilometers of Roads", icon: <FaRoad className="text-4xl" /> },
  { value: "100%", label: "Sustainable Solution", icon: <FaLeaf className="text-4xl" /> },
  { value: "2x", label: "Increased Durability", icon: <FaShieldAlt className="text-4xl" /> },
  { value: "50%", label: "Reduced Maintenance", icon: <FaChartLine className="text-4xl" /> },
];

const testimonials = [
  {
    quote: "CMR Bitplast has revolutionized our approach to sustainable infrastructure. Their technology is truly groundbreaking.",
    author: "Government Official",
    role: "Ministry of Transportation"
  },
  {
    quote: "The durability of roads built with CMR Bitplast exceeds our expectations while helping us meet sustainability goals.",
    author: "City Planner",
    role: "Municipal Corporation"
  },
  {
    quote: "As an environmental NGO, we fully endorse this innovative solution to plastic waste and infrastructure challenges.",
    author: "Director",
    role: "Environmental NGO"
  }
];

function Cmrbitplast() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SmoothScroll>
      <div className="bg-gray-50">
        <Navbar />

        {/* Modern Hero Banner with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url('${bannerContent.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative overflow-hidden"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl z-20 md:text-5xl font-bold text-white text-center"
          >
            {bannerContent.title}
          </motion.h1>

          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

          <motion.img
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            src={curve}
            className="absolute bottom-0 w-full z-20"
          />
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-green-700 py-12 mt-8"
        >
          <div className="container mx-auto px-6 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center text-white"
                >
                  <div className="flex justify-center text-green-200 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          {/* Introduction */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-20 max-w-5xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full mb-6 text-sm font-bold uppercase">
              Innovation in Sustainability
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {introductionContent.title}
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto mb-8"></motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-600 italic">
              {introductionContent.subtitle}
            </motion.h3>
          </motion.section>

          {/* Innovation Section with Tabs */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-24 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <motion.div variants={slideInFromLeft} className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaLightbulb className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {innovationForGreenerTomorrow.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {innovationForGreenerTomorrow.describe}
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400"
                >
                  <h4 className="text-xl font-semibold text-green-700 mb-2 flex items-center">
                    <FaLeaf className="mr-2" /> {innovationForGreenerTomorrow.subTitle}
                  </h4>
                  <p className="text-lg text-gray-600">
                    {innovationForGreenerTomorrow.subDescription}
                  </p>
                </motion.div>
              </motion.div>
              <motion.div variants={slideInFromRight} className="bg-gray-50 flex items-center justify-center p-8">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Sustainable Roads"
                  className="rounded-xl shadow-lg w-full h-auto max-h-96 object-cover"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Accreditation Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="mb-24 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FaAward className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold">
                  {accreditationAndCertification.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {accreditationAndCertification.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <p className="text-lg italic">
                  {accreditationAndCertification.summary}
                </p>
              </motion.div>
            </div>
          </motion.section>
          
          {/* Environmental Impact with Interactive Cards */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                {EnvironmentalImpactandSustainability.title}
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-24 h-1 bg-green-500 mx-auto mb-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {EnvironmentalImpactandSustainability.description}
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {EnvironmentalImpactandSustainability.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg h-96"
                >
                  {/* Background Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-700/90 to-green-900/90 z-10"></div>
                  <div className="absolute inset-0 bg-gray-900 opacity-30 z-0">
                    <img
                      src={[
                        "https://images.unsplash.com/photo-1610355977372-c5d864a0a5c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      ][index]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                    <div className="mb-4 text-green-300 text-4xl">
                      {index === 0 && <FaRecycle />}
                      {index === 1 && <FaLeaf />}
                      {index === 2 && <FaGlobeAmericas />}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">
                      {point.split(':')[0]}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {point.split(':')[1]}
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                      className="h-1 bg-green-400 origin-left"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 bg-green-50 p-8 rounded-xl max-w-4xl mx-auto text-center"
            >
              <p className="text-xl text-gray-700">
                {EnvironmentalImpactandSustainability.summary}
              </p>
            </motion.div>
          </motion.section>

          {/* Implementation Achievements */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-24"
          >
            <div className="flex items-center mb-10">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaChartLine className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {implementationAndAchievements.title}
              </h3>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {implementationAndAchievements.discription}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {implementationAndAchievements.points.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-green-500 text-3xl mb-4">
                    {index === 0 && <FaRoad />}
                    {index === 1 && <FaHandshake />}
                    {index === 2 && <FaShieldAlt />}
                  </div>
                  <p className="text-gray-600">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-green-50 p-6 rounded-lg max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-600 italic text-center">
                {implementationAndAchievements.summary}
              </p>
            </motion.div>
          </motion.section>

          {/* Superiority Section with Comparison Table */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="mb-24 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {SuperiorityOverTraditionalMethods.title}
                </h3>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {SuperiorityOverTraditionalMethods.description}
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-left">Traditional Method</th>
                      <th className="py-3 px-4 text-left">CMR Bitplast</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {SuperiorityOverTraditionalMethods.points.map((point, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="py-4 px-4 font-medium">{point.split(':')[0]}</td>
                        <td className="py-4 px-4 text-gray-600">
                          <div className="flex items-center text-red-500">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Limited
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          <div className="flex items-center text-green-500">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {point.split(':')[1]}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-green-50 p-6 rounded-lg"
              >
                <p className="text-lg text-gray-600 italic">
                  {SuperiorityOverTraditionalMethods.summary}
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Collaboration Opportunities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24"
          >
            <div className="flex items-center mb-10">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaHandshake className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {collaborationOpportunitiesContent.title}
              </h3>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
              {collaborationOpportunitiesContent.description}
            </p>

            <motion.div
              whileHover={{ scale: 1.005 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200 flex space-x-4 overflow-x-auto">
                {collaborationOpportunitiesContent.sections.map((section, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center ${activeTab === index ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {section.icon && <span className="mr-2">{section.icon}</span>}
                    {section.title.split(':')[0]}
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="p-6"
              >
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  {collaborationOpportunitiesContent.sections[activeTab].icon && (
                    <span className="mr-2">{collaborationOpportunitiesContent.sections[activeTab].icon}</span>
                  )}
                  {collaborationOpportunitiesContent.sections[activeTab].title}
                </h4>
                <ul className="space-y-3">
                  {collaborationOpportunitiesContent.sections[activeTab].points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Testimonials Slider */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="mb-24 bg-green-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">What Our Partners Say</h3>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 p-8 rounded-xl h-full backdrop-blur-sm"
                  >
                    <div className="text-green-200 text-5xl mb-4">"</div>
                    <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-white/70">{testimonial.role}</div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <motion.div variants={slideInFromLeft} className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  {sharedVisionContent.title}
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {sharedVisionContent.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {sharedVisionContent.points.map((point, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <span className="text-green-200 mr-2 mt-1">•</span>
                      <span className="text-white">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={slideInFromRight} className="bg-white/10 p-8 md:p-12 backdrop-blur-sm flex flex-col justify-center">
                <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <FaEnvelope className="mr-3" /> Contact Us
                </h4>

                <ul className="space-y-4">
                  {contactContent.contactInfo.map((info, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-white mr-3 mt-1">{info.icon}</span>
                      <div>
                        <div className="text-white/80 font-medium">{info.label}</div>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-200 hover:text-white underline"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.section>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Cmrbitplast;