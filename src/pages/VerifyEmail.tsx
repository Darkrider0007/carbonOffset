import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "../hooks/use-toast";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import Logo from "../assets/login/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../api/auth/signUp";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
function VerifyEmail() {
  const { id } = useParams();

  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setSubmit(true);
    try {
      const response = await verifyEmail({ id, pin: data.pin });

      if (response.status == 200) {
        toast({
          title: "Success",
          description: response.message,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }

      if (response.status == 400) {
        console.log(response.message);
        toast({
          title: "Error",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen flex justify-center items-center bg-[#F1F5F9] flex-col">
        <div
          onClick={() => navigate("/")}
          className="absolute top-1 right-1 mb-6 md:mb-0"
        >
          <img
            src={Logo}
            alt="Logo"
            className="md:right-9 h-20 md:h-36 w-20 md:w-36 object-cover"
          />
        </div>
        <h1 className="text-xl font-bold mb-4">Verify Your Email</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <p className="text-sm text-slate-900">
              We've sent a one-time password to your email. Please enter it
              below.
            </p>
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="border-gray-800 " />
                        <InputOTPSlot index={1} className="border-gray-800 " />
                        <InputOTPSlot index={2} className="border-gray-800 " />
                        <InputOTPSlot index={3} className="border-gray-800 " />
                        <InputOTPSlot index={4} className="border-gray-800 " />
                        <InputOTPSlot index={5} className="border-gray-800 " />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-green-600 text-white hover:bg-green-700"
              type="submit"
            >
              {submit ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Verifying...
                </>
              ) : (
                "Verify"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </SmoothScroll>
  );
}

export default VerifyEmail;
