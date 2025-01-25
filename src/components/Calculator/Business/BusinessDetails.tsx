import { useForm } from "react-hook-form";
import { storeBusinessDetails } from "../../../api/businessDetails";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "../../../hooks/use-toast";


interface FormData {
    name: string;
    title: string;
    company: string;
    industry: string;
    employees: number;
    email: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    postalCode: string;
}

function BusinessDetails({ setID }: { setID: (id: string) => void }) {
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setLoader(true);
        try {
            const res = await storeBusinessDetails(data);
            toast({
                title: "Success",
                description: "Your business details have been submitted successfully",
            })
            setID(res.data._id);
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
                        YOUR NAME<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        YOUR TITLE<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                    )}
                </div>

                {/* Company */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        YOUR COMPANY<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("company", { required: "Company is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                </div>

                {/* Industry */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        INDUSTRY<span className="text-red-500">*</span>
                    </label>
                    <select
                        {...register("industry", { required: "Industry is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="services">Services</option>
                    </select>
                    {errors.industry && (
                        <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                    )}
                </div>

                {/* Employees */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        NUMBER OF EMPLOYEES<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        {...register("employees", { required: "Employees is required", valueAsNumber: true })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.employees && (
                        <p className="text-red-500 text-sm mt-1">{errors.employees.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        YOUR EMAIL<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        YOUR PHONE<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        {...register("phone", { required: "Phone is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        COUNTRY<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("country", { required: "Country is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                    )}
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        ADDRESS<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("address", { required: "Address is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                </div>

                {/* City */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        CITY<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("city", { required: "City is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                </div>

                {/* Postal Code */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP / POSTAL CODE<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("postalCode", { required: "Postal Code is required" })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.postalCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>
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

export default BusinessDetails;
