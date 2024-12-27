import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
import { postCollaborativeParticipation } from "../../api/collaborativeParticipation";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  stateOrRegion: string;
  postalCode: string;
  country: string;
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
  additionalInfo: string;
  collaborationType: string;
  collaborationFocus: string;
};

const CollaborativeParticipationPlatform: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitting(true);
    try {
      // Placeholder for actual API submission logic
      const res = await postCollaborativeParticipation(data);

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
          Join Us {">"} Collaborative Participation Platform
        </h1>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      <section className="bg-white px-5 md:px-20 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Welcome to SFUO Collaborative Participation Platform
          </h2>
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="px-5 md:px-20 py-10">
        {/* Basic Member Information */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Basic Member Information
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col">
              <Label htmlFor="fullName" className="mb-1 font-medium">
                Name/Organization Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                {...register("fullName", {
                  required: "Name/Organization Name is required",
                })}
                className="px-4 py-2 border rounded-md "
                placeholder="Enter Name/Organization Name For individuals or entities"
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
                className="px-4 py-2 border rounded-md "
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
                {...register("phone", { required: "Phone number is required" })}
                className="px-4 py-2 border rounded-md "
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
                  className="px-4 py-2 border rounded-md "
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
                  State <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="stateOrRegion"
                  {...register("stateOrRegion", {
                    required: "State or Region is required",
                  })}
                  className="px-4 py-2 border rounded-md "
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
                  className="px-4 py-2 border rounded-md  border-black"
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
            </div>
          </div>
        </section>

        {/* Purpose Type Selection */}

        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Purpose</h2>
          <div className="mb-4">
            <Label
              htmlFor="membershipType"
              className="block text-lg font-medium mb-2"
            >
              Select Purpose <span className="text-red-500">*</span>
            </Label>
            <select
              id="membershipType"
              {...register("membershipType", {
                required: "Purpose is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select Purpose --</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Information Request">Information Request</option>
            </select>
            {errors.membershipType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.membershipType.message}
              </p>
            )}
          </div>
        </section>

        {/* Collaboration Type Selection */}
        <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Collaboration Type
          </h2>
          <div className="space-y-6">
            <div className="mb-4">
              <Label
                htmlFor="collaborationType"
                className="block text-lg font-medium mb-2"
              >
                Select Collaboration Type{" "}
                <span className="text-red-500">*</span>
              </Label>
              <select
                id="collaborationType"
                {...register("collaborationType", {
                  required: "Collaboration Type is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Select Collaboration Type --</option>
                <option value="Individual">Individual</option>
                <option value="Organization/Business">
                  Organization/Business
                </option>
              </select>
            </div>

            <div className="mb-4">
              <Label
                htmlFor="collaborationFocus"
                className="block text-lg font-medium mb-2"
              >
                Collaboration Focus <span className="text-red-500">*</span>
              </Label>
              <select
                id="collaborationFocus"
                {...register("collaborationFocus", {
                  required: "Collaboration Focus is required",
                })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Select Collaboration Focus --</option>
                <option value="Technology/Service Provider">
                  Technology/Service Provider
                </option>
                <option value="Investor">Investor</option>
                <option value="Pilot Program Collaborator">
                  Pilot Program Collaborator
                </option>
                <option value="Resource Support">
                  Resource Support (e.g., financial, technical, facilities)
                </option>
              </select>
            </div>
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
              {...register("agreePrivacy", {
                required: "You must agree to the privacy policy",
              })}
              className="mr-2"
            />
            <Label htmlFor="privacyPolicy">
              I agree to comply with the data privacy policies
              <span className="text-red-500">*</span>
            </Label>
            {errors.agreePrivacy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.agreePrivacy.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="additionalInfo"
              className="block text-lg font-medium"
            >
              Additional Information
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
            "Submit Your Request"
          )}
        </Button>
      </form>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CollaborativeParticipationPlatform;
