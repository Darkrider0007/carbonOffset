import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/Products/productsBanner.jpg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import ReactPlayer from "react-player";

function Uny() {
  return (
    <div>
      <Navbar />
      {/* Banner Section */}
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
          Products {">"} UNY
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Main Content Section */}
      <div className="p-8 md:p-16 w-full mx-auto text-gray-800">
        {/* Phased Decentralization Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Phased Decentralization and Asset Hypothecation
          </h2>
          <p className="text-lg">
            UNY is set to transform global finance with its innovative approach
            to decentralization and asset hypothecation. This phased approach
            fosters value appreciation and economic stability, ensuring the
            stored value of UNY grows steadily. Once UNY becomes a fully
            decentralized global currency, hypothecated assets will be
            completely converted to UNY, solidifying its position as the
            universal currency.
          </p>
        </section>

        {/* Onboarding Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Onboarding Businesses, Governments, and Individuals
          </h2>
          <p className="text-lg">
            UNY invites businesses, governments, and individuals to join our
            platform, offering incentives through a cross-brand loyalty program
            to encourage widespread adoption. Committed to sustainability, UNY
            integrates green technologies and practices to reduce the global
            carbon footprint. By promoting environmental stewardship, we aim to
            build a more equitable and sustainable future for everyone.
          </p>
        </section>

        {/* Visionary Approach for Investors Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Visionary Approach for Investors
          </h2>
          <p className="text-lg">
            UNY offers substantial short-term returns and a visionary approach
            that promises long-term benefits. Investors can look forward to a
            10-fold increase in value within three to five years while
            contributing to a global initiative that fosters economic equality
            and environmental sustainability.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16">
          <h3 className="text-xl font-semibold text-gray-800">
            Join UNY in our mission to revolutionize the global economy and
            create a better, more sustainable world.
          </h3>
        </section>

        {/* Video Section (Placeholder) */}
        <div className="mt-12 text-center">
          <ReactPlayer
            url="https://1world1nation.org/wp-content/uploads/2024/02/uny_introduction.mp4"
            controls
            width="70%"
            maxWidth="70%"
            height="auto"
            className="mx-auto"
          />
        </div>
      </div>
      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Uny;
