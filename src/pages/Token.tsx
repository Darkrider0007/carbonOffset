import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import {
  getTokenData,
  updateTokenPerTon,
  updateTokenPrice,
  updateTokenLimit,
} from "../api/token"; // Assuming there's an updateTokenLimit function in the API
import { Loader2 } from "lucide-react";
import { toast } from "../hooks/use-toast";
import SmoothScroll from "../components/SmoothScroll";

export default function Token() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [tokenData, setTokenData] = useState<any>([]);
  const [updatingPrice, setUpdatingPrice] = useState(false);
  const [updatingAmount, setUpdatingAmount] = useState(false);
  const [updatingLimit, setUpdatingLimit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: registerAmount,
    handleSubmit: handleSubmitAmount,
    reset: resetAmount,
    formState: { errors: errorsAmount },
  } = useForm();
  const {
    register: registerLimit,
    handleSubmit: handleSubmitLimit,
    reset: resetLimit,
    formState: { errors: errorsLimit },
  } = useForm();

  useEffect(() => {
    const fetchAdminData = async () => {
      const res = await getAdminData();
      setDashBoardData(res.data);
    };

    const fetchToken = async () => {
      try {
        const res = await getTokenData();
        setTokenData(res.data);
      } catch (error) {
        console.error("Error fetching token data:", error);
        throw error;
      }
    };
    fetchAdminData();
    fetchToken();
  }, []);

  // Function to handle token price update
  const onUpdateTokenPrice = async (data: any) => {
    setUpdatingPrice(true);
    try {
      await updateTokenPrice(data.tokenPrice, tokenData._id);
      const updatedTokenData = await getTokenData();
      setTokenData(updatedTokenData.data);
      reset();
      toast({
        title: "Token Price updated successfully",
      });
    } catch (error) {
      console.error("Error updating token price:", error);
    } finally {
      setUpdatingPrice(false);
    }
  };

  // Function to handle token amount per ton update
  const onUpdateTokenAmountPerTon = async (data: any) => {
    setUpdatingAmount(true);
    try {
      await updateTokenPerTon(data.tokenAmountPerTon, tokenData._id);
      const updatedTokenData = await getTokenData();
      setTokenData(updatedTokenData.data);
      toast({
        title: "Token Amount per Ton updated successfully",
      });
      resetAmount();
    } catch (error) {
      console.error("Error updating token amount per ton:", error);
    } finally {
      setUpdatingAmount(false);
    }
  };

  // Function to handle token limit update
  const onUpdateTokenLimit = async (data: any) => {
    setUpdatingLimit(true);
    try {
      await updateTokenLimit(data.tokenAmountLimit, tokenData._id);
      const updatedTokenData = await getTokenData();
      setTokenData(updatedTokenData.data);
      toast({
        title: "Token Limit updated successfully",
      });
      resetLimit();
    } catch (error) {
      console.error("Error updating token limit:", error);
    } finally {
      setUpdatingLimit(false);
    }
  };

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">Token</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total User
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {dashBoardData?.totalUsers}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total Token Volume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {tokenData?.tokenVolume &&
                      tokenData?.tokenVolume.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Token Current Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    ${tokenData?.tokenPrice}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Token Limit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    ${tokenData?.tokenLimit}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Token Amount per Ton
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    ${tokenData?.tokenPerTon}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid h-[20vh] gap-4 md:grid-cols-1 xl:grid-cols-2">
              {/* Update Token Price Card */}
              <Card className="shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Update Token Price
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onUpdateTokenPrice)}>
                    <div className="flex gap-4 items-center">
                      <Input
                        type="number"
                        step="0.01"
                        min={0.01}
                        placeholder="Enter new token price"
                        {...register("tokenPrice", {
                          required: "Token price is required",
                          min: {
                            value: 0.01,
                            message: "Minimum price is 0.01",
                          },
                          max: {
                            value: 1000,
                            message: "Maximum price is 1000",
                          },
                        })}
                        className="bg-white border-black shadow-none appearance-none w-full md:w-2/3 lg:w-1/2 p-2 border rounded-md dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      {errors.tokenPrice && (
                        <p className="text-red-500">
                          {String(errors.tokenPrice?.message)}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        {updatingPrice ? (
                          <div className="flex flex-row">
                            <Loader2 className="animate-spin mr-2" /> Updating
                            ...
                          </div>
                        ) : (
                          <h1 className="text-white">Update</h1>
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Update Token Amount per Ton Card */}
              <Card className="shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Update Token Amount per Ton
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmitAmount(onUpdateTokenAmountPerTon)}
                  >
                    <div className="flex gap-4 items-center">
                      <Input
                        min={0.0001}
                        type="number"
                        step="0.0001"
                        placeholder="Enter new token amount per ton"
                        {...registerAmount("tokenAmountPerTon", {
                          required: "Token amount per ton is required",
                          min: {
                            value: 0.0001,
                            message: "Minimum amount is 0.0001",
                          },
                          max: {
                            value: 100000,
                            message: "Maximum amount is 100000",
                          },
                        })}
                        className="bg-white border-black shadow-none appearance-none w-full md:w-2/3 lg:w-1/2 p-2 border rounded-md dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      {errorsAmount.tokenAmountPerTon && (
                        <p className="text-red-500">
                          {errorsAmount.tokenAmountPerTon?.message as string}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        {updatingAmount ? (
                          <div className="flex flex-row">
                            <Loader2 className="animate-spin mr-2" /> Updating
                            ...
                          </div>
                        ) : (
                          <h1 className="text-white">Update</h1>
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Update Token Limit */}
              <Card className="shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Update Token Limit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitLimit(onUpdateTokenLimit)}>
                    <div className="flex gap-4 items-center">
                      <Input
                        min={1}
                        type="number"
                        placeholder="Enter new token limit"
                        {...registerLimit("tokenAmountLimit", {
                          required: "Token limit is required",
                          valueAsNumber: true,
                          min: { value: 1, message: "Minimum limit is 1" },
                          max: {
                            value: 1000000,
                            message: "Maximum limit is 1000000",
                          },
                        })}
                        className="bg-white border-black shadow-none appearance-none w-full md:w-2/3 lg:w-1/2 p-2 border rounded-md dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      {errorsLimit.tokenAmountLimit && (
                        <p className="text-red-500">
                          {errorsLimit.tokenAmountLimit?.message as string}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        {updatingLimit ? (
                          <div className="flex flex-row">
                            <Loader2 className="animate-spin mr-2" /> Updating
                            ...
                          </div>
                        ) : (
                          <h1 className="text-white">Update</h1>
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
