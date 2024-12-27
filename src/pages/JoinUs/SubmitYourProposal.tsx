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
import { toast } from "../../hooks/use-toast";
import { sendProposal } from "../../api/proposal";
import { useNavigate } from "react-router-dom";
import SmoothScroll from "../../components/SmoothScroll";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  affiliation: string;
  proposalTitle: string;
  proposalDetails: string;
  focusArea: string;
  supportingDocuments?: FileList;
  agreePrivacy: boolean;
};

const SubmitYourProposal: React.FC = () => {
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
      // Handle file upload with a different mechanism if needed, here it's just logged
      const res = await sendProposal(data);

      if (res.status === 201) {
        toast({
          title: "Success",
          description: "Your proposal has been submitted successfully.",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
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
            Join Us {">"} Submit Your Proposal
          </h1>
          <img src={curve} className="absolute bottom-0 w-full" />
        </div>

        {/* Form Section */}
        <div className="px-5 md:px-20 py-10 text-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal or Organization Details */}
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="mt-1 w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
                className="mt-1 w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
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

            <div>
              <Label htmlFor="affiliation">Affiliation (Optional)</Label>
              <Input
                id="affiliation"
                placeholder="Enter your affiliation"
                {...register("affiliation")}
                className="mt-1 w-full"
              />
            </div>

            {/* Proposal Details */}
            <div>
              <Label htmlFor="proposalTitle">
                Proposal Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="proposalTitle"
                placeholder="Enter your proposal title"
                {...register("proposalTitle", {
                  required: "Proposal title is required",
                })}
                className="mt-1 w-full"
              />
              {errors.proposalTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.proposalTitle.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="proposalDetails">
                Proposal Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="proposalDetails"
                placeholder="Enter your proposal description"
                {...register("proposalDetails", {
                  required: "Proposal description is required",
                })}
                className="mt-1 w-full"
              />
              {errors.proposalDetails && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.proposalDetails.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="focusArea">Focus Area *</Label>
              <div className="mt-1 w-full pr-4">
                <select
                  id="focusArea"
                  {...register("focusArea", {
                    required: "Selecting a focus area is required",
                  })}
                  className="mt-1 w-full p-2 border rounded"
                >
                  <option value="">Select Focus Area</option>
                  <option value="Environmental Protection">
                    Environmental Protection
                  </option>
                  <option value="Education">Education</option>
                  <option value="Skill Development">Skill Development</option>
                  <option value="Global Collaboration">
                    Global Collaboration
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.focusArea && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.focusArea.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="supportingDocuments">
                Supporting Documents (Optional)
              </Label>
              <input
                type="file"
                id="supportingDocuments"
                {...register("supportingDocuments")}
                className="mt-1 w-full p-2 border rounded"
                multiple
                accept=".pdf"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreePrivacy"
                {...register("agreePrivacy", {
                  required: "You must agree to the privacy policy",
                })}
                className="mr-2"
              />
              <Label htmlFor="agreePrivacy">
                I agree to the privacy policy and terms for submitting my
                proposal.
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

        <Newsletter />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default SubmitYourProposal;
