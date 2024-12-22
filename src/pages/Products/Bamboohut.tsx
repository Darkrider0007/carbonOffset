import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const bannerContent = {
  backgroundImage:
    "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
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
    "Bamboo Hut thrives on collaboration. Whether you’re an individual, student, company, or organization, you can contribute to and benefit from this sustainable revolution.",
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
    "📧 Contact Us: info@our-bamboo.com",
    "🌍 Discover Bamboo Hut: Where innovation meets sustainability",
  ],
};

function Bamboohut() {
  return (
    <div>
      <Navbar />
      {/* Banner Section */}
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
        <h1 className="text-3xl z-20 md:text-5xl font-bold text-white">
          {bannerContent.title}
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Main Content Section */}
      <div className="p-8 md:p-16 w-full mx-auto text-gray-800">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-5xl font-semibold text-Kelly_Green mb-20">
            {introductionContent.title}
          </h2>
          <h3 className="text-4xl font-semibold">
            {introductionContent.subtitle}
          </h3>
          <p className="text-2xl font-normal text-Slate_Gray mt-5">
            {introductionContent.description}
          </p>
        </section>

        {/* Green Loyalty Program */}
        <section className="mt-16">
          <h3 className="text-4xl font-semibold">{greenLoyaltyProgramContent.title}</h3>
          <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
            {greenLoyaltyProgramContent.description}
          </p>
          <ul className="list-disc ml-5 mt-5">
            {greenLoyaltyProgramContent.points.map((point, index) => (
              <li key={index} className="text-2xl font-normal mt-5">
                {point}
              </li>
            ))}
          </ul>
          <h4 className="text-3xl font-semibold mt-10">Benefits:</h4>
          <ul className="list-disc ml-5 mt-5">
            {greenLoyaltyProgramContent.benefits.map((benefit, index) => (
              <li key={index} className="text-2xl font-normal mt-5">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Sustainable Design */}
        <section className="mt-16">
          <h3 className="text-4xl font-semibold">{sustainableDesignContent.title}</h3>
          <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
            {sustainableDesignContent.description}
          </p>
          <ul className="list-disc ml-5 mt-5">
            {sustainableDesignContent.points.map((point, index) => (
              <li key={index} className="text-2xl font-normal mt-5">
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Collaboration Opportunities */}
        <section className="mt-16">
          <h3 className="text-4xl font-semibold">{collaborationOpportunitiesContent.title}</h3>
          <div className="flex flex-wrap justify-between gap-6 mt-12">
            {collaborationOpportunitiesContent.sections.map((section, index) => (
              <div key={index} className="bg-Mint_Green shadow-md rounded-lg p-6 w-full md:w-[49%] h-auto md:h-[500px]">
                <h4 className="text-3xl font-semibold mb-4">{section.title}</h4>
                <ul className="list-disc ml-5">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="text-2xl font-normal mt-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Shared Vision */}
        <section className="py-7  mt-10 px-7 border-2 border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-4xl font-semibold">{sharedVisionContent.title}</h3>
          <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
            {sharedVisionContent.description}
          </p>
          <ul className="list-disc ml-5 mt-5">
            {sharedVisionContent.points.map((point, index) => (
              <li key={index} className="text-2xl font-normal mt-5">
                {point}
              </li>
            ))}
          </ul>

          {/* Contact */}


          <ul className="list-none mt-10">
            {contactContent.contactInfo.map((info, index) => (
              <li key={index} className="text-2xl font-normal">
                {info}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default Bamboohut;
