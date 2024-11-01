import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import Newsletter from "../../components/Newsletter";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Loader2 } from "lucide-react";
import { sendPropsal } from "../../api/proposal";
import { toast } from "../../hooks/use-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  proposalDetails: string;
  needFunds: boolean;
};

const SubmitYourProposal: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const respose = await sendPropsal(data);

      if (respose.status === 201) {
        toast({
          title: "Proposal Submitted",
          description: "Thank you for submitting your proposal.",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred while submitting your proposal.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting your proposal.",
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
          Join Us {">"} Submit Your Proposal
        </h1>
        <img src={curve} className="absolute bottom-0 w-full" />
      </div>

      {/* Form Section */}
      <div className="px-5 md:px-20 py-10 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
          SFUO invites you to participate in a global effort to create a better
          world.
        </h2>
        <p className="text-lg mb-8">
          If you have ideas that can benefit the world we live in and help
          protect its precious environment, please write to us with your
          proposal.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              placeholder="First"
              {...register("firstName", { required: "First name is required" })}
              className="mt-1 w-full"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              placeholder="Last"
              {...register("lastName", { required: "Last name is required" })}
              className="mt-1 w-full"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              className="mt-1 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Proposal Details */}
          <div>
            <Label htmlFor="proposalDetails">Proposal Details *</Label>
            <Textarea
              id="proposalDetails"
              placeholder="Please provide details of your proposal"
              {...register("proposalDetails", {
                required: "Proposal details are required",
              })}
              className="mt-1 w-full"
            />
            {errors.proposalDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.proposalDetails.message}
              </p>
            )}
          </div>

          {/* Funding Requirement */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="needFunds"
              {...register("needFunds")}
              className="mr-2"
            />
            <Label htmlFor="needFunds">
              Do you need funds for this proposal?
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
            disabled={submitting}
          >
            {submitting ? (
              <div className="flex flex-row ">
                Submitting ...{" "}
                <Loader2 className="ml-2 animate-spin" size={20} />
              </div>
            ) : (
              "Submit Proposal"
            )}
          </Button>
        </form>
      </div>

      {/* Newsletter */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SubmitYourProposal;
