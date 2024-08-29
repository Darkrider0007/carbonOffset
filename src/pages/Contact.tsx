import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";
import Footer from "../components/Footer";
import contact from "../assets/contact/contact.png";

const Contact = () => {
  return (
    <div>
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
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>

          <img src={curve} className="absolute bottom-0 w-full" />
        </div>
      </div>

      {/* contact form  */}

      <div className="flex items-center my-16 ">
        <div className="w-1/2  flex flex-col items-start p-20 bg-white ">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <h2 className="text-lg mb-6">
            Our friendly team would love to hear from you
          </h2>
          <form className="w-full">
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows={4}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-400 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-10">
          <img src={contact} className="" />
        </div>
      </div>

      {/* newsletter  */}

      <div
        style={{
          backgroundImage: `url(${newsletterbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
        className="flex items-center justify-between px-16"
      >
        <div className="flex gap-16 items-center  ">
          <img src={logo} alt="logo" />
          <h1 className="text-xl text-white">Join Our Newsletter</h1>
        </div>
        <div className="flex gap-3">
          <input
            className="w-60 h-10 rounded-md p-2 bg-white "
            placeholder="Enter your email"
          />
          <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md ">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
