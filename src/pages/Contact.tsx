import { useState } from "react";
import Navbar from "../components/Navbar";
import curve from "../assets/home/curve.png";
import mainbg from "../assets/services/mainbg.png";
import Footer from "../components/Footer";
import contact from "../assets/contact/contact.png";
import Newsletter from "../components/Newsletter";
import SmoothScroll from "../components/SmoothScroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@ination1world.org?subject=Contact Form Submission&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <SmoothScroll>
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
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              Contact Us
            </h1>
            <img src={curve} className="absolute bottom-0 w-full" alt="curve" />
          </div>
        </div>

        {/* contact form */}
        <div className="flex flex-col md:flex-row items-center my-16 px-5 md:px-20">
          <div className="w-full md:w-1/2 flex flex-col items-start p-5 md:p-20 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Contact Us</h1>
            <h2 className="text-lg mb-6">
              Our friendly team would love to hear from you
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
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
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
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
                    value={formData.lastName}
                    onChange={handleChange}
                    required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-600 hover:bg-green-400 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-5 md:p-10">
            <img
              src={contact}
              alt="Contact"
              className="hidden md:block w-full"
            />
          </div>
        </div>

        {/* newsletter */}
        <Newsletter />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Contact;
