import CustomModal from "./CustomModal";
import { ScrollArea } from "./ui/scroll-area";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  CreditCard,
  Calendar,
  Shield,
  Clock,
  File,
  FileText,
  Info,
  CheckCircle,
} from "lucide-react";

interface ViewMembershipProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedMember?: any;
}

function ViewMembership({
  isOpen,
  toggleModal,
  selectedMember,
}: ViewMembershipProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      heading="Membership Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto">
          <div className="px-6 py-4">
            {selectedMember ? (
              <div className="flex flex-col gap-6">
                {/* Personal Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Personal Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Full Name:</span>
                      <span>{selectedMember.fullName || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedMember.email || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedMember.phone || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Address Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Street Address:</span>
                      <span>{selectedMember.streetAddress || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">City:</span>
                      <span>{selectedMember.city || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">State/Region:</span>
                      <span>{selectedMember.stateOrRegion || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Postal Code:</span>
                      <span>{selectedMember.postalCode || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Country:</span>
                      <span>{selectedMember.country || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Organization Details (if corporate) */}
                {selectedMember.membershipType === "Corporate" && (
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple-600" />
                      Organization Details
                    </h2>
                    <div className="grid gap-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Organization Name:</span>
                        <span>{selectedMember.organizationName || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">
                          Organization Address:
                        </span>
                        <span>
                          {selectedMember.organizationAddress || "N/A"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">
                          Organization Postal Code:
                        </span>
                        <span>
                          {selectedMember.organizationPostalCode || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Membership Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-orange-600" />
                    Membership Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Membership Type:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedMember.membershipType === "Individual"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {selectedMember.membershipType || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Payment Method:</span>
                      <span>{selectedMember.paymentMethod || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Auto Renew:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedMember.autoRenew
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {selectedMember.autoRenew ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Digital Signature:</span>
                      <span>
                        {selectedMember.digitalSignatureName || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Document Section - ID Proof */}
                {selectedMember.idProof && (
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <File className="h-5 w-5 text-indigo-600" />
                      ID Proof Document
                    </h2>
                    <div className="mt-2">
                      <iframe
                        src={selectedMember.idProof}
                        title="ID Proof Preview"
                        className="w-full h-64 border rounded-md"
                        frameBorder="0"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        <a
                          href={selectedMember.idProof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Open ID proof in new tab
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Document Section - Corporate Registration */}
                {selectedMember.corporateRegistration && (
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <File className="h-5 w-5 text-pink-600" />
                      Corporate Registration Document
                    </h2>
                    <div className="mt-2">
                      <iframe
                        src={selectedMember.corporateRegistration}
                        title="Corporate Registration Preview"
                        className="w-full h-64 border rounded-md"
                        frameBorder="0"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        <a
                          href={selectedMember.corporateRegistration}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Open corporate registration in new tab
                        </a>
                      </p>
                    </div>
                  </div>
                )}

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
                          selectedMember.agreePrivacy
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {selectedMember.agreePrivacy
                          ? "Accepted"
                          : "Not Accepted"}
                      </span>
                    </div>
                    {selectedMember.createdAt && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Registration Date:</span>
                        <span>
                          {new Date(
                            selectedMember.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedMember.updatedAt && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Last Updated:</span>
                        <span>
                          {new Date(
                            selectedMember.updatedAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>No membership data available.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}

export default ViewMembership;
