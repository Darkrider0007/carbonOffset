import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/SmoothScroll";
import BusinessDetails from "../../components/Calculator/Business/BusinessDetails";
import { useContext, useEffect, useState } from "react";
import CollectOffsetDetails from "../../components/Calculator/Business/CollectOffsetDetails";
import UserContext from "../../context/UserContext";
import LoginModal from "../../components/LoginModal";

const BusinessCalculator: React.FC = () => {
  const [businessId, setBusinessId] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { user } = context;

  const setID = (id: string) => {
    setBusinessId(id);
  }

  useEffect(() => {
    console.log(businessId);
  }, [businessId]);

  useEffect(() => {
    if (!user) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [user]);

  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <main className="mx-auto px-4 sm:px-6 md:px-12 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-start mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-400">
                BUSINESS
              </h2>
              <h3 className="text-5xl font-semibold">CALCULATOR</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative">
                <div className="absolute right-12 md:right-20 top-10 h-[300px] md:h-[500px] w-[250px] md:w-[400px] bg-green-600 rounded-xl" />
                <img
                  src="https://i.ibb.co/d5FfLWc/Forest-Grass.jpg"
                  alt="Forest-Grass"
                  className="relative w-[250px] md:w-[400px] h-[300px] md:h-[500px] rounded-xl object-cover z-10"
                />
              </div>

              {/* Form Section */}
              {
                businessId === null ?
                  <BusinessDetails setID={setID} /> :
                  <CollectOffsetDetails businessId={businessId} />
              }


            </div>
          </div>
        </main>
        <Newsletter />
        <Footer />
        {/* Login Modal */}
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </SmoothScroll>
  );
};

export default BusinessCalculator;
