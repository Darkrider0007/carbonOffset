import Navbar from "../components/Navbar";
import main from "../assets/offset/main.png";
// import road from "../assets/offset/road.png";
// import certificate from "../assets/offset/certificate.png";
import Footer from "../components/Footer";
import { FaArrowRight, FaLock } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AddToWallet } from "../api/stripe/checkout";
import { Loader2 } from "lucide-react";
// import { getTokenData } from "../api/token";
import Newsletter from "../components/Newsletter";
import SmoothScroll from "../components/SmoothScroll";

const OffsetNow = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fixAmount, setFixAmount] = useState<number>(0);
  const [fixTokens, setFixTokens] = useState<number>(0);
  const [tokens, setTokens] = useState<number>(0);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("1-Year Plan");
  const [submitting, setSubmitting] = useState(false);

  const location = useLocation();
  const { state } = location;
  console.log(state?.totalEmissions);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(Number(value));
  };

  const navigate = useNavigate();
  const handleFrequencyClick = (frequency: string) => {
    setSelectedFrequency(frequency);
  };

  const handleAddToWallet = async () => {
    setSubmitting(true);
    try {
      const paymentType = selectedFrequency == "One-Time" ? "payment" : "subscription";
      let duration = 1;
      if (selectedFrequency === "1-Year Plan") {
        duration = 1;
      } else if (selectedFrequency === "2-Year Plan") {
        duration = 1;
      } else if (selectedFrequency === "3-Year Plan") {
        duration = 1;
      }

      const res = await AddToWallet({ amount, tokens, paymentType, duration, clientType: state ? state?.clientType : "individual", businessId: state?.businessId });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedFrequency === "One-Time") {
      setAmount(Number(fixAmount.toFixed(2)));
      setTokens(fixTokens);
    }
    if (selectedFrequency === "1-Year Plan") {
      setAmount(Number((fixAmount / 12).toFixed(2)));
      setTokens(fixTokens / 12);
    }
    if (selectedFrequency === "2-Year Plan") {
      setAmount(Number((fixAmount / 24).toFixed(2)));
      setTokens(fixTokens / 24);

    }
    if (selectedFrequency === "3-Year Plan") {
      setAmount(Number((fixAmount / 36).toFixed(2)));
      setTokens(fixTokens / 36);

    }
  }, [selectedFrequency]);

  useEffect(() => {
    const amountChange = async () => {
      try {
        // const res = await getTokenData();
        if (state?.totalEmissions) {
          const totalAmount = state?.totalEmissions * 0.36 * 375;
          setFixAmount(Number(totalAmount.toFixed(2)));
          setAmount(Number(((Number(totalAmount.toFixed(2))) / 12).toFixed(2)));
          setTokens(totalAmount / 100);
          setFixTokens(totalAmount / 100);
          // setTokens(res.data.tokenPerTon * state?.totalEmissions);
          // setFixTokens(res.data.tokenPerTon * state?.totalEmissions);

        } else {
          // const tokenPrice = res.data.tokenPrice;
          setTokens(amount / 100);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    amountChange();
  }, []);


  useEffect(() => {
    // Scroll to the <main> element on the first render
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <SmoothScroll>
      <div>
        <Navbar />
        <main
          style={{
            backgroundImage: `url(${main})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
          className="relative"
        >
          <div className="h-full w-full bg-black/[0.4] flex justify-center items-center">
            <div className="w-[90%] md:w-1/2 flex flex-col gap-5 items-center h-[70%] text-white">
              <h1 className="uppercase text-xs font-bold">offset now</h1>
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                Purchase Carbon Credits
              </h1>
              <div className="bg-white text-black w-full md:w-[80%] gap-4 p-5 py-10 rounded-md flex flex-col items-center">
                <h1 className="font-semibold">Enter Dollar Amount</h1>
                <input
                  placeholder="100 $"
                  disabled={true}
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full h-14 text-2xl md:text-4xl font-bold text-center border-b-2 border-black focus:outline-none focus:border-b-2"
                />
                <h1 className="font-semibold">Select Frequency</h1>
                <div className="flex flex-wrap gap-3 w-full items-center justify-center">
                  {["One-Time", "1-Year Plan", "2-Year Plan", "3-Year Plan"].map((frequency) => (
                    <div
                      key={frequency}
                      onClick={() => handleFrequencyClick(frequency)}
                      className={`w-24 md:w-32 text-center py-3 ${selectedFrequency === frequency
                        ? "bg-green-600 text-white"
                        : "bg-gray-300"
                        } hover:bg-green-600 hover:text-white text-lg font-bold rounded-md cursor-pointer`}
                    >
                      {frequency}
                    </div>
                  ))}
                </div>
                <h1 className="text-xs tracking-[4px] uppercase font-bold">
                  total{" "}
                  <span className="text-green-600">
                    {tokens.toFixed(2)} tokens
                  </span>
                </h1>
                <button
                  onClick={handleAddToWallet}
                  className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-full md:w-[80%] rounded-full"
                >
                  {!submitting ? (
                    <>
                      <h1 className="font-bold">Add to Wallet</h1>
                      <FaLock />
                    </>
                  ) : (
                    <>
                      <h1 className="font-bold">Adding to Wallet</h1>
                      <Loader2 />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* calculator  */}
        <div className="bg-[#DEFFDD] flex items-center justify-center pt-8 md:pt-0 p-10 md:p-20 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-center text-center mt-8">
            <h1 className="uppercase text-xs font-bold">
              unsure about your impact?
            </h1>
            <h1 className="text-xl md:text-3xl w-[90%] md:w-[70%]">
              Use Our Calculator To See How Much Carbon To Offset
            </h1>
            <button
              className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-[60%] md:w-[40%] rounded-full"
              onClick={() => navigate("/calculator")}
            >
              <h1 className="font-bold">Calculate Carbon footprint</h1>
              <FaArrowRight />
            </button>
          </div>
          {/* <div className="w-full md:w-1/2 flex flex-col gap-5 items-center mt-10 md:mt-0 text-center">
          <h1 className="uppercase text-xs font-bold">
            Already Know Your Impact?
          </h1>
          <h1 className="text-xl md:text-3xl w-[90%] md:w-[70%]">
            Instantly Offset Your Carbon With Our Custom Purchase Tool
          </h1>
          <button className="flex justify-between px-6 py-3 bg-green-600 items-center text-white w-[60%] md:w-[40%] rounded-full">
            <h1 className="font-bold">Buy Carbon Credits Now</h1>
            <FaArrowRight />
          </button>
        </div> */}
        </div>

        <Newsletter />

        {/* certificate */}
        {/* <div className="flex flex-col md:flex-row">
        <div className="bg-black px-10 py-10 text-white w-full md:w-[70%]">
          <h1 className="uppercase text-xs font-bold">Proof Of Purchase</h1>
          <h1 className="text-2xl md:text-3xl w-full md:w-80">
            Receive A Certificate Upon Purchase
          </h1>
        </div>
        <div className="w-full md:w-[30%] relative">
          <img src={road} className="w-full" />
          <img
            src={certificate}
            className="w-full absolute -top-10 -left-10 md:-left-56"
          />
        </div>
      </div> */}

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default OffsetNow;
