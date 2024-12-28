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
import { Coins, DollarSign, Loader2, PiggyBank, Users } from "lucide-react";
import { toast } from "../hooks/use-toast";
import SmoothScroll from "../components/SmoothScroll";
import { GiGrowth } from "react-icons/gi";

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
      <div className="grid w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Token Management</h1>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Total Users
                  </CardTitle>
                  <Users className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {dashBoardData?.totalUsers || 0}
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#8555C1] to-[#B469FF] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Token Volume
                  </CardTitle>
                  <Coins className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {tokenData?.tokenVolume
                      ? tokenData.tokenVolume.toFixed(2)
                      : "0.00"}
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DB20C4] to-[#F86893] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Current Value
                  </CardTitle>
                  <DollarSign className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    ${tokenData?.tokenPrice || "0.00"}
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Token Limit
                  </CardTitle>
                  <PiggyBank className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    ${tokenData?.tokenLimit || "0.00"}
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-400 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Per Ton
                  </CardTitle>
                  <GiGrowth className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    ${tokenData?.tokenPerTon || "0.00"}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Update Forms Section */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Update Token Price */}
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardHeader className="border-b bg-gray-50/50">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    Update Token Price
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit(onUpdateTokenPrice)}>
                    <div className="flex flex-col gap-4">
                      <div className="relative">
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
                          className="bg-white border-gray-200 shadow-sm w-full p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        {errors.tokenPrice && (
                          <p className="text-red-500 text-sm mt-1">
                            {String(errors.tokenPrice?.message)}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        disabled={updatingPrice}
                      >
                        {updatingPrice ? (
                          <div className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            <span>Updating...</span>
                          </div>
                        ) : (
                          "Update Price"
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Update Token Amount per Ton */}
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardHeader className="border-b bg-gray-50/50">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    Update Token per Ton
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form
                    onSubmit={handleSubmitAmount(onUpdateTokenAmountPerTon)}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <Input
                          type="number"
                          step="0.0001"
                          min={0.0001}
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
                          className="bg-white border-gray-200 shadow-sm w-full p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        {errorsAmount.tokenAmountPerTon && (
                          <p className="text-red-500 text-sm mt-1">
                            {errorsAmount.tokenAmountPerTon?.message as string}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        disabled={updatingAmount}
                      >
                        {updatingAmount ? (
                          <div className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            <span>Updating...</span>
                          </div>
                        ) : (
                          "Update Amount"
                        )}
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Update Token Limit */}
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardHeader className="border-b bg-gray-50/50">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    Update Token Limit
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmitLimit(onUpdateTokenLimit)}>
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <Input
                          type="number"
                          min={1}
                          placeholder="Enter new token limit"
                          {...registerLimit("tokenAmountLimit", {
                            required: "Token limit is required",
                            min: { value: 1, message: "Minimum limit is 1" },
                            max: {
                              value: 1000000,
                              message: "Maximum limit is 1000000",
                            },
                          })}
                          className="bg-white border-gray-200 shadow-sm w-full p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        {errorsLimit.tokenAmountLimit && (
                          <p className="text-red-500 text-sm mt-1">
                            {errorsLimit.tokenAmountLimit?.message as string}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        disabled={updatingLimit}
                      >
                        {updatingLimit ? (
                          <div className="flex items-center justify-center">
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            <span>Updating...</span>
                          </div>
                        ) : (
                          "Update Limit"
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
