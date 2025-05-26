import { useForm } from "react-hook-form";
import newsletterbg from "../assets/home/newsletterbg.png";
import { subscribeNewsletter } from "../api/newslatter";
import { toast } from "../hooks/use-toast";

function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await subscribeNewsletter(data);

      if (res.status === 200) {
        toast({
          title: "Subscribed successfully",
          description: "Thank you for subscribing!",
        });
      }
    } catch (error) {
      toast({
        title: "Error subscribing to newsletter",
        description: "Please try again later",
      });
    }
    reset();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${newsletterbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "150px",
      }}
      className="flex flex-col md:flex-row items-center lg:h-[150px] justify-between px-5 md:px-16 py-5 md:py-0"
    >
      <div className="flex gap-5 md:gap-16 items-center">
        <h1 className="text-xl text-white">Join Our Newsletter</h1>
      </div>
      <div className="gap-3 mt-5 md:mt-0 flex flex-col ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
          <div className="flex flex-col">
            <input
              className="w-60 h-10 rounded-md p-2 bg-white"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {/* {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message as string}
                            </span>
                        )} */}
          </div>
          <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md">
            Submit
          </button>
        </form>
        {errors.email && (
          <span className="text-red-500 text-sm">
            {errors.email.message as string}
          </span>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
