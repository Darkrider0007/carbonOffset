import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > CMR Bitplast",
};

const introductionContent = {
  title:
    "CMR Bitplast – Wet Process Technology: Pioneering Sustainable Infrastructure",
  subtitle:
    "Transforming Waste Plastic into Durable Roads for a Sustainable Future",
};

const innovationForGreenerTomorrow = {
  title: "Innovation for a Greener Tomorrow",
  describe:
    "In an era where sustainability is a necessity, CMR Bitplast’s wet process technology has emerged as a groundbreaking innovation in eco-friendly infrastructure development. By transforming waste plastic into a valuable resource for road construction, this technology addresses two pressing global challenges: plastic waste management and infrastructure durability.",
  subTitle: "Our Vision: ",
  subDescription:
    "Build roads that not only last longer but also protect the planet for future generations.",
};

const accreditationAndCertification = {
  title: "Accreditation and Certification",
  points: [
    "Indian Road Congress Accreditation: A mark of adherence to the highest standards in road construction.",
    "Certification by NIT (National Institute of Technology): Recognized as more efficient and effective than traditional dry processes.",
  ],
  summary:
    "This recognition showcases the technology’s superior performance, making it a trusted solution for sustainable road construction.",
};

const EnvironmentalImpactandSustainability = {
  title: "Environmental Impact and Sustainability",
  description:
    "At the heart of CMR Bitplast is its commitment to environmental preservation and circular economy principles. The technology delivers significant ecological benefits:",
  points: [
    "Plastic Waste Management: Converts non-recyclable plastic into a construction resource, reducing landfill overflow and ocean pollution.",
    "Conservation of Natural Resources: Limits the consumption of virgin materials, promoting resource efficiency.",
    "Circular Economy Integration: Encourages reusability of materials, fostering sustainable development.",
  ],
  summary:
    "These benefits make CMR Bitplast a scalable and replicable model for green infrastructure globally.",
};

const implementationAndAchievements = {
  title: "Implementation and Achievements",
  discription: "CMR Bitplast’s success speaks for itself:",
  points: [
    "800+ Kilometers of Roads: Successfully laid across Southern India, demonstrating real-world impact and viability.",
    "Adoption by Governments and Civil Societies: Recognized as a reliable solution for sustainable infrastructure by multiple stakeholders.",
    "Durability and Efficiency: Roads constructed using this technology have shown reduced wear, tear, and maintenance costs, ensuring longevity.",
  ],
  summary:
    "These achievements position CMR Bitplast as a proven model for implementing eco-friendly infrastructure solutions at scale.",
};

const SuperiorityOverTraditionalMethods = {
  title: "Superiority over Traditional Methods",
  description:
    "The CMR Bitplast wet process offers a clear advantage over traditional road construction techniques, particularly the dry process:",
  points: [
    "Homogeneous Mixture: Ensures thorough binding of plastic with bitumen, improving road strength and quality.",
    "Enhanced Durability: Roads are more resilient to wear and tear, significantly extending their lifespan.",
    "Reduced Maintenance Costs: Longer-lasting roads lead to lower repair and maintenance expenses.",
    "Sustainability Impact: Reduces the consumption of non-renewable resources and mitigates environmental pollution.",
  ],
  summary:
    "This innovative approach combines superior road performance with measurable environmental benefits.",
};

const collaborationOpportunitiesContent = {
  title: "Collaboration Opportunities: How We Can Achieve Greater Heights",
  description:
    "CMR Bitplast believes that collaboration is key to driving sustainable development. By joining forces with individuals, organizations, and governments, we can amplify the positive impact of this technology and address critical infrastructure and environmental challenges worldwide. Here’s how different stakeholders can collaborate and benefit:",
  sections: [
    {
      title: "For Government Bodies and Municipalities:",
      points: [
        "Adopt Sustainable Policies: Integrate CMR Bitplast into road construction guidelines and infrastructure policies.",
        "Pilot Projects: Partner with us to implement pilot projects in urban and rural areas, showcasing the benefits of plastic roads.",
        "Environmental Impact Initiatives: Collaborate on programs to reduce plastic waste while building resilient infrastructure.",
        "Funding and Grants: Leverage government funding opportunities to scale the adoption of sustainable road technology.",
      ],
    },
    {
      title: "For Corporations and Businesses:",
      points: [
        "Corporate Social Responsibility (CSR): Partner with CMR Bitplast to fund or implement road construction projects that utilize waste plastic, aligning with sustainability goals.",
        "Waste Management Partnerships: Collaborate on collecting and repurposing plastic waste generated by businesses.",
        "Supply Chain Integration: Integrate CMR Bitplast technology into logistics and industrial infrastructure development.",
        "Brand Positioning: Showcase your commitment to environmental sustainability by supporting eco-friendly infrastructure initiatives.",
      ],
    },
    {
      title: "For Civil Societies and NGOs:",
      points: [
        "Awareness Campaigns: Collaborate with CMR Bitplast to raise awareness about plastic waste management and its role in sustainable infrastructure.",
        "Community-Led Initiatives: Mobilize local communities to collect plastic waste for repurposing in road construction.",
        "Advocacy Programs: Partner with policymakers to promote sustainable road-building practices on national and global platforms.",
        "Funding Partnerships: Support infrastructure projects that bring tangible environmental and community benefits.",
      ],
    },
    {
      title: "For Educational Institutions and Researchers:",
      points: [
        "Research and Development: Collaborate with us to improve and scale wet process technology for global adoption.",
        "Student Projects: Partner on internships, research studies, and field projects that explore sustainable engineering solutions.",
        "Skill Development Programs: Train future engineers and environmentalists in innovative infrastructure technologies.",
      ],
    },
    {
      title: "For Individuals and Local Communities:",
      points: [
        "Plastic Collection Drives: Participate in initiatives to collect and repurpose plastic waste for road construction.",
        "Community Advocacy: Encourage local governments and decision-makers to adopt eco-friendly infrastructure models.",
        "Volunteer Programs: Support implementation projects that bring sustainable infrastructure to your region.",
        "Educate and Share: Spread awareness about the environmental and economic benefits of waste plastic roads.",
      ],
    },
  ],
};

const collaborationBenifites = {
  title: "Benefits of Collaboration",
  description:
    "Collaborating with CMR Bitplast provides mutual benefits and drives global change:",
  points: [
    "Environmental Impact: Reduce plastic pollution, conserve resources, and lower carbon emissions.",
    "Sustainable Infrastructure: Build durable roads that last longer and require less maintenance.",
    "Economic Growth: Lower costs and create opportunities for businesses in the waste management and construction sectors",
    "Community Development: Improve road connectivity in underserved regions while reducing environmental hazards.",
    "Innovation and Leadership: Be part of a revolutionary technology that sets new standards for sustainable infrastructure.",
  ],
};

const ourCommitment = {
  title: "Looking Forward: Building a Sustainable Future Together",
  description:
    "The success of CMR Bitplast wet process technology marks the beginning of a global shift toward greener infrastructure. As we look ahead, we envision:",
  points: [
    "Broader Adoption: Scaling the technology across regions, nations, and continents.",
    "Enhanced Innovation: Continuous improvement in technology to address evolving infrastructure demands.",
    "Global Collaboration: Partnering with stakeholders to create a world where roads are built sustainably and responsibly.",
  ],
};

const sharedVisionContent = {
  title: "Join the Movement",
  description:
    "Together, we can revolutionize infrastructure development, reduce plastic waste, and create a sustainable future for generations to come:",
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

function Cmrbitplast() {
  return (
    <SmoothScroll>
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
            <h3 className="text-4xl font-semibold italic text-Slate_Gray">
              {introductionContent.subtitle}
            </h3>
          </section>

          {/* Innovation for a Greener Tomorrow */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {innovationForGreenerTomorrow.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {innovationForGreenerTomorrow.describe}
            </p>
            <h4 className="text-3xl font-semibold mt-5">
              {innovationForGreenerTomorrow.subTitle}
            </h4>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {innovationForGreenerTomorrow.subDescription}
            </p>
          </section>

          {/* Accreditation and Certification */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {accreditationAndCertification.title}
            </h3>
            <ul className="list-disc ml-5">
              {accreditationAndCertification.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {accreditationAndCertification.summary}
            </p>
          </section>

          {/* Environmental Impact and Sustainability */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {EnvironmentalImpactandSustainability.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {EnvironmentalImpactandSustainability.description}
            </p>
            <ul className="list-disc ml-5">
              {EnvironmentalImpactandSustainability.points.map(
                (point, index) => (
                  <li key={index} className="text-2xl font-normal mt-5">
                    {point}
                  </li>
                )
              )}
            </ul>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {EnvironmentalImpactandSustainability.summary}
            </p>
          </section>

          {/* Implementation and Achievements */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {implementationAndAchievements.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {implementationAndAchievements.discription}
            </p>
            <ul className="list-disc ml-5">
              {implementationAndAchievements.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {implementationAndAchievements.summary}
            </p>
          </section>

          {/* Superiority Over Traditional Methods */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {SuperiorityOverTraditionalMethods.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {SuperiorityOverTraditionalMethods.description}
            </p>
            <ul className="list-disc ml-5">
              {SuperiorityOverTraditionalMethods.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {SuperiorityOverTraditionalMethods.summary}
            </p>
          </section>

          {/* Collaboration Opportunities */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {collaborationOpportunitiesContent.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {collaborationOpportunitiesContent.sections.map(
                (section, index) => (
                  <div
                    key={index}
                    className="bg-Mint_Green shadow-md rounded-lg p-6 w-full md:w-[46%] h-auto "
                  >
                    <h4 className="text-3xl font-semibold mb-4">
                      {section.title}
                    </h4>
                    <ul className="list-disc ml-5">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="text-2xl font-normal mt-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Benefits of Collaboration */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {collaborationBenifites.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {collaborationBenifites.description}
            </p>
            <ul className="list-disc ml-5">
              {collaborationBenifites.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Our Commitment */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">{ourCommitment.title}</h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {ourCommitment.description}
            </p>
            <ul className="list-disc ml-5">
              {ourCommitment.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Shared Vision */}
          <section className="py-7  mt-10 px-7 border-2 border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-4xl font-semibold">
              {sharedVisionContent.title}
            </h3>
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
                  {info.icon} {info.label}{" "}
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.value}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Cmrbitplast;
