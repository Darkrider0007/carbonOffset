import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import { FaLeaf } from "react-icons/fa";

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > Bamboohut",
};

const introductionContent = {
  title: "Welcome to Bamboo Hut: Pioneering Sustainable Living",
  subtitle: "Innovative Green Homes for a Greener Future",
  description:
    "At Bamboo Hut, we are creating a movement that unites sustainable living, modern design, and community engagement. With our demo now ready, we invite individuals, students, businesses, and organizations to collaborate with us to achieve a greener future and shared success.",
};

const greenLoyaltyProgramContent = {
  title: "The Green Loyalty Program: Rewarding Sustainable Choices",
  description:
    "Our Green Loyalty Program encourages eco-friendly actions and creates a system where sustainability is rewarding for everyone. Here's how it works: ",
  points: [
    "Earn Green Points: Take part in sustainable activities such as recycling, energy-saving initiatives, or community projects.",
    "Redeem Rewards: Use your points for discounts, exclusive offers, eco-friendly products, and even redeemable dwelling unit nights for stays at Bamboo Hut homes.",
    "Create a Positive Impact: Every action contributes to a cleaner, healthier planet and aligns your lifestyle with sustainability goals.",
  ],
  benefits: [
    "Individuals can reduce living costs through rewards.",
    "Students can earn points for participating in green workshops and activities.",
    "Companies can leverage the program to enhance their corporate sustainability practices and reward eco-conscious customers or employees.",
  ],
};

const sustainableDesignContent = {
  title: "Sustainable Design and Construction",
  description:
    "Bamboo Hut homes are carefully designed with innovation and sustainability in mind:",
  points: [
    "Eco-Friendly Materials: Built using durable, renewable construction-grade bamboo and other environmentally friendly resources.",
    "Renewable Energy Integration: Equipped with solar panels, wind turbines, and energy-efficient systems to lower energy consumption.",
    "Nature-Inspired Design: Elevated, tree-nestled homes that seamlessly merge with their natural surroundings.",
    "Energy Efficiency: Optimized architecture minimizes waste and ensures a reduced carbon footprint.",
  ],
};

const collaborationOpportunitiesContent = {
  title: "Collaboration Opportunities: Together We Reach New Heights",
  description:
    "Bamboo Hut thrives on collaboration. Whether you're an individual, student, company, or organization, you can contribute to and benefit from this sustainable revolution.",
  sections: [
    {
      title: "For Individuals and Families:",
      points: [
        "Live Sustainably: Adopt a greener lifestyle by choosing Bamboo Hut homes and participating in community-driven initiatives.",
        "Join the Loyalty Program: Earn rewards for sustainable actions and benefit from eco-friendly incentives.",
        "Get Involved Locally: Contribute to community gardening, renewable energy projects, and clean-up initiatives to foster positive change.",
      ],
    },
    {
      title: "For Students:",
      points: [
        "Learning Opportunities: Participate in workshops, internships, and projects that promote sustainability and innovation.",
        "Contribute Ideas: Collaborate with us to develop new solutions for energy efficiency, recycling, or community engagement.",
        "Green Points Rewards: Earn rewards for participating in eco-friendly activities and community development programs.",
      ],
    },
    {
      title: "For Businesses:",
      points: [
        "Partnership Opportunities: Collaborate with Bamboo Hut to supply eco-friendly products, services, or technologies.",
        "Achieve Sustainability Goals: Use our platform to enhance your Environmental, Social, and Governance (ESG) ratings and CSR initiatives.",
        "Incentivize Employees and Customers: Join our loyalty program to reward employees and clients for adopting sustainable practices.",
        "Pilot Projects: Partner with us on renewable energy and green housing innovations tailored for your industry.",
      ],
    },
    {
      title: "For Organizations and NGOs:",
      points: [
        "Policy Advocacy: Work with Bamboo Hut to develop and promote policies that encourage sustainable living and green infrastructure.",
        "Research and Innovation: Partner with us to develop scalable and impactful solutions in renewable energy, sustainable construction, and eco-community models.",
        "Grants and Funding: Support or invest in Bamboo Hut initiatives that align with your mission to combat climate change.",
      ],
    },
  ],
};

const sharedVisionContent = {
  title: "A Shared Vision: Building the Future Together",
  description:
    "Our vision is simple—to make sustainable living a reality for everyone. With our demo ready, we are actively seeking partnerships, participation, and support to scale Bamboo Hut to greater heights.",
  points: [
    "Experience Our Demo: Explore how Bamboo Hut homes and communities work.",
    "Partner with Us: Collaborate to implement green solutions.",
    "Take Action Today: Live sustainably, contribute locally, and spread awareness.",
  ],
};

const contactContent = {
  contactInfo: [
    {
      "type": "email",
      "icon": "📧",
      "label": "Contact Us:",
      "value": "info@our-bamboo.com",
      "link": "mailto:info@our-bamboo.com"
    },
    {
      "type": "website",
      "icon": "🌍",
      "label": "Discover Bamboo Hut:",
      "value": "Where innovation meets sustainability",
      "link": "#"
    }
  ]
};

function Bamboohut() {
  return (
    <SmoothScroll>
      <div className="bg-gray-50">
        <Navbar />
        
        {/* Hero Banner */}
        <div
          style={{
            backgroundImage: `url('${bannerContent.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative"
        >
          <h1 className="text-4xl z-20 md:text-6xl font-bold text-white">
            {bannerContent.title}
          </h1>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-20 lg:px-40 py-16">
          {/* Introduction */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2">
                <div className="flex gap-2 items-center mb-4">
                  <FaLeaf color="green" />{" "}
                  <h1 className="uppercase font-bold text-sm text-green-600">
                    Sustainable Living
                  </h1>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {introductionContent.title}
                </h2>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {introductionContent.subtitle}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {introductionContent.description}
                </p>
              </div>
            </div>
          </section>

          {/* Green Loyalty Program */}
          <section className="my-20 bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-green-600 mb-8">
              {greenLoyaltyProgramContent.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {greenLoyaltyProgramContent.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {greenLoyaltyProgramContent.points.map((point, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg">
                  <div className="text-green-600 text-2xl font-bold mb-2">{index + 1}.</div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <h4 className="text-2xl font-bold text-green-600 mb-6">Benefits:</h4>
            <ul className="space-y-4">
              {greenLoyaltyProgramContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sustainable Design */}
          <section className="my-20">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-green-600 mb-6">
                  {sustainableDesignContent.title}
                </h3>
                <div className="w-16 h-1 bg-green-400 mb-6"></div>
                <p className="text-lg text-gray-600">
                  {sustainableDesignContent.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid md:grid-cols-2 gap-6">
                  {sustainableDesignContent.points.map((point, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4 py-2">
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration Opportunities */}
          <section className="my-20">
            <h3 className="text-3xl font-bold text-green-600 mb-8 text-center">
              {collaborationOpportunitiesContent.title}
            </h3>
            <p className="text-lg text-gray-600 mb-12 text-center">
              {collaborationOpportunitiesContent.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {collaborationOpportunitiesContent.sections.map((section, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'bg-green-600 text-white' : 'bg-white'}`}
                >
                  <div className="p-8">
                    <h4 className={`text-2xl font-bold mb-6 ${index % 2 === 0 ? 'text-white' : 'text-green-600'}`}>
                      {section.title}
                    </h4>
                    <ul className="space-y-4">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`mr-3 ${index % 2 === 0 ? 'text-green-300' : 'text-green-500'}`}>•</span>
                          <span className={index % 2 === 0 ? 'text-green-50' : 'text-gray-700'}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shared Vision */}
          <section className="my-20 bg-green-600 rounded-xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">
              {sharedVisionContent.title}
            </h3>
            <p className="text-lg mb-8">
              {sharedVisionContent.description}
            </p>
            <ul className="space-y-6 mb-12">
              {sharedVisionContent.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-200 text-xl mr-4">{index + 1}.</span>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
              <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                {contactContent.contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-2xl mr-4">{info.icon}</span>
                    <span className="mr-2 font-medium">{info.label}</span>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-200 hover:underline"
                    >
                      {info.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Bamboohut;