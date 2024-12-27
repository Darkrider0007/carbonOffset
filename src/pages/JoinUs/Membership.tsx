import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import SmoothScroll from "../../components/SmoothScroll";

const Membership: React.FC = () => {
  return (
    <SmoothScroll>
      <div>
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Membership
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" />
        </div>

        {/* Membership Benefits */}
        <div className="px-5 md:px-20 py-10 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
            SFUO Membership
          </h2>
          <p className="text-lg mb-6">
            Joining SFUO opens a world of personal and professional
            opportunities. Whether as an individual or corporate member, you
            connect with a network of like-minded people to create peace-focused
            projects and shape a future where sustainable living is a reality.
          </p>

          {/* Individual Membership */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Individual Membership
            </h3>
            <p className="text-lg mb-4">
              With an annual membership fee of <strong>$100</strong>, individual
              members gain a Universal Identification Number (UIN) and access to
              global networking for professional, social, and personal
              interests. SFUO invites individuals to contribute to global
              initiatives, whether through volunteering, forming a virtual
              government, or launching local-to-global projects.
            </p>
            <ul className="list-disc ml-8 mb-6">
              <li>
                Opportunity for family exchange programs and travel abroad.
              </li>
              <li>
                Participation in futurecity initiatives and global villages.
              </li>
              <li>
                Access to world-class institutes and futuristic research areas.
              </li>
            </ul>
          </div>

          {/* Corporate Membership */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Corporate Membership
            </h3>
            <p className="text-lg mb-4">
              For an annual fee of <strong>$500</strong>, corporate members can
              join a synergy-rich platform, collaborating on mega-projects with
              futurecity Inc. Corporate membership grants companies a unique
              opportunity to be part of constructing eco-friendly cities and
              villages while leveraging a vast network of expertise and
              resources.
            </p>
            <ul className="list-disc ml-8 mb-6">
              <li>
                Instant access to SFUO’s integrated technology and opportunity
                platform.
              </li>
              <li>
                Business affiliate status with futurecity Inc. for
                mega-projects.
              </li>
              <li>
                Support through the patenting and commercialization processes.
              </li>
            </ul>
          </div>

          {/* Futurecity Options */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              Futurecity Options
            </h3>

            {/* Build My Home */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">Build My Home</h4>
              <p className="text-lg mb-4">
                SFUO members can choose to build their next home in a futurecity
                or global village. For payments starting at{" "}
                <strong>$100 per month</strong>, members invest in a future
                living space, contributing to eco-friendly infrastructure.
              </p>
              <p className="text-lg mb-4">
                Payments are cumulative, allowing members to accrue units over
                time. Options range from shared tiny homes to more substantial
                structures based on the number of units.
              </p>
            </div>

            {/* Educate My Child */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">Educate My Child</h4>
              <p className="text-lg mb-4">
                Members can secure a place for their children at an
                international institute through monthly contributions of{" "}
                <strong>$100</strong>. Contributions accumulate over five years,
                allowing members to either withdraw or continue investing based
                on circumstances.
              </p>
              <p className="text-lg">
                These funds contribute to the development of futurecities and
                educational facilities, ensuring a holistic approach to a
                sustainable future.
              </p>
            </div>
          </div>

          {/* Refund Policy */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Refund Policy
            </h3>
            <p className="text-lg mb-4">
              Membership fees are non-refundable, but installment payments
              towards futurecity options are refundable after each five-year
              block. For example, after five years of monthly payments totaling
              <strong> $24,000</strong>, members can choose to withdraw their
              funds or continue investing for future options. Flexibility is
              offered for any life changes or financial needs.
            </p>
            <p className="text-lg mb-4">
              Members are entitled to a peaceful lifestyle and housing in
              eco-friendly settings, with options that include lifetime
              retirement housing or professional education for family members.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              Contact Us
            </h3>
            <p className="text-lg mb-4">
              Interested in becoming a member or learning more about futurecity
              options? Reach out to us at:
            </p>
            <address className="text-lg not-italic">
              Society for Universal Oneness and futurecity Inc.
              <br />
              100 Saint Ayers Way,
              <br />
              Chapel Hill, NC 27517-2362, USA
              <br />
              <a
                href="mailto:member@1world1nation.org"
                className="text-blue-500 underline"
              >
                member@1world1nation.org
              </a>
            </address>
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Membership;
