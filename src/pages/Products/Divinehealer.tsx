import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/Products/productsBanner.jpg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

function Divinehealer() {
  return (
    <div>
      <Navbar />

      {/* Main Banner */}
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
        <h1 className="text-3xl z-20 md:text-5xl font-bold text-white">
          Products {">"} Divine Healer
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Page Content */}
      <div className="w-full mx-auto p-6 text-gray-800">
        {/* Introduction */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Introducing the Divine Healer
          </h2>
          <p className="mt-4">
            The Divine Healer is an innovative leap in beverage technology that
            transcends the ordinary, transforming everyday drinks into elixirs
            of health and well-being. At its core is a cutting-edge
            nano-filtration system, the result of groundbreaking research and
            development, encapsulated by a global patent that distinguishes it
            in the field of beverage enhancement.
          </p>
        </section>

        {/* Essence Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            The Essence of the Divine Healer
          </h2>
          <p className="mt-4">
            The Divine Healer stands as a testament to our commitment to heal
            humanity through the power of hydration. It is not merely a
            filtration system; it is an alchemist’s tool, transforming water and
            beverages into sources of healing and rejuvenation. Designed for
            both domestic and commercial settings, it offers unparalleled
            flexibility and utility.
          </p>
        </section>

        {/* Impact Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Transformative Impact on Beverages
          </h2>
          <p className="mt-4">
            Our technology has the unique ability to imbue healing properties
            into a diverse range of beverages. From home water pitchers to
            large-scale breweries, distilleries, wineries, and even juice or
            soda manufacturers, the Divine Healer enhances wellness in every
            sip. By implementing our system in the final stages of production,
            just before bottling and carbonating, each beverage receives an
            invisible but invigorating healing touch.
          </p>
        </section>

        {/* Scientific Benefits Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Scientifically Proven Benefits
          </h2>
          <p className="mt-4">
            The efficacy of the Divine Healer is scientifically validated, with
            multiple studies attesting to its healing impact. Liquids that
            undergo filtration through this system exhibit enhanced properties
            that contribute to health and wellness, providing a tangible
            improvement to the consumer's well-being.
          </p>
        </section>

        {/* Solutions Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Comprehensive Solutions for Every Scale
          </h2>
          <p className="mt-4">
            We provide holistic solutions tailored to meet diverse needs, from
            compact units for home use to industrial-scale systems for
            commercial beverage production. With capabilities to design,
            manufacture, supply, and install systems of any magnitude, we offer
            not only the technology but also comprehensive training for your
            team, ensuring smooth operation and optimal performance of the
            Divine Healer.
          </p>
        </section>

        {/* Quality Commitment Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Our Commitment to Quality and Satisfaction
          </h2>
          <p className="mt-4">
            Quality and reliability are our hallmarks. Each Divine Healer
            filtration system is backed by a 1-year warranty, reflecting our
            confidence in its performance and durability. Our support continues
            beyond the sale, ensuring ongoing satisfaction and the enduring
            efficacy of the system.
          </p>
        </section>

        {/* Closing Call to Action */}
        <section className="my-8 text-center">
          <p className="text-lg font-semibold text-green-700">
            The Divine Healer represents a harmonious blend of science and
            nature, offering an unprecedented opportunity to elevate the
            healthfulness of beverages. Whether for personal enjoyment or
            commercial production, integrating the Divine Healer into your
            process is a choice to enrich lives, one healing sip at a time.
          </p>
        </section>
      </div>

      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Divinehealer;
