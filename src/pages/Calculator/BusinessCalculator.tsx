import { useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

interface FormData {
  name: string;
  title: string;
  company: string;
  industry: "technology" | "manufacturing" | "services" | "";
  employees: number;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  postalCode: string;
}

const BusinessCalculator: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData): void => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-start mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-400">BUSINESS</h2>
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
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YOUR NAME<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    className="w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YOUR TITLE<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("title", { required: "Title is required" })}
                    className="w-full"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YOUR COMPANY<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("company", {
                      required: "Company is required",
                    })}
                    className="w-full"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    INDUSTRY<span className="text-red-500">*</span>
                  </label>
                  <div className="w-full px-4 py-2 border border-black rounded-md focus:outline-none">
                    <select
                      {...register("industry", {
                        required: "Industry is required",
                      })}
                      className="w-full border-0 focus:outline-none"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="services">Services</option>
                    </select>
                  </div>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.industry.message}
                    </p>
                  )}
                </div>

                {/* Employees */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NUMBER OF EMPLOYEES<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="number"
                    {...register("employees", {
                      required: "Employees is required",
                      valueAsNumber: true,
                    })}
                    className="w-full"
                  />
                  {errors.employees && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.employees.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YOUR EMAIL<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YOUR PHONE<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    COUNTRY<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className="w-full"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ADDRESS<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="w-full"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CITY<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("city", { required: "City is required" })}
                    className="w-full"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / POSTAL CODE<span className="text-red-500">*</span>
                  </label>
                  <Input
                    {...register("postalCode", {
                      required: "Postal Code is required",
                    })}
                    className="w-full"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BusinessCalculator;
