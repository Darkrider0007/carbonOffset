import { useForm, SubmitHandler } from "react-hook-form";
import windowImage from "../assets/login/Login.png"; // Replace with actual paths to your images
// import { FaGoogle, FaApple } from 'react-icons/fa';
import Logo from "../assets/login/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { login } from "../api/auth/loginAndLogout";
import { useContext, useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import UserContext from "../context/UserContext";
import { toast } from "../hooks/use-toast";
import InputPassword from "../components/InputPassword";
import SmoothScroll from "../components/SmoothScroll";

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  const context = useContext(UserContext);

  const location = useLocation();

  // Ensure context is defined before accessing properties
  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setSubmit(true);
    try {
      const dataForSend = {
        email: data.email,
        password: data.password,
      };
      const response = await login(dataForSend);

      if (response.status === 201) {
        setUser({
          id: response.data._id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
        });
        toast({
          title: "Logged in successfully",
          description: "Welcome back!",
          duration: 5000,
        });
        setTimeout(() => {
          if (location.state?.from)
            navigate(location.state.from, { state: location.state });
          else navigate("/");
        }, 1000);
      }
    } catch (error: any) {
      if (error.status === 400) {
        toast({
          title: "Error logging in",
          description: "Invalid email or password",
          variant: "destructive",
          duration: 5000,
        });
      }
      toast({
        title: "Error logging in",
        description: error.message || "Please try again",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setSubmit(false);
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-[#F1F5F9] flex justify-between items-center">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left side images */}
          <div className="hidden md:flex w-full md:w-1/2 bg-cover bg-center items-center">
            <img
              src={windowImage}
              alt="Nature"
              className="object-cover h-[300px] md:h-[640px] w-full md:w-[680px]"
            />
          </div>

          {/* Right side form */}
          <div className="w-full md:w-1/2 p-8 md:px-32 justify-center">
            <div
              onClick={() => navigate("/")}
              className="absolute top-3 right-4 mb-6 md:mb-0"
            >
              <img
                src={Logo}
                alt="Logo"
                className="md:right-9 h-40 object-cover cursor-pointer "
              />
            </div>

            <div className="my-10 gap-5 flex flex-col justify-center items-center">
              <div className="w-full text-left flex flex-col justify-start">
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Hello, <span className="text-green-600">Mikołaj!</span>
                </h1>
                <p className="text-gray-500 mt-2 text-lg md:text-xl">
                  Log in to 1World1Nation to start creating magic.
                </p>
              </div>

              {/* Login form */}
              <div className="flex w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="mikolaj.niznik@gmail.com"
                    error={errors.email?.message}
                    {...register("email", { required: "Email is required" })}
                    inputStyle="pl-3"
                  />
                  <InputPassword
                    id="password"
                    label="Password"
                    placeholder="Password"
                    error={errors.password?.message}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    inputStyle="pl-3"
                  />
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        {...register("rememberMe")}
                        className="mr-2"
                      />
                      <label htmlFor="rememberMe" className="text-sm">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forget-password"
                      className="text-sm text-blue-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 text-white p-3 rounded-md w-full mt-10"
                  >
                    {submit ? (
                      <div className="flex flex-row w-full items-center justify-center">
                        <RiLoader2Fill className="animate-spin mr-2" /> Logged
                        in ...
                      </div>
                    ) : (
                      "Log in"
                    )}
                  </button>
                </form>
              </div>

              <div className="text-center mt-6 flex flex-row">
                <p className="text-sm text-gray-500">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    className="text-green-600 cursor-pointer"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

export default Login;
