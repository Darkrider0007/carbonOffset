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
} from "lucide-react";

interface ViewCollaborativeProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedParticipant?: any;
}

function ViewCollaborative({
  isOpen,
  toggleModal,
  selectedParticipant,
}: ViewCollaborativeProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      heading="Collaborative Participation Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto">
          <div className="px-6 py-4">
            {selectedParticipant ? (
              <div className="flex flex-col gap-6">
                {/* Personal Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Organization Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Organization:</span>
                      <span>{selectedParticipant.fullName || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedParticipant.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedParticipant.email || "N/A"}</span>
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
                      <span>{selectedParticipant.country || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">State/Region:</span>
                      <span>{selectedParticipant.stateOrRegion || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">City:</span>
                      <span>{selectedParticipant.city || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Collaboration Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Collaboration Information
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Type:</span>
                      <span>
                        {selectedParticipant.collaborationType || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Focus:</span>
                      <span>
                        {selectedParticipant.collaborationFocus || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Collaboration Type:</span>
                      <span>{selectedParticipant.membershipType || "N/A"}</span>
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
                      {selectedParticipant.additionalInfo ||
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
                      <span className="font-medium">Privacy Agreement:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedParticipant.agreePrivacy
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {selectedParticipant.agreePrivacy
                          ? "Accepted"
                          : "Not Accepted"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Registration Date:</span>
                      <span>
                        {new Date(
                          selectedParticipant.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Last Updated:</span>
                      <span>
                        {new Date(
                          selectedParticipant.updatedAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>No participant data available.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}

export default ViewCollaborative;
