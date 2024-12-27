import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import SmoothScroll from "../../components/SmoothScroll";

const affiliates = [
  {
    name: "Siddha Vetha",
    imgSrc:
      "https://1world1nation.org/wp-content/uploads/2024/02/Siddha-Vetha_Black-and-white.png",
    link: "https://siddhavetha.org/",
  },
  {
    name: "Futurecity",
    imgSrc:
      "https://1world1nation.org/wp-content/uploads/2024/02/futurecityLogo.png",
    link: "https://1world1nation.org/future-city/",
  },
  {
    name: "Pyramid Divine Home",
    imgSrc: "https://1world1nation.org/wp-content/uploads/2024/02/images.jpeg",
    link: "https://pyramiddivines.com/",
  },
  {
    name: "Yoga Samskrutham University",
    imgSrc:
      "https://1world1nation.org/wp-content/uploads/2024/02/images-1.jpeg",
    link: "https://ysam.org/",
  },
  {
    name: "Art of Living",
    imgSrc:
      "https://1world1nation.org/wp-content/uploads/2024/02/1-2048x866.jpeg",
    link: "https://www.artofliving.org/us-en",
  },
  {
    name: "Udyami Sahyog Parishad",
    imgSrc:
      "https://1world1nation.org/wp-content/uploads/2024/02/5492910-medium190ap.png",
    link: "http://www.skillindiausp.com/",
  },
];

const AffiliateOrganization = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${mainbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
          }}
          className="flex items-center justify-center relative"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Us {">"} Affiliate Organization
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" alt="Curve" />
        </div>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Become an Affiliate Organization
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              As an affiliated organization, you become a partner in realizing
              the dream of creating a unified world with a 100% protected
              environment. A meeting of the minds is all that’s required to get
              started. We can pool our collective energies and resources to
              create new synergies.
            </p>
            <p className="mt-4 text-gray-700">
              To become an affiliate organization, please send an email to:{" "}
              <a
                href="mailto:affiliate@1world1nation.org"
                className="text-green-700 underline"
              >
                affiliate@1world1nation.org
              </a>
            </p>
          </section>

          {/* Affiliates Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {affiliates.map((affiliate, index) => (
              <div
                key={index}
                className="bg-green-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <a
                  href={affiliate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={affiliate.imgSrc}
                    alt={affiliate.name}
                    className="object-contain h-32 w-full mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold text-green-800">
                    {affiliate.name}
                  </h3>
                </a>
              </div>
            ))}
          </section>
        </main>

        {/* Newsletter */}
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default AffiliateOrganization;
