import { useForm, SubmitHandler } from "react-hook-form";
import Navbar from "../../components/Navbar";
import heroImg from "../../assets/FarmOnboarding/Background.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import newsletterbg from "../../assets/home/newsletterbg.png";
import logo from "../../assets/home/logo.png";
import { createFarmOnboard } from "../../api/farmOnboard";
import { toast } from "../../hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import SmoothScroll from "../../components/SmoothScroll";

// Define the form field types
type FarmOnboardingFormValues = {
  email: string;
  name: string;
  phone: string;
  organization?: string;
  address: string;
  area: string;
  latitudeDegree: string;
  latitudeMinute: string;
  latitudeSecond: string;
  latitudeDirection: string;
  longitudeDegree: string;
  longitudeMinute: string;
  longitudeSecond: string;
  longitudeDirection: string;
  vegetationType: string;
  document: FileList;
};

function FarmOnboarding() {
  const navigate = useNavigate();
  const [btnClicked, setBtnClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FarmOnboardingFormValues>();

  // Function to handle form submission
  const onSubmit: SubmitHandler<FarmOnboardingFormValues> = async (data) => {
    setBtnClicked(true);
    try {
      const coordinates = `Latitude: ${data.latitudeDegree}°${data.latitudeMinute}'${data.latitudeSecond}" ${data.latitudeDirection}, Longitude: ${data.longitudeDegree}°${data.longitudeMinute}'${data.longitudeSecond}" ${data.longitudeDirection}`;

      const submissionData = {
        ...data,
        coordinates,
      };

      console.log(submissionData);

      const res = await createFarmOnboard(submissionData);

      if (res.status === 201) {
        toast({
          title: "Farm Onboarding Application Submitted Successfully",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to submit the form", error);
      toast({
        title: "Failed to submit the form",
        variant: "destructive",
      });
    } finally {
      setBtnClicked(false);
    }
  };

  // Generating options for degrees, minutes, and seconds dropdown
  const generateOptions = (start: number, end: number) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <SmoothScroll>
      <div>
        <Navbar />

        {/* Hero Section */}
        <div
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            width: "100%",
          }}
          className="flex flex-col gap-3 justify-center items-center relative"
        >
          <h1 className="text-[#808080] text-3xl md:text-6xl font-bold w-full md:w-1/2 text-center">
            Farm Onboarding
          </h1>
          <h1 className="text-[#808080] text-xl md:text-xl w-full md:w-1/2 text-center">
            Home{" > "}FarmOnboard Application
          </h1>
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center gap-4 mt-8 px-4 md:px-0">
          <h1 className="text-[#808080] text-3xl md:text-4xl font-bold">
            Farm Onboarding Application
          </h1>
          <p className="text-[#808080] text-lg md:text-xl w-full md:w-1/2 text-center">
            Please fill out the form below to apply for farm onboarding.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            {/* Email */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                {...register("email", { required: "Email is required" })}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Your answer"
                {...register("name", { required: "Name is required" })}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone No. */}
            <div>
              <label className="block text-black text-xl  font-semibold mb-2">
                Phone No. <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Your answer"
                {...register("phone", { required: "Phone number is required" })}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Organization/Company Name */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Organization/Company Name
              </label>
              <input
                type="text"
                placeholder="Your answer"
                {...register("organization")}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Farm Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Your answer"
                {...register("address", { required: "Address is required" })}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Area */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Area (Acres) <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                step="0.01" // Allows decimals up to two places for partial acres
                placeholder="Your answer"
                {...register("area", {
                  required: "Area is required",
                  validate: (value) =>
                    parseFloat(value) > 0 || "Area must be greater than 0",
                })}
                className="p-4 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              {errors.area && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.area.message}
                </p>
              )}
            </div>

            {/* Latitude */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Latitude <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  {...register("latitudeDegree", {
                    required: "Latitude degree is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Degree</option>
                  {generateOptions(0, 90)}
                </select>
                <select
                  {...register("latitudeMinute", {
                    required: "Latitude minute is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Minute</option>
                  {generateOptions(0, 59)}
                </select>
                <select
                  {...register("latitudeSecond", {
                    required: "Latitude second is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Second</option>
                  {generateOptions(0, 59)}
                </select>
                <select
                  {...register("latitudeDirection", {
                    required: "Direction is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Direction</option>
                  <option value="N">N</option>
                  <option value="S">S</option>
                </select>
              </div>
              {errors.latitudeDegree && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.latitudeDegree.message}
                </p>
              )}
              {errors.latitudeMinute && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.latitudeMinute.message}
                </p>
              )}
              {errors.latitudeSecond && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.latitudeSecond.message}
                </p>
              )}
              {errors.latitudeDirection && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.latitudeDirection.message}
                </p>
              )}
            </div>

            {/* Longitude */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Longitude <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  {...register("longitudeDegree", {
                    required: "Longitude degree is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Degree</option>
                  {generateOptions(0, 180)}
                </select>
                <select
                  {...register("longitudeMinute", {
                    required: "Longitude minute is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Minute</option>
                  {generateOptions(0, 59)}
                </select>
                <select
                  {...register("longitudeSecond", {
                    required: "Longitude second is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Second</option>
                  {generateOptions(0, 59)}
                </select>
                <select
                  {...register("longitudeDirection", {
                    required: "Direction is required",
                  })}
                  className="p-4 rounded-md border border-gray-300 w-1/4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Direction</option>
                  <option value="E">E</option>
                  <option value="W">W</option>
                </select>
              </div>
              {errors.longitudeDegree && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.longitudeDegree.message}
                </p>
              )}
              {errors.longitudeMinute && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.longitudeMinute.message}
                </p>
              )}
              {errors.longitudeSecond && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.longitudeSecond.message}
                </p>
              )}
              {errors.longitudeDirection && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.longitudeDirection.message}
                </p>
              )}
            </div>

            {/* Type of Vegetation */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Type of Vegetation <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("vegetationType", {
                    required: "Type of Vegetation is required",
                  })}
                  className="p-4 rounded-lg border border-gray-300 w-full bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="" disabled>
                    Select Vegetation Type
                  </option>
                  <option value="Pasture">Pasture</option>
                  <option value="Forest">Forest</option>
                  <option value="Wetland">Wetland</option>
                  <option value="Cropland">Cropland</option>
                  <option value="Grassland">Grassland</option>
                  <option value="Orchard">Orchard</option>
                </select>
              </div>
              {errors.vegetationType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.vegetationType.message}
                </p>
              )}
            </div>

            {/* Document Upload (PDF only) */}
            <div>
              <label className="block text-black text-xl font-semibold mb-2">
                Upload Document (Proof of Ownership PDF Only){" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                accept=".pdf"
                {...register("document", { required: "Document is required" })}
                id="file-upload"
                className="bg-gray-100 p-4 rounded-md border border-gray-300 w-full"
              />
              {errors.document && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.document.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-center w-full">
              <button
                type="submit"
                className="p-4 bg-green-500 hover:bg-green-600 text-white text-xl w-1/3 rounded-md my-4"
                disabled={btnClicked}
              >
                {btnClicked ? (
                  <div className="flex flex-row justify-center items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4 " /> Submitting . .
                    .
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Newsletter */}
        <div
          style={{
            backgroundImage: `url(${newsletterbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "150px",
          }}
          className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-5 md:py-0"
        >
          <div className="flex gap-5 md:gap-16 items-center">
            <img src={logo} alt="logo" className="w-24 mb-4" />
            <h1 className="text-xl text-white">Join Our Newsletter</h1>
          </div>
          <div className="flex gap-3 mt-5 md:mt-0">
            <input
              className="w-60 h-10 rounded-md p-2 bg-white"
              placeholder="Enter your email"
            />
            <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default FarmOnboarding;
