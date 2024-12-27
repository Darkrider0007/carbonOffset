import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "../../hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import curve from "../../assets/home/curve.png";
import mainbg from "../../assets/services/mainbg.png";
import { countries } from '../../constants/countries';
import { sendMembership } from '../../api/Membership';
import SmoothScroll from '../../components/SmoothScroll';

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
};

const MembershipForm: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const membershipType = watch("membershipType");
    const isCorporate = membershipType === "Corporate Membership ($500/year)";

    const onSubmit = async (data: FormData) => {
        console.log(data);
        setSubmitting(true);
        try {
            // Placeholder for actual API submission logic
            const res = await sendMembership(data);

            if (res.status == 201) {
                navigate('/');
                toast({
                    title: "Success",
                    description: "Your membership has been registered successfully.",
                });
            }
            else {
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
              Join Us {">"} Membership Form
            </h1>
            <img src={curve} className="absolute bottom-0 w-full" />
          </div>

          <section className="bg-white px-5 md:px-20 py-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Welcome to SFUO Membership
              </h2>
              <p className="text-lg text-gray-700">
                This form is designed to simplify the registration process for
                all types of members: individuals and corporate entities. By
                dynamically adjusting fields based on membership type, we ensure
                a streamlined experience. Whether you are joining as an
                individual for personal and professional opportunities or as a
                corporate entity to align with sustainable initiatives, this
                form collects all essential information securely and
                efficiently.
              </p>
              <div className="mt-6">
                <p className="text-xl font-medium text-green-600">
                  Membership Fees:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Individual Membership: $100/year</li>
                  <li>Corporate Membership: $500/year</li>
                </ul>
              </div>
            </div>
          </section>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-5 md:px-20 py-10"
          >
            {/* Basic Member Information */}
            <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Basic Member Information
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <Label htmlFor="fullName" className="mb-1 font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="px-4 py-2 border rounded-md "
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
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="px-4 py-2 border rounded-md "
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="streetAddress" className="mb-1 font-medium">
                    Street Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="streetAddress"
                    {...register("streetAddress", {
                      required: "Street address is required",
                    })}
                    className="px-4 py-2 border rounded-md "
                    placeholder="Enter your street address"
                  />
                  {errors.streetAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.streetAddress.message}
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
                      State/Region <span className="text-red-500">*</span>
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
                    <Label htmlFor="postalCode" className="mb-1 font-medium">
                      Postal Code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="postalCode"
                      {...register("postalCode", {
                        required: "Postal code is required",
                      })}
                      className="px-4 py-2 border rounded-md "
                      placeholder="Enter your postal code"
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="country" className="mb-1 font-medium">
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="country"
                      {...register("country", {
                        required: "Country is required",
                      })}
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

            {/* Membership Type Selection */}

            <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Membership Type Selection
              </h2>
              <div className="mb-4">
                <Label
                  htmlFor="membershipType"
                  className="block text-lg font-medium mb-2"
                >
                  Select Membership Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="membershipType"
                  {...register("membershipType", {
                    required: "Membership type is required",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">-- Select Membership Type --</option>
                  <option value="Individual Membership ($100/year)">
                    Individual Membership ($100/year)
                  </option>
                  <option value="Corporate Membership ($500/year)">
                    Corporate Membership ($500/year)
                  </option>
                  <option value="Volunteer Membership (Free)">
                    Volunteer Membership (Free)
                  </option>
                </select>
                {errors.membershipType && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.membershipType.message}
                  </p>
                )}
              </div>
              {isCorporate && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    Corporate Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="organizationName"
                        className="block text-lg font-medium mb-1"
                      >
                        Organization Name{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="organizationName"
                        {...register("organizationName", {
                          required: "Organization name is required",
                        })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your organization name"
                      />
                      {errors.organizationName && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.organizationName.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="organizationAddress"
                          className="block text-lg font-medium mb-1"
                        >
                          Organization Street Address{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="organizationAddress"
                          {...register("organizationAddress", {
                            required: "Organization address is required",
                          })}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Enter your organization address"
                        />
                        {errors.organizationAddress && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.organizationAddress.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="organizationPostalCode"
                          className="block text-lg font-medium mb-1"
                        >
                          Organization Postal Code{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="organizationPostalCode"
                          {...register("organizationPostalCode", {
                            required: "Organization postal code is required",
                          })}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Enter your organization postal code"
                        />
                        {errors.organizationPostalCode && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.organizationPostalCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Payment Information */}
            <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Payment Information
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <Label htmlFor="paymentMethod" className="mb-1 font-medium">
                    Preferred Payment Method{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="paymentMethod"
                    {...register("paymentMethod", {
                      required: "Payment method is required",
                    })}
                    className="px-4 py-2 border rounded-md space-x-3"
                  >
                    <option value="">Select a payment method</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Other">Other (Specify)</option>
                  </select>
                  {errors.paymentMethod && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.paymentMethod.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label className="mb-1 font-medium">
                    Auto-Renewal Preference{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-center my-4">
                    <input
                      type="radio"
                      {...register("autoRenew", {
                        required: "Auto-renewal preference is required",
                      })}
                      value="true"
                      id="autoRenewYes"
                      className="mr-2"
                    />
                    <Label htmlFor="autoRenewYes">
                      Yes, I want to enable auto-renewal
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register("autoRenew", {
                        required: "Auto-renewal preference is required",
                      })}
                      value="false"
                      id="autoRenewNo"
                      className="mr-2"
                    />
                    <Label htmlFor="autoRenewNo">
                      No, I will renew manually
                    </Label>
                  </div>
                  {errors.autoRenew && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.autoRenew.message}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Documentation Upload */}
            <section className="mt-10 mb-8 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Documentation Upload
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <Label htmlFor="idProof" className="mb-1 font-medium">
                    ID Proof (Individuals){" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="idProof"
                    type="file"
                    accept=".pdf"
                    {...register("idProof", {
                      required: "ID Proof is required",
                    })}
                    className="mt-1 w-full"
                  />
                  {errors.idProof && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.idProof.message}
                    </p>
                  )}
                </div>
                {isCorporate && (
                  <div className="flex flex-col ">
                    <Label
                      htmlFor="corporateRegistration"
                      className="mb-1 font-medium"
                    >
                      Corporate Registration{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="corporateRegistration"
                      type="file"
                      accept=".pdf"
                      {...register("corporateRegistration", {
                        required: "Corporate Registration is required",
                      })}
                      className="mt-1 w-full"
                    />
                    {errors.corporateRegistration && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.corporateRegistration.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Terms and Confirmation */}
            <section className="mt-10 mb-8 p-6 rounded-lg shadow-md space-y-6">
              <h1 className="text-2xl font-bold mt-10 mb-5 text-green-700">
                Terms and Confirmation
              </h1>
              <div>
                <input
                  type="checkbox"
                  id="agreePrivacy"
                  {...register("agreePrivacy", {
                    required: "You must agree to the privacy policy",
                  })}
                  className="mr-2"
                />
                <Label htmlFor="agreePrivacy">
                  I agree to the terms and conditions and the privacy policy.
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              <div>
                <Label htmlFor="digitalSignatureName">
                  Digital Signature Name
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your digital signature name"
                  id="digitalSignatureName"
                  {...register("digitalSignatureName", {
                    required: "Digital signature name is required",
                  })}
                  className="mt-1 w-full"
                />
                {errors.digitalSignatureName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.digitalSignatureName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="digitalSignatureDate">Date</Label>
                <Input
                  id="digitalSignatureDate"
                  value={new Date().toLocaleDateString()}
                  readOnly
                  className="mt-1 w-full"
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
                  Submitting...{" "}
                  <Loader2 className="ml-2 animate-spin" size={20} />
                </div>
              ) : (
                "Submit Your Application"
              )}
            </Button>
          </form>
          <Newsletter />
          <Footer />
        </div>
      </SmoothScroll>
    );
};

export default MembershipForm;
