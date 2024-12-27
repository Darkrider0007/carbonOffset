import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import SmoothScroll from "../../components/SmoothScroll";

const FutureCity = () => {
  return (
    <SmoothScroll>
      <div className=" min-h-screen">
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
            About Us {">"} Future City
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" alt="Curve" />
        </div>

        <main className="container mx-auto px-6 py-12">
          {/* Introduction Section */}
          <section className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Future City Inc.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Future City Inc. is a consulting company with expertise in
              interdisciplinary and multi-functional areas that cut across
              various domains of information technology, medical science,
              engineering, and social dynamics. We are a team of researchers,
              inventors, and domain experts engaged in developing and
              implementing high-tech projects.
            </p>
          </section>

          {/* Mission and Vision Section */}
          <section className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Innovation to create and launch ever newer products and services
                that improve the quality of life, create peace, protect the
                environment of our planet, and help advance human society
                towards a better future.
              </p>
            </div>
            <div className="flex-1 bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To invent newer systems and methods that help achieve a better
                quality of life, protect the environment, save lives, and
                promote peace towards global integration. We aim to deliver
                projects, products, and services to our clients with
                professionalism and ethical standards.
              </p>
            </div>
          </section>

          {/* Innovation Cycle Image */}
          <section className="flex flex-col items-center mb-12">
            <img
              src="https://1world1nation.org/wp-content/uploads/2024/02/Futurecity-cycle.png"
              alt="Innovation Cycle"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-sm text-gray-600 text-center">
              Future City Inc. Innovation Cycle
            </p>
          </section>

          {/* Consulting Philosophy */}
          <section className="bg-green-100 p-6 rounded-lg shadow-lg text-center mb-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Our Consulting Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Consulting for us is all about reaping the synergy of collective
              intelligence and acting in unity to plan and execute projects. The
              innovation cycle is an iterative process: build on existing
              solutions, invent to add value, integrate the new with the old,
              and make it all work effectively.
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

export default FutureCity;
