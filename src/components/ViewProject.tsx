import CountryFlag from "./CountryFlag";
import CustomModal from "./CustomModal";
import { ScrollArea } from "./ui/scroll-area";
import { MapPin, Calendar, Users, ClipboardList, Target } from "lucide-react";

interface ViewProjectProps {
  isOpen: boolean;
  toggleModal: () => void;
  projectData: {
    name: string;
    location: string;
    status: string;
    userCount: number;
    image: string;
    details: string;
    createdAt?: string;
    targetAudience?: string;
  } | null;
}

export default function ViewProject({
  isOpen,
  toggleModal,
  projectData,
}: ViewProjectProps) {
  if (!projectData) return null;

  // Function to safely parse HTML content
  const createMarkup = (htmlContent: string) => {
    // Remove HTML tags and keep text content
    const sanitizedContent = htmlContent
      .replace(/<[^>]+>/g, " ") // Replace HTML tags with spaces
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim(); // Remove leading/trailing whitespace

    return sanitizedContent;
  };

  return (
    <CustomModal
      isOpen={isOpen}
      heading="Project Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto pr-6">
          <div className="p-6">
            <div className="flex flex-col gap-8">
              {/* Header Section with Image and Basic Info */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex items-start gap-6">
                  <img
                    src={projectData.image}
                    alt={projectData.name}
                    className="w-32 h-32 rounded-lg object-cover border-2 border-gray-100 shadow-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {projectData.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                          projectData.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {projectData.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Created: {projectData.createdAt || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Demographics */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Location & Demographics
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium text-gray-900 flex items-center gap-1">
                          <CountryFlag
                            countryName={projectData.location}
                            size="1.2em"
                          />
                          {projectData.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <Users className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="font-medium text-gray-900">
                          {projectData.userCount}
                        </p>
                      </div>
                    </div>
                  </div>
                  {projectData.targetAudience && (
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg md:col-span-2">
                      <Target className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Target Audience</p>
                        <p className="font-medium text-gray-900">
                          {projectData.targetAudience}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-purple-600" />
                  Project Description
                </h3>
                <div className="prose max-w-none text-gray-700">
                  {createMarkup(projectData.details)}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}
