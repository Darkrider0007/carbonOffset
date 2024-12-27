import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";

const bannerContent = {
  backgroundImage: "https://i.ibb.co/ZLGq4sX/Getty-Images-1441429474-cmp-1.png",
  title: "Products > UNY",
};

const introductionContent = {
  title: "Welcome to UNY:",
  subtitle: "The World’s First Digital Green Currency",
  description:
    "Driving Sustainability, Economic Growth, and Environmental Equity",
};

const climateCrisisContent = {
  title: "Addressing the Global Climate Crisis",
  description:
    "Climate change is the defining challenge of our time. Its effects—rising sea levels, pollution, global warming, and biodiversity loss—touch every corner of the globe, from the bustling mega-cities to remote islands and tranquil villages. The need for immediate and sustainable action has never been more pressing. UNY is currently in its development phase as a transformative solution to address these challenges, creating sustainable value for both the planet and its future investors.",
};

const unyDefinitionContent = {
  title: "What is UNY?",
  description:
    "UNY aims to become the world’s first digital green currency, uniquely designed to combat climate change while promoting economic stability and growth. Unlike traditional cryptocurrencies, UNY is being designed to be backed by green real estate and tangible assets that appreciate over time, ensuring its value remains resilient and impactful.",
};

const envisionedContent = {
  title: "UNY is Envisioned to Deliver:",
  points: [
    {
      title: "Real Value for Investors:",
      description:
        "Grounded in appreciating green assets, UNY will offer stability and growth potential.",
    },
    {
      title: "Environmental Stewardship:",
      description:
        "By investing in sustainable projects, UNY will actively contribute to global environmental restoration.",
    },
    {
      title: "Long-Term Growth and Stability:",
      description:
        "Structured to provide steady and reliable returns over time.",
    },
  ],
};

const howUnyWorksContent = {
  title: "How Will UNY Work?",
  subtitle: "Phased Decentralization and Asset Hypothecation",
  description:
    "UNY’s proposed financial model combines the strengths of decentralization with asset hypothecation to drive sustainable growth and economic stability:",
  points: [
    {
      title: "Phased Growth:",
      description:
        "Gradual decentralization will allow for steady, controlled value appreciation.",
    },
    {
      title: "Stored Value:",
      description:
        "Hypothecated green assets—such as renewable energy projects and green real estate—will anchor the currency’s value, mitigating volatility.",
    },
    {
      title: "Global Transformation:",
      description:
        "Upon full decentralization, all hypothecated assets will be converted to UNY, positioning it as a universal digital currency for sustainability-driven economies.",
    },
  ],
};

const cardsContent = [
  {
    title: "Reaching New Heights Together",
    description:
      "Collaboration during this development phase will help us refine and expand UNY’s potential. Together, we can:",
    points: [
      "Foster Innovation: Co-create solutions and technologies that drive sustainability.",
      "Scale Global Impact: Expand UNY’s reach to regions where it can make the greatest difference.",
      "Accelerate Adoption: Develop incentives and programs that encourage widespread use of UNY.",
      "Achieve Carbon Neutrality: Work collectively toward a net-positive environmental impact.",
    ],
  },
  {
    title: "Visionary Development Opportunity",
    description:
      "Engaging with UNY during its development phase offers a unique chance to influence a transformative movement for global sustainability.",
    points: [
      "Shape the Future: Be part of designing a currency that aligns financial growth with environmental impact.",
      "Early Engagement Opportunities: Contribute ideas and expertise that will drive the foundational stages of this innovative solution.",
      "Create Lasting Impact: Help combat climate change, reduce global carbon emissions, and promote economic equality from the ground up.",
    ],
  },
];

const contactContent = {
  title: "Join the Movement for a Sustainable Future",
  description: [
    "UNY invites you to be part of a global mission that aligns financial innovation with environmental stewardship. Together, we can:",
    "✅ Revolutionize the global economy with a sustainable currency.",
    "✅ Combat climate change through innovative, impactful solutions.",
    "✅ Create a prosperous and equitable future for generations to come.",
  ],
  callToAction: "Ways to Get Involved:",
  points: [
    "Collaborate: Share your expertise to help refine UNY’s framework and solutions.",
    "Advocate: Spread the word about UNY’s vision and potential.",
    "Prepare to Invest: Stay informed about upcoming opportunities to grow your wealth while supporting the planet.",
  ],
  contactInfo: [
    "📧 Contact Us: info@ouruny.com",
    "🌐 Visit Us: www.ouruny.com",
  ],
};

const videoContent = {
  url: "https://www.youtube.com/embed/lc8U3CxLbmA?si=5QRduGkJeOCOAhGU",
};

function Uny() {
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
            <h3 className="text-4xl font-semibold">
              {introductionContent.subtitle}
            </h3>
            <p className="text-2xl font-normal text-Slate_Gray mt-5">
              {introductionContent.description}
            </p>
          </section>

          {/* Other Sections */}
          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {climateCrisisContent.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {climateCrisisContent.description}
            </p>
          </section>

          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {unyDefinitionContent.title}
            </h3>
            <p className="text-2xl font-normal text-justify text-Slate_Gray mt-5">
              {unyDefinitionContent.description}
            </p>
          </section>

          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {envisionedContent.title}
            </h3>
            <ul className="list-disc ml-5 mt-5">
              {envisionedContent.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  <span>{point.title}</span>{" "}
                  <span className="text-Slate_Gray">{point.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <h3 className="text-4xl font-semibold">
              {howUnyWorksContent.title}
            </h3>
            <p className="text-2xl mt-5 italic">
              {howUnyWorksContent.subtitle}
            </p>
            <p className="text-2xl font-normal text-Slate_Gray mt-5 text-justify">
              {howUnyWorksContent.description}
            </p>
            <ul className="list-disc ml-5 mt-5">
              {howUnyWorksContent.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal mt-5">
                  <span>{point.title}</span>{" "}
                  <span className="text-Slate_Gray">{point.description}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cards Section */}
          <section className="my-10">
            <div className="flex flex-wrap items-center justify-between gap-20">
              {cardsContent.map((card, index) => (
                <div
                  key={index}
                  className="w-[625px] h-auto md:h-[725px] bg-Mint_Green px-7 py-20 rounded-lg"
                >
                  <h1 className="text-3xl font-semibold text-black mb-8">
                    {card.title}
                  </h1>
                  <p className="text-2xl mb-8 italic text-justify">
                    {card.description}
                  </p>
                  <ul className="list-disc ml-5 space-y-8">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="text-2xl text-Charcoal_Blue">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-14 px-7 border-2 border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-black mb-8">
              {contactContent.title}
            </h1>
            {contactContent.description.map((desc, index) => (
              <p key={index} className="text-2xl font-normal text-justify">
                {desc}
              </p>
            ))}
            <p className="text-2xl font-normal my-4">
              {contactContent.callToAction}
            </p>
            <ul className="list-disc ml-5">
              {contactContent.points.map((point, index) => (
                <li key={index} className="text-2xl font-normal">
                  {point}
                </li>
              ))}
            </ul>
            <ul className="list-none mt-5">
              {contactContent.contactInfo.map((info, index) => (
                <li key={index} className="text-2xl font-normal">
                  {info}
                </li>
              ))}
            </ul>
          </section>

          {/* Video Section */}
          <div className="mt-12 flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src={videoContent.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default Uny;
