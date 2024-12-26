import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import { countries } from "../../constants/countries";
import { postVolunteerRegistration } from "../../api/volunteerRegistration";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  stateOrRegion: string;
  postalCode: string;
  country: string;
  ageGroup: number;
  membershipType: string;
  organizationName?: string;
  organizationAddress?: string;
  organizationCity?: string;
  organizationPostalCode?: string;
  organizationType?: string;
  paymentMethod: string;
  autoRenew: boolean;
  agreePrivacy: boolean;
  digitalSignature: string;
  idProof?: FileList;
  corporateRegistration?: FileList;
  digitalSignatureName: string;
  volunteerRole: string;
  otherRole?: string;
  preferredInitiative: string;
  privacyPolicy: boolean;
  additionalInfo: string;
  otherRoleText: string;
};

const VolunteerRegistrationForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const selectedRole = useWatch({
    control,
    name: "volunteerRole",
    defaultValue: "", // Provide a default value
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitting(true);
    try {
      // Placeholder for actual API submission logic
      const res = await postVolunteerRegistration(data);

      if (res.status == 201) {
        navigate("/");
        toast({
          title: "Success",
          description: "Your membership has been registered successfully.",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred during registration.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during registration.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
          Join Us {">"} Volunteer Registration Form
        </h1>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      <section className="bg-white px-5 md:px-20 pt-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Welcome to SFUO Volunteer Registration Form
          </h2>
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="px-5 md:px-20 py-10">
        {/* Personal Information */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Personal Information
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col">
              <Label htmlFor="fullName" className="mb-1 font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                className="px-4 py-2 border rounded-md"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <Label htmlFor="email" className="mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="px-4 py-2 border rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <Label htmlFor="phone" className="mb-1 font-medium">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="px-4 py-2 border rounded-md"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="city" className="mb-1 font-medium">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  {...register("city", { required: "City is required" })}
                  className="px-4 py-2 border rounded-md"
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="stateOrRegion" className="mb-1 font-medium">
                  State/Region <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="stateOrRegion"
                  {...register("stateOrRegion", {
                    required: "State/Region is required",
                  })}
                  className="px-4 py-2 border rounded-md"
                  placeholder="Enter your state or region"
                />
                {errors.stateOrRegion && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.stateOrRegion.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="country" className="mb-1 font-medium">
                  Country <span className="text-red-500">*</span>
                </Label>
                <select
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  className="px-4 py-2 border rounded-md border-black"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <Label htmlFor="ageGroup" className="mb-1 font-medium">
                  Age Group <span className="text-red-500">*</span>
                </Label>
                <select
                  id="ageGroup"
                  {...register("ageGroup", {
                    required: "Age group is required",
                  })}
                  className="px-4 py-2 border rounded-md border-black"
                >
                  <option value="">Select age group</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-50">36-50</option>
                  <option value="50+">50+</option>
                </select>
                {errors.ageGroup && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ageGroup.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Roles Selection */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Volunteer Roles and Preferences
          </h2>
          <div className="space-y-4">
            <div className="mb-4">
              <Label
                htmlFor="volunteerRole"
                className="block text-lg font-medium mb-2"
              >
                Preferred Role <span className="text-red-500">*</span>
              </Label>
              <select
                id="volunteerRole"
                {...register("volunteerRole", {
                  required: "Preferred role is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Select Preferred Role --</option>
                <option value="Cleanup and Maintenance">
                  Cleanup and Maintenance
                </option>
                <option value="Community Outreach">Community Outreach</option>
                <option value="Educational Campaigns">
                  Educational Campaigns
                </option>
                <option value="Technical Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
              {errors.volunteerRole && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.volunteerRole.message}
                </p>
              )}
            </div>

            {selectedRole === "Other" && (
              <div className="mt-4">
                <Label
                  htmlFor="otherRole"
                  className="block text-lg font-medium mb-2"
                >
                  Please Specify Your Role{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="otherRole"
                  type="text"
                  {...register("otherRole", {
                    required: "Please specify your role",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Please specify your preferred role"
                />
                {errors.otherRole && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.otherRole.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Preferred Initiatives Selection */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Preferred Initiatives
          </h2>
          <div className="mb-4">
            <Label
              htmlFor="preferredInitiative"
              className="block text-lg font-medium mb-2"
            >
              Preferred Initiatives/Projects{" "}
              <span className="text-red-500">*</span>
            </Label>
            <select
              id="preferredInitiative"
              {...register("preferredInitiative", {
                required: "Preferred initiative is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">
                -- Select Preferred Initiative/Projects --
              </option>
              <option value="Clean Kailash">Clean Kailash</option>
              <option value="Pedal Power">Pedal Power</option>
              <option value="Tree Homes @ Global Village">
                Tree Homes @ Global Village
              </option>
              <option value="Green Schools Initiative">
                Green Schools Initiative
              </option>
              <option value="Community Gardens">Community Gardens</option>
            </select>
            {errors.preferredInitiative && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredInitiative.message}
              </p>
            )}
          </div>
        </section>

        {/* Additional Details and Submission */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md space-y-6">
          <h1 className="text-2xl font-bold mt-10 mb-5 text-green-700">
            Additional Details and Submission
          </h1>

          <div>
            <input
              type="checkbox"
              id="privacyPolicy"
              {...register("privacyPolicy", {
                required: "You must agree to the privacy policy",
              })}
              className="mr-2"
            />
            <Label htmlFor="privacyPolicy">
              I agree to comply with the data privacy policies
              <span className="text-red-500">*</span>
            </Label>
            {errors.privacyPolicy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.privacyPolicy.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="additionalInfo"
              className="block text-lg font-medium"
            >
              Additional Notes
            </Label>
            <textarea
              id="additionalInfo"
              {...register("additionalInfo")}
              placeholder="Please provide any additional details or messages..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[150px]"
            />
          </div>
        </section>
        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
          disabled={submitting}
        >
          {submitting ? (
            <div className="flex items-center">
              Submitting... <Loader2 className="ml-2 animate-spin" size={20} />
            </div>
          ) : (
            "Submit Your Registration"
          )}
        </Button>
      </form>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default VolunteerRegistrationForm;
