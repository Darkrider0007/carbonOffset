import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > Divine Healer",
  subtitle: "Transform your beverages into elixirs of health",
  cta: "Discover the Science"
};

const introductionContent = {
  title: "Introducing the Divine Healer",
  subtitle: "Transforming Beverages into Elixirs of Health and Well-Being",
};

const Essence = {
  title: "The Essence of the Divine Healer",
  description:
    "The Divine Healer is a revolutionary innovation in beverage technology. It is more than just a filtration system—it is an alchemical tool that transforms everyday drinks into sources of healing and rejuvenation. Backed by a globally issued patent and groundbreaking research, the Divine Healer seamlessly integrates into domestic and commercial settings, offering unmatched flexibility, utility, and wellness benefits.",
  missionTitle: "Our Mission:",
  missionDescription:
    "Heal humanity through the transformative power of hydration.",
};

const impactOnBeverages = {
  title: "Transformative Impact on Beverages",
  description:
    "The Divine Healer imbues beverages with unique healing properties, ensuring that every sip promotes health and vitality. Here's how it can make an impact:",
  section: [
    {
      title: "For Home and Domestic Use:",
      points: [
        "Families can enjoy health benefits daily, ensuring hydration supports immunity, energy, and overall vitality.",
      ],
    },
    {
      title: "For Commercial Applications:",
      points: [
        "Breweries, Distilleries, and Wineries: Integrate the Divine Healer into production to offer consumers beverages with added health benefits.",
        "Juice and Soda Manufacturers: Enhance the wellness potential of every bottled product without altering taste or production processes.",
        "Hospitality and Cafes: Offer exclusive, health-boosting beverages as a value-add to elevate customer experience.",
      ],
    },
  ],
  summary:
    "Implemented just before bottling and carbonating, the Divine Healer's effect is invisible to the eye but invigorating to the body—a revolutionary way to create beverages that stand out in the market.",
};

const scientificallyProvenBenefits = {
  title: "Scientifically Proven Benefits",
  description:
    "The Divine Healer is not just an idea—it's backed by science. Studies have confirmed that liquids processed through our nano-filtration system demonstrate properties that:",
  points: [
    "Promote cellular healing and rejuvenation.",
    "Improve hydration efficiency and energy levels.",
    "Support immunity and overall well-being.",
    "Deliver tangible, measurable health benefits to consumers.",
  ],
  summary:
    "Each sip becomes a scientifically enriched step toward a healthier lifestyle.",
};

const collaborationOpportunitiesContent = {
  title: "Collaboration Opportunities",
  subtitle: "How We Can Achieve Greater Heights Together",
  description:
    "The Divine Healer is designed for everyone—individuals, students, small businesses, large industries, and organizations. By collaborating with us, you can harness this groundbreaking technology to improve lives, drive business growth, and support a sustainable future.",
  sections: [
    {
      title: "For Individuals & Families",
      icon: "🏠",
      points: [
        "Health at Home: Integrate the compact Divine Healer system into your kitchen and enjoy enhanced water quality every day.",
        "Ambassadors for Wellness: Spread awareness about the health benefits of Divine Healer in your networks.",
        "Affiliate Opportunities: Partner with us as an affiliate to promote Divine Healer products and earn incentives.",
      ],
    },
    {
      title: "For Students & Institutions",
      icon: "🎓",
      points: [
        "Research and Innovation Projects: Collaborate with us on studies to further explore the healing properties.",
        "Workshops and Internships: Gain hands-on experience with cutting-edge beverage technology.",
        "Health Campaigns: Promote hydration awareness and the importance of clean, healthy water.",
      ],
    },
    {
      title: "For Businesses & Startups",
      icon: "💼",
      points: [
        "Product Enhancement: Add the Divine Healer system to differentiate your beverages with health benefits.",
        "Corporate Wellness Programs: Use Divine Healer systems in offices to promote employee health.",
        "Partnership Programs: Develop co-branded beverage lines enriched by the Divine Healer.",
      ],
    },
    {
      title: "For Beverage Manufacturers",
      icon: "🏭",
      points: [
        "Turnkey Solutions: We offer scalable solutions for production facilities of all sizes.",
        "Innovation Integration: Customize systems for your production needs.",
        "Sustainability Impact: Enhance the value of your beverages naturally.",
      ],
    },
  ],
};

const ourCommitment = {
  title: "Our Commitment to Quality and Support",
  description:
    "At the Divine Healer, we prioritize quality, durability, and customer satisfaction:",
  points: [
    "1 - Year Warranty: Every system is backed by a comprehensive warranty to ensure reliability and peace of mind.",
    "Ongoing Support: Our expert team offers ongoing assistance, training, and troubleshooting for all clients.",
    "Global Reach: Our systems are designed to bring wellness benefits to homes, businesses, and industries worldwide.",
  ],
};

const sharedVisionContent = {
  title: "Elevate Your Beverages Today",
  description:
    "The Divine Healer represents the perfect synergy between science and nature. Whether you're an individual, business, or organization, now is the time to collaborate, innovate, and unlock the full potential of your beverages.",
  subTitle: "Let's Heal the World Together:",
  points: [
    "🌟 Improve health outcomes for individuals and communities.",
    "💼 Drive innovation and success in the beverage industry.",
    "🌍 Create a global impact through hydration and wellness.",
  ],
};

const contactContent = {
  contactInfo: [
    {
      "type": "email",
      "icon": "📧",
      "label": "Contact Us:",
      "value": "info@divine-healer.com",
      "link": "mailto:info@divine-healer.com"
    },
    {
      "type": "website",
      "icon": "🌐",
      "label": "Discover More:",
      "value": "Visit www.divine-healer.com to learn how you can integrate this groundbreaking technology into your life or business.",
      "link": "https://www.divine-healer.com"
    }
  ]
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Divinehealer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Navbar />

        {/* Hero Banner */}
        <div
          style={{
            backgroundImage: `url('${bannerContent.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // <-- Parallax effect
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative overflow-hidden"
        >
          <h1 className="text-3xl z-20 md:text-5xl font-bold text-white text-center">
            {bannerContent.title}
          </h1>

          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

          <img src={curve} className="absolute bottom-0 w-full z-20" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Introduction */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-16 md:mb-24 max-w-5xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
              {introductionContent.title}
            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-xl md:text-2xl text-gray-600">
              {introductionContent.subtitle}
            </motion.h3>
          </motion.section>

          {/* Essence Section */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {Essence.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {Essence.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600"
              >
                <h4 className="text-xl font-bold text-green-600 mb-2">
                  {Essence.missionTitle}
                </h4>
                <p className="text-lg text-gray-600">
                  {Essence.missionDescription}
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24"
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {impactOnBeverages.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {impactOnBeverages.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {impactOnBeverages.section.map((section, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'bg-green-600' : 'bg-gray-800'}`}
                  >
                    <div className="p-6">
                      <h4 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-white' : 'text-gray-100'}`}>
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`flex items-start ${index % 2 === 0 ? 'text-green-50' : 'text-gray-200'}`}
                          >
                            <span className="mr-2 mt-1">•</span>
                            <span className="text-lg">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-gray-600 mt-8 max-w-5xl mx-auto">
                {impactOnBeverages.summary}
              </p>
            </div>
          </motion.section>

          {/* Scientific Benefits */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24 bg-green-50 rounded-xl p-8"
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                {scientificallyProvenBenefits.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {scientificallyProvenBenefits.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {scientificallyProvenBenefits.points.map((point, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-lg p-4 shadow-sm flex items-start"
                  >
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-lg text-gray-600">{point}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-gray-600">
                {scientificallyProvenBenefits.summary}
              </p>
            </div>
          </motion.section>

          {/* Collaboration Opportunities */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                  {collaborationOpportunitiesContent.title}
                </h3>
                <h4 className="text-xl text-green-500 mb-4">
                  {collaborationOpportunitiesContent.subtitle}
                </h4>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {collaborationOpportunitiesContent.description}
                </p>
              </div>

              <div className="relative">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  loop
                  className="pb-10"
                >
                  {collaborationOpportunitiesContent.sections.map((section, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                      >
                        <div className="bg-green-600 px-6 py-6 text-center">
                          <div className="text-3xl mb-2">{section.icon}</div>
                          <h4 className="text-xl font-bold text-white">
                            {section.title}
                          </h4>
                        </div>
                        <div className="p-6 flex-grow">
                          <ul className="space-y-3">
                            {section.points.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start"
                              >
                                <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                                <p className="text-gray-600">{point}</p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.section>

          {/* Commitment Section */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24 bg-green-600 rounded-xl p-8 text-white"
          >
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {ourCommitment.title}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {ourCommitment.description}
              </p>

              <div className="space-y-3">
                {ourCommitment.points.map((point, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start bg-white/10 rounded-lg p-3"
                  >
                    <div className="bg-white/20 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16 md:mb-24 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-600 p-8 flex items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {sharedVisionContent.title}
                  </h3>
                  <p className="text-lg text-green-100 mb-6">
                    {sharedVisionContent.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h4 className="text-xl font-bold text-green-600 mb-4">
                  {sharedVisionContent.subTitle}
                </h4>
                <ul className="space-y-3">
                  {sharedVisionContent.points.map((point, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 3 }}
                      className="flex items-start bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-xl mr-2">{point.split(' ')[0]}</span>
                      <span className="text-lg text-gray-600">{point.split(' ').slice(1).join(' ')}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  {contactContent.contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 3 }}
                      className="flex items-center bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-xl mr-3">{info.icon}</span>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-green-600 hover:text-green-800 hover:underline"
                      >
                        {info.label} {info.value}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Divinehealer;