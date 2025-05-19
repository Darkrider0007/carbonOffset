import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import SmoothScroll from "../../components/SmoothScroll";
import { FaUser, FaBuilding, FaCity, FaChild, FaUndo, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

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

// Icon animation variants
const iconVariants = {
  rest: { 
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0], // Gentle wiggle effect
    transition: { 
      duration: 0.6,
      rotate: { 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }
};

const Membership: React.FC = () => {
  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <motion.div
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div 
            className="relative z-10 text-center space-y-4"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Membership
            </h1>
          </motion.div>
          <motion.img 
            src={curve} 
            className="absolute bottom-0 w-full" 
            alt="curve" 
            variants={itemVariants}
          />
        </motion.div>

        {/* Membership Benefits */}
        <motion.div 
          className="px-5 md:px-20 lg:px-40 py-16 bg-white text-gray-800"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-green-600 mb-6"
            variants={itemVariants}
          >
            SFUO Membership
          </motion.h2>
          
          <motion.p 
            className="text-lg leading-relaxed text-gray-600 mb-10"
            variants={itemVariants}
          >
            Joining SFUO opens a world of personal and professional opportunities. Whether as an individual or corporate member, you connect with a network of like-minded people to create peace-focused projects and shape a future where sustainable living is a reality.
          </motion.p>

          {/* Individual Membership */}
          <motion.section 
            className="mb-14 bg-gray-50 p-6 md:p-10 rounded-lg shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaUser className="text-green-600 text-2xl" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
                Individual Membership
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 mb-4 mt-4">
              With an annual membership fee of <strong>$100</strong>, individual members gain a Universal Identification Number (UIN) and access to global networking for professional, social, and personal interests. SFUO invites individuals to contribute to global initiatives through volunteering, forming a virtual government, or launching projects.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Opportunity for family exchange programs and travel abroad.</li>
              <li>Participation in futurecity initiatives and global villages.</li>
              <li>Access to world-class institutes and futuristic research areas.</li>
            </ul>
            {/* <motion.button 
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now 
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button> */}
          </motion.section>

          {/* Corporate Membership */}
          <motion.section 
            className="mb-14 bg-gray-100 p-6 md:p-10 rounded-lg shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaBuilding className="text-green-600 text-2xl" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
                Corporate Membership
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 mb-4 mt-4">
              For an annual fee of <strong>$500</strong>, corporate members can join a synergy-rich platform, collaborating on mega-projects with futurecity Inc. This membership enables companies to contribute to eco-friendly urban planning and gain from a robust network.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Access to SFUO's integrated technology and opportunity platform.</li>
              <li>Business affiliate status with futurecity Inc. for mega-projects.</li>
              <li>Support through patenting and commercialization processes.</li>
            </ul>
            {/* <motion.button 
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now 
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.button> */}
          </motion.section>

          {/* Futurecity Options */}
          <motion.section 
            className="mb-14"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaCity className="text-green-600 text-2xl" />
              </motion.div>
              <h3 className="text-3xl font-bold text-green-600">
                Futurecity Options
              </h3>
            </div>

            {/* Build My Home */}
            <motion.div 
              className="mb-8 bg-gray-50 p-5 md:p-8 rounded-lg shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-2xl font-semibold mb-3">Build My Home</h4>
              <p className="text-lg leading-relaxed text-gray-600 mb-4">
                SFUO members can build homes in futurecities or global villages. Starting at <strong>$100/month</strong>, members invest in eco-friendly living infrastructure.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Contributions are cumulative and can be used to acquire units in tiny homes or larger structures based on investment.
              </p>
            </motion.div>

            {/* Educate My Child */}
            <motion.div 
              className="mb-8 bg-gray-100 p-5 md:p-8 rounded-lg shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <FaChild className="text-green-600 text-2xl" />
                </motion.div>
                <h4 className="text-2xl font-semibold">Educate My Child</h4>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 mb-4 mt-4">
                Members may enroll their children in global institutions by contributing <strong>$100/month</strong>. These contributions accumulate over five years.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                The funds aid in building futurecities and world-class educational systems for a sustainable future.
              </p>
            </motion.div>
          </motion.section>

          {/* Refund Policy */}
          <motion.section 
            className="mb-14 bg-gray-50 p-6 md:p-10 rounded-lg shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaUndo className="text-green-600 text-2xl" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
                Refund Policy
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 mb-4 mt-4">
              Membership fees are non-refundable. However, contributions to futurecity options are refundable after every five-year cycle. For instance, <strong>$24,000</strong> saved over five years can be withdrawn or reinvested.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Members benefit from options like lifetime retirement housing or professional education for family members in peaceful, green communities.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section 
            className="mb-14 bg-gray-100 p-6 md:p-10 rounded-lg shadow"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
              >
                <FaEnvelope className="text-green-600 text-2xl" />
              </motion.div>
              <h3 className="text-3xl font-bold text-green-600">
                Contact Us
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 mb-4 mt-4">
              Interested in becoming a member or learning more about futurecity options? Reach out to us:
            </p>
            <address className="text-lg not-italic leading-relaxed text-gray-600">
              Society for Universal Oneness and futurecity Inc.<br />
              100 Saint Ayers Way,<br />
              Chapel Hill, NC 27517-2362, USA<br />
              <a href="mailto:member@1world1nation.org" className="text-blue-600 underline hover:text-blue-800">
                member@1world1nation.org
              </a>
            </address>
          </motion.section>
        </motion.div>

        {/* Newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Membership;