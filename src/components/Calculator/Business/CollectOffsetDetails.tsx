import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "../../../hooks/use-toast";
import { updateBusinessDetails } from "../../../api/businessDetails";
import { useNavigate } from "react-router-dom";


interface FormData {
    businessId: string;
    totalCarbonEmmision: string;
}

function CollectOffsetDetails({ businessId }: any) {
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        data.businessId = businessId;
        console.log(data);
        setLoader(true);
        try {
            const res = await updateBusinessDetails(data);
            if (res.data) {
                navigate('/offsetNow', { state: { clientType: "business", businessId: businessId, totalEmissions: res.data.totalCarbonEmmision } })
                toast({
                    title: "Success",
                    description: "Your business details have been submitted successfully",
                })
            }

        } catch (error) {
            console.error("Error adding project:", error);
            toast({
                variant: 'destructive',
                title: "Error",
                description: "An error occurred while submitting your business details",
            });
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="w-full mx-auto p-6 bg-white rounded shadow">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        BusinessId<span className="text-red-500">*</span>
                    </label>
                    <input
                        value={businessId}
                        disabled
                        {...register("businessId")}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.businessId && (
                        <p className="text-red-500 text-sm mt-1">{errors.businessId.message}</p>
                    )}
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Yearly Net Carbon Emission in Tons<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("totalCarbonEmmision", { required: "totalCarbonEmision is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Enter your yearly net carbon emission"
                    />
                    {errors.totalCarbonEmmision && (
                        <p className="text-red-500 text-sm mt-1">{errors.totalCarbonEmmision.message}</p>
                    )}
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                    {loader ?
                        <div className="flex items-center justify-center gap-2">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Submitting...</span>
                        </div>
                        : "Submit"}

                </button>
            </form>
        </div>
    );
}

export default CollectOffsetDetails;
