import CustomModal from "./CustomModal";
import { ScrollArea } from "./ui/scroll-area";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Calendar,
  Info,
  Users,
  Target,
  Shield,
  Clock,
  UserCircle,
  Activity,
} from "lucide-react";

interface ViewRegistrationFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedVolunteer?: any;
}

function ViewRegistrationForm({
  isOpen,
  toggleModal,
  selectedVolunteer,
}: ViewRegistrationFormProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      heading="Volunteer Registration Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto">
          <div className="px-6 py-4">
            {selectedVolunteer ? (
              <div className="flex flex-col gap-6">
                {/* Personal Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <UserCircle className="h-5 w-5 text-blue-600" />
                    Personal Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Full Name:</span>
                      <span>{selectedVolunteer.fullName || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedVolunteer.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedVolunteer.email || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCircle className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Age Group:</span>
                      <span>{selectedVolunteer.ageGroup || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Location Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Country:</span>
                      <span>{selectedVolunteer.country || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">State/Region:</span>
                      <span>{selectedVolunteer.stateOrRegion || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">City:</span>
                      <span>{selectedVolunteer.city || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Volunteer Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    Volunteer Information
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Preferred Initiative:</span>
                      <span>
                        {selectedVolunteer.preferredInitiative || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Volunteer Role:</span>
                      <span>{selectedVolunteer.volunteerRole || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-orange-600" />
                    Additional Information
                  </h2>
                  <div className="bg-gray-50 p-4 rounded-md text-gray-700">
                    <p>
                      {selectedVolunteer.additionalInfo ||
                        "No additional information provided."}
                    </p>
                  </div>
                </div>

                {/* Registration Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-red-600" />
                    Registration Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Privacy Policy:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedVolunteer.privacyPolicy
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {selectedVolunteer.privacyPolicy
                          ? "Accepted"
                          : "Not Accepted"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Registration Date:</span>
                      <span>
                        {new Date(
                          selectedVolunteer.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Last Updated:</span>
                      <span>
                        {new Date(
                          selectedVolunteer.updatedAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>No volunteer data available.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}

export default ViewRegistrationForm;
