import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/login/logo.png"; // Replace with actual paths to your images
import ResetPasswordForm from "../components/ResetPasswordForm";
import { SubmitHandler } from "react-hook-form";
import {
  resetPassword,
  sendMailForForgetPassword,
} from "../api/auth/forgetPassword";
import { toast } from "../hooks/use-toast";
import ResetPassword from "../components/ResetPassword";
import SmoothScroll from "../components/SmoothScroll";

interface FormData {
  email: string;
}

interface FormDataForPasswordChange {
  otp: string;
  password: string;
  conformPassword: string;
}

function ForgetPassword() {
  const navigate = useNavigate();
  const [submit, setSubmit] = React.useState(false);
  const [userId, setUserId] = React.useState("");

  const [mailSended, setMailSended] = React.useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    setSubmit(true);
    try {
      const res = await sendMailForForgetPassword(data);
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.userId);
        setUserId(res.data.userId);
        toast({
          title: "Mail sent successfully",
          description: "Please check your email to reset password",
        });
        setMailSended(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Error during sending mail",
        variant: "destructive",
      });
    } finally {
      setSubmit(false);
    }
  };

  const onChangePasswordSubmit: SubmitHandler<
    FormDataForPasswordChange
  > = async (data: any) => {
    try {
      const res = await resetPassword({
        id: userId,
        otp: data.otp,
        password: data.password,
      });

      if (res.status === 209) {
        toast({
          title: "Password changed successfully",
          description: "Please login with your new password",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        // Handle other possible success status codes if needed
      }
    } catch (error: any) {
      if (error.status === 400) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
          duration: 3000,
        });
      } else {
        toast({
          title: "Error",
          description: "Error during password change",
          variant: "destructive",
          duration: 3000,
        });
      }
    }
  };

  return (
    <SmoothScroll>
      <div className="w-full p-8 md:px-32 justify-center">
        <div
          onClick={() => navigate("/")}
          className="absolute top-1 left-1 mb-6 md:mb-0"
        >
          <img
            src={Logo}
            alt="Logo"
            className="md:left-9 h-20 md:h-36 w-20 md:w-36 object-cover"
          />
        </div>

        {mailSended ? (
          <>
            <ResetPassword submit={submit} onSubmit={onChangePasswordSubmit} />
          </>
        ) : (
          <ResetPasswordForm submit={submit} onSubmit={onSubmit} />
        )}
      </div>
    </SmoothScroll>
  );
}

export default ForgetPassword;
