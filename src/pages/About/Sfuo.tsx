import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import SmoothScroll from "../../components/SmoothScroll";

const Sfuo = () => {
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
            About Us {">"} SFUO
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" alt="Curve" />
        </div>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Society for Universal Oneness
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Breaking away from the gravity of the past to create a better
              future.
            </p>
          </section>

          {/* Vision Section */}
          <section className="mb-12 p-6 bg-green-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              SFUO Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Use science and technology in the right direction to create
              solutions and invent systems that help save lives, reverse the
              damage to the environment and ecosystem, advance human society
              toward a better future, and promote peace and harmony to achieve
              global integration and universal interdependence among
              communities.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12 p-6 bg-green-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              SFUO Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Bring together researchers, scientists, technocrats, and
              volunteers in a network to innovate, create, launch, and implement
              projects supporting SFUO vision in the most professional,
              competent, and cost-effective manner.
            </p>
          </section>

          {/* Quote Section */}
          <section className="bg-green-200 p-6 rounded-lg shadow-lg text-center">
            <blockquote className="text-xl italic font-semibold text-green-900">
              “You should be the change that you want to see in the world”
            </blockquote>
            <p className="text-right text-green-700 font-medium mt-2">
              - Mahatma Gandhi
            </p>
          </section>
        </main>

        {/* Newsletter */}
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Sfuo;
