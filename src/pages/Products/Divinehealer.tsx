import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > Divine Healer",
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
    "The Divine Healer imbues beverages with unique healing properties, ensuring that every sip promotes health and vitality. Here’s how it can make an impact:",
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
    "Implemented just before bottling and carbonating, the Divine Healer’s effect is invisible to the eye but invigorating to the body—a revolutionary way to create beverages that stand out in the market.",
};

const scientificallyProvenBenefits = {
  title: "Scientifically Proven Benefits",
  description:
    "The Divine Healer is not just an idea—it’s backed by science. Studies have confirmed that liquids processed through our nano-filtration system demonstrate properties that:",
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
  title: "Collaboration Opportunities: How We Can Achieve Greater Heights",
  description:
    "The Divine Healer is designed for everyone—individuals, students, small businesses, large industries, and organizations. By collaborating with us, you can harness this groundbreaking technology to improve lives, drive business growth, and support a sustainable future. Here’s how you can get involved and benefit:",
  sections: [
    {
      title: "For Individuals and Families:",
      points: [
        "Health at Home: Integrate the compact Divine Healer system into your kitchen and enjoy enhanced water quality every day.",
        "Ambassadors for Wellness: Spread awareness about the health benefits of Divine Healer in your networks, helping friends and communities access cleaner, rejuvenating hydration.",
        "Affiliate Opportunities: Partner with us as an affiliate to promote Divine Healer products and earn incentives.",
      ],
    },
    {
      title: "For Students and Educational Institutions:",
      points: [
        "Research and Innovation Projects: Collaborate with us on studies to further explore and develop the healing properties of processed beverages.",
        "Workshops and Internships: Students can gain hands-on experience with cutting-edge beverage technology, learning skills applicable to science, engineering, and sustainability.",
        "Health Campaigns: Partner with us to promote hydration awareness and the importance of clean, healthy water in student communities.",
      ],
    },
    {
      title: "For Businesses and Startups:",
      points: [
        "Product Enhancement: Add the Divine Healer system to your production line to differentiate your beverages with scientifically proven health benefits.",
        "Corporate Wellness Programs: Use Divine Healer systems in offices to promote employee health and wellness, boosting productivity and satisfaction.",
        "Partnership Programs: Develop co-branded beverage lines enriched by the Divine Healer, creating unique selling points in competitive markets.",
        "Early Adoption Benefits: Be among the first businesses to integrate this technology and gain a competitive edge through innovative, wellness-focused products.",
      ],
    },
    {
      title: "For Beverage Manufacturers:",
      points: [
        "Turnkey Solutions: We offer scalable solutions for small, medium, and large-scale production facilities.",
        "Innovation Integration: Work with our team to customize systems for your production needs, ensuring efficiency and measurable results.",
        "Sustainability Impact: Enhance the value of your beverages naturally while positioning your brand as a leader in wellness and sustainability.",
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
    "The Divine Healer represents the perfect synergy between science and nature. Whether you’re an individual, business, or organization, now is the time to collaborate, innovate, and unlock the full potential of your beverages.",
  subTitle: "Let’s Heal the World Together:",
  points: [
    "🌟 Improve health outcomes for individuals and communities.",
    "💼 Drive innovation and success in the beverage industry.",
    "🌍 Create a global impact through hydration and wellness.",
  ],
};

const contactContent = {
  contactInfo: [
    "📧 Contact Us: info@divine-healer.com",
    "🌐 Discover More: Visit www.divine-healer.com to learn how you can integrate this groundbreaking technology into your life or business.",
  ],
};

function Divinehealer() {
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

          {/* Essence of the Divine Healer */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">{Essence.title}</h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {Essence.description}
            </p>
            <h4 className="text-3xl font-semibold mt-5">
              {Essence.missionTitle}
            </h4>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {Essence.missionDescription}
            </p>
          </section>

          {/* Sustainable Design */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {impactOnBeverages.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {impactOnBeverages.description}
            </p>
            <div className="flex flex-wrap justify-between gap-6 mt-12">
              {impactOnBeverages.section.map((section, index) => (
                <div
                  key={index}
                  className="bg-Mint_Green shadow-md rounded-lg p-6 w-full md:w-[49%] h-auto md:h-[400px]"
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
              ))}
            </div>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {impactOnBeverages.summary}
            </p>
          </section>
          {/* Scientifically Proven Benefits */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {scientificallyProvenBenefits.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {scientificallyProvenBenefits.description}
            </p>
            <ul className="list-disc ml-5">
              {scientificallyProvenBenefits.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {scientificallyProvenBenefits.summary}
            </p>
          </section>

          {/* Collaboration Opportunities */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {collaborationOpportunitiesContent.title}
            </h3>
            <div className="flex flex-wrap justify-between gap-6 mt-12">
              {collaborationOpportunitiesContent.sections.map(
                (section, index) => (
                  <div
                    key={index}
                    className="bg-Mint_Green shadow-md rounded-lg p-6 w-full md:w-[49%] h-auto md:h-[530px]"
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
            <h4 className="text-3xl font-semibold mt-5">
              {sharedVisionContent.subTitle}
            </h4>
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
    </SmoothScroll>
  );
}

export default Divinehealer;
