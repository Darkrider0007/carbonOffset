import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import windowImage from "../assets/Signup/Signup.png";
// import { FaGoogle, FaApple } from 'react-icons/fa';
import Logo from "../assets/login/logo.png";
import InputField from "../components/InputField";
import { signup } from "../api/auth/signUp";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import { toast } from "../hooks/use-toast";
import SmoothScroll from "../components/SmoothScroll";

interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  terms: boolean;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormInputs>();
  const [submit, setSubmit] = React.useState(false);

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    setSubmit(true);
    try {
      const dataForSend = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };
      const response = await signup(dataForSend);
      console.log(response);

      if (response.status === 201) {
        toast({
          title: "Account created successfully",
          description: "Please check your email to verify your account",
          duration: 5000,
        });
        navigate(`/verify-email/${response.data._id}`);
      } else if (response.status === 400) {
        toast({
          title: "Error creating account",
          description: response.message,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error creating account",
        description: error.message,
        duration: 5000,
      });
    } finally {
      setSubmit(false);
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-[#F1F5F9] flex items-center justify-center">
        <div className="flex w-full">
          {/* Left side - Logo and Form */}
          <div className="w-full md:w-1/2 p-8"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="Logo"
              className="object-cover h-40 mb-8 cursor-pointer"
            />
            <div className="flex w-full items-center justify-center">
              <h1 className="text-4xl font-bold mb-6">Join Us Today</h1>
            </div>

            {/* Social login buttons */}
            {/* <div className="flex gap-4 mb-8 items-center justify-center">
                        <button className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-6 py-3 text-gray-600">
                            <FaGoogle className="mr-2" /> Sign In with Google
                        </button>
                        <button className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-6 py-3 text-gray-600">
                            <FaApple className="mr-2" /> Sign In with Apple
                        </button>
                    </div> */}

            {/* Sign Up form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              <InputField
                id="firstName"
                label="First Name"
                type="text"
                placeholder="First name"
                error={errors.firstName?.message}
                {...register("firstName", {
                  required: "First name is required",
                })}
              // ref={firstNameRef}
              />
              <InputField
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="Last name"
                error={errors.lastName?.message}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              // ref={lastNameRef}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                inputStyle="grid-cols-2"
                placeholder="Email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              // ref={emailRef}
              />
              <InputPassword
                id="password"
                label="Password"
                placeholder="Password"
                inputStyle="pl-3"
                error={errors.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              // ref={passwordRef}
              />
              <InputPassword
                id="repeatPassword"
                label="Repeat Password"
                inputStyle="pl-3"
                placeholder="Repeat password"
                error={errors.repeatPassword?.message}
                {...register("repeatPassword", {
                  required: "Repeat password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              // ref={repeatPasswordRef}
              />

              <div className="col-span-2">
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                    {...register("terms", {
                      required: "You must agree to the terms and conditions",
                    })}
                  // ref={termsRef}
                  />
                  <label htmlFor="terms" className="text-sm">
                    I agree with{" "}
                    <a href="#" className="text-blue-600">
                      Terms and conditions
                    </a>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms.message}</p>
                )}
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white p-3 rounded-md w-full"
                >
                  {/* Create free account */}
                  {submit ? (
                    <div className="flex flex-row w-full items-center justify-center">
                      <RiLoader2Fill className="animate-spin mr-2" /> Creating
                      account ...
                    </div>
                  ) : (
                    "Create free account"
                  )}
                </button>
              </div>
              <div className="col-span-2 flex flex-row items-center justify-center">
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="text-green-600 cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>

          {/* Right side - Images */}
          <div className="hidden md:block w-1/2 relative">
            <img
              src={windowImage}
              alt="Nature"
              className="absolute right-0 bottom-[10%] object-cover h-[640px] w-[680px]"
            />
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default SignUp;
