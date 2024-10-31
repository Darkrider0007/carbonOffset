import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/Products/productsBanner.jpg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

function Bamboohut() {
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
          Products {">"} Bamboo Hut
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Page Content */}
      <div className="w-full mx-auto p-6 text-gray-800">
        {/* Green Loyalty Program Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Innovative Green Loyalty Program
          </h2>
          <p className="mt-4">
            At Bamboo Hut, we are committed to fostering a sustainable future
            through our innovative Green Loyalty Program. This program rewards
            our community members for making eco-friendly choices and supporting
            sustainable practices. By participating, members earn loyalty points
            that can be redeemed for discounts, exclusive offers, and
            eco-friendly products. Our goal is to encourage and incentivize
            sustainable living, making it easy and rewarding to contribute to a
            greener planet.
          </p>
        </section>

        {/* Sustainable Design and Construction Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Sustainable Design and Construction
          </h2>
          <p className="mt-4">
            Bamboo Hut homes are designed with sustainability at their core.
            Using construction-grade bamboo, solar panels, wind turbines, and
            air-cooled techniques, our homes are not only environmentally
            friendly but also energy-efficient. Elevated from the ground and
            nestled within trees, these homes blend seamlessly with nature,
            minimizing their environmental footprint. Each Bamboo Hut is a
            testament to our commitment to green living, offering a unique and
            sustainable living experience.
          </p>
        </section>

        {/* Community and Environmental Impact Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Community and Environmental Impact
          </h2>
          <p className="mt-4">
            Our Green by Design communities are more than just homes; they are
            hubs of eco-conscious living and innovation. Residents of Bamboo Hut
            communities engage in activities that promote sustainability, such
            as community gardening, renewable energy projects, and educational
            workshops. These initiatives help reduce the carbon footprint and
            create a net positive environmental impact, ensuring that our planet
            is cleaner and greener for future generations.
          </p>
          <p className="mt-4">
            Bamboo Hut homes are designed to be affordable without compromising
            on quality or sustainability. Constructed at a fraction of the cost
            of traditional homes, they provide an accessible option for
            eco-conscious individuals and families. Our commitment to
            affordability and sustainability makes Bamboo Hut an ideal choice
            for those looking to make a positive impact on the environment while
            enjoying modern, comfortable living.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="my-8 text-center">
          <p className="text-lg font-semibold text-green-700">
            Join us at Bamboo Hut and be a part of a revolutionary movement
            towards sustainable living. Together, we can build a greener,
            healthier, and more sustainable future.
          </p>
        </section>
      </div>
      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Bamboohut;
