import { useForm, SubmitHandler } from 'react-hook-form';
import Navbar from '../components/Navbar';
import heroImg from "../assets/FarmOnboarding/Background.png";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import newsletterbg from "../assets/home/newsletterbg.png";
import logo from "../assets/home/logo.png";
import { createFarmOnboard } from '../api/farmOnboard';
import { toast } from '../hooks/use-toast';

// Define the form field types
type FarmOnboardingFormValues = {
    email: string;
    name: string;
    phone: string;
    organization?: string;
    address: string;
    area: string;
    coordinates: string;
    vegetationType: string;
    document: FileList;
};

function FarmOnboarding() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FarmOnboardingFormValues>();


    // Function to handle form submission
    const onSubmit: SubmitHandler<FarmOnboardingFormValues> = async (data) => {
        try {
            console.log(data);
            const res = await createFarmOnboard(data);

            if (res.status === 201) {
                toast({
                    title: "Farm Onboarding Application Submitted Successfully",
                })

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error("Failed to submit the form", error);
            toast({
                title: "Failed to submit the form",
                variant: "destructive",
            })
        }

    };

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    width: "100%",
                }}
                className="flex flex-col gap-3 justify-center items-center relative"
            >
                {/* Larger Text Heading */}
                <h1 className="text-[#808080] text-3xl md:text-6xl font-bold w-full md:w-1/2 text-center">
                    Farm Onboarding
                </h1>
                <h1 className="text-[#808080] text-xl md:text-xl w-full md:w-1/2 text-center">
                    Home{' > '}FarmOnboard Application
                </h1>
            </div>

            {/* Form Section */}
            <div className="flex flex-col items-center justify-center gap-4 mt-8 px-4 md:px-0">
                <h1 className="text-[#808080] text-3xl md:text-4xl font-bold">
                    Farm Onboarding Application
                </h1>
                <p className="text-[#808080] text-lg md:text-xl w-full md:w-1/2 text-center">
                    Please fill out the form below to apply for farm onboarding.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full md:w-1/2">
                    {/* Email */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Email *</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            {...register('email', { required: 'Email is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Name *</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('name', { required: 'Name is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone No. */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Phone No. *</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('phone', { required: 'Phone number is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* Organization/Company Name */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Organization/Company Name</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('organization')}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Address *</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('address', { required: 'Address is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                    </div>

                    {/* Area */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Area *</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('area', { required: 'Area is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>}
                    </div>

                    {/* Point Coordinates */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Point Coordinates (Complete land area) *</label>
                        <input
                            type="text"
                            placeholder="Your answer"
                            {...register('coordinates', { required: 'Coordinates are required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.coordinates && <p className="text-red-500 text-sm mt-1">{errors.coordinates.message}</p>}
                    </div>

                    {/* Type of Vegetation */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Type of Vegetation *</label>
                        <input
                            type="text"
                            placeholder="Pasture"
                            {...register('vegetationType', { required: 'Type of Vegetation is required' })}
                            className="p-4 rounded-md border border-gray-300 w-full"
                        />
                        {errors.vegetationType && <p className="text-red-500 text-sm mt-1">{errors.vegetationType.message}</p>}
                    </div>

                    {/* Document Upload (PDF only) */}
                    <div>
                        <label className="block text-[#808080] font-semibold mb-2">Upload Document (PDF Only) *</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register('document', { required: 'Document is required' })}
                            id="file-upload"
                            className='bg-gray-100 p-4 rounded-md border border-gray-300 w-full'
                        />
                        {errors.document && <p className="text-red-500 text-sm mt-1">{errors.document.message}</p>}

                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center justify-center w-full">
                        <button
                            type="submit"
                            className="p-4 bg-green-500 hover:bg-green-600 text-black w-1/3 rounded-md my-4"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>

            {/* newsletter */}
            <div
                style={{
                    backgroundImage: `url(${newsletterbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "150px",
                }}
                className="flex flex-col md:flex-row items-center justify-between px-5 md:px-16 py-5 md:py-0"
            >
                <div className="flex gap-5 md:gap-16 items-center">
                    <img src={logo} alt="logo" />
                    <h1 className="text-xl text-white">Join Our Newsletter</h1>
                </div>
                <div className="flex gap-3 mt-5 md:mt-0">
                    <input
                        className="w-60 h-10 rounded-md p-2 bg-white"
                        placeholder="Enter your email"
                    />
                    <button className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md">
                        Submit
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default FarmOnboarding;
