import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/Products/productsBanner.jpg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

function Cmrbitplast() {
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
          Products {">"} CMR Bitplast
        </h1>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Page Content */}
      <div className="w-full mx-auto p-6 text-gray-800">
        {/* Introduction */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            CMR Bitplast – Wet Process Technology: Pioneering Sustainable
            Infrastructure
          </h2>
          <p className="mt-4">
            In an era where sustainability is not just a choice but a necessity,
            the innovation in constructing eco-friendly infrastructure has taken
            a significant leap forward with the introduction of CMR bitplast –
            wet process technology for laying waste plastic roads. This
            groundbreaking technology, patented and acknowledged for its
            ingenuity, offers a robust solution to two pressing issues: waste
            management and road durability.
          </p>
        </section>

        {/* Accreditation and Certification Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Accreditation and Certification
          </h2>
          <p className="mt-4">
            The CMR bitplast – wet process technology has garnered prestigious
            recognition, being accredited by the Indian Road Congress, a
            testament to its adherence to the highest standards of road
            construction in India. Furthermore, the National Institute of
            Technology (NIT) has certified this technology as SUPERIOR to the
            conventional dry process, marking a significant endorsement of its
            effectiveness and innovation.
          </p>
        </section>

        {/* Environmental Impact Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Environmental Impact and Sustainability
          </h2>
          <p className="mt-4">
            At the heart of the CMR bitplast-wet process technology is its
            remarkable utilization of waste plastic, transforming it from an
            environmental burden into a valuable resource for road construction.
            This not only helps in reducing the plastic waste menace choking our
            planet but also enhances the durability and longevity of the roads.
            The technology’s environmental benefits extend to reducing carbon
            footprints, conserving natural resources, and promoting a circular
            economy.
          </p>
        </section>

        {/* Implementation and Achievements Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Implementation and Achievements
          </h2>
          <p className="mt-4">
            The practical application of this technology has seen remarkable
            success, with over 800 kilometers of roads already laid across
            Southern India. This widespread implementation stands as a testament
            to the technology’s reliability, efficiency, and the positive
            reception from governmental and civil society stakeholders. The use
            of CMR bitplast-wet process technology in road construction projects
            showcases a model of sustainable development that other regions
            could replicate.
          </p>
        </section>

        {/* Superiority over Traditional Methods Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">
            Superiority over Traditional Methods
          </h2>
          <p className="mt-4">
            The CMR bitplast-wet process’s superiority lies in its innovative
            approach to integrating waste plastic into the bitumen used for road
            laying. Unlike the dry process, which mixes plastic and bitumen at
            later stages, the wet process allows for a more homogeneous mixture,
            ensuring better binding, reduced wear and tear, and longer road
            life. This method not only improves the quality of the roads but
            also contributes significantly to environmental conservation
            efforts.
          </p>
        </section>

        {/* Looking Forward Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-green-700">Looking Forward</h2>
          <p className="mt-4">
            The success of CMR bitplast-wet process technology paves the way for
            broader adoption and innovation in sustainable infrastructure
            development. It exemplifies how technological advancements can
            address environmental challenges while meeting our infrastructure
            needs. As more regions and countries look towards sustainable
            development models, the CMR bitplast-wet process stands as a beacon
            of innovative, eco-friendly road construction technology that
            harmonizes developmental goals with environmental stewardship.
          </p>
        </section>

        {/* Conclusion */}
        <section className="my-8">
          <p className="text-lg font-semibold text-green-700">
            In conclusion, the CMR bitplast-wet process technology is not just
            about laying roads; it’s about laying the foundation for a
            sustainable future. Its accredited and certified superiority,
            coupled with its successful implementation, marks a significant
            milestone in our journey towards greener, more resilient
            infrastructure solutions.
          </p>
        </section>

        {/* Video Embed Section */}
        <section className="my-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AlmbjoU16S8?si=YwVCZzxmCT64ssN_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </div>

      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cmrbitplast;
