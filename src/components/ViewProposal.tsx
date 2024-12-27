import CustomModal from "./CustomModal";
import { ScrollArea } from "./ui/scroll-area";
import {
  User,
  Mail,
  FileText,
  Calendar,
  Shield,
  Clock,
  DollarSign,
  Info,
  File,
} from "lucide-react";

interface ViewProposalProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedProposal?: any;
}

function ViewProposal({
  isOpen,
  toggleModal,
  selectedProposal,
}: ViewProposalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      heading="Proposal Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto">
          <div className="px-6 py-4">
            {selectedProposal ? (
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
                      <span className="font-medium">Name:</span>
                      <span>
                        {`${selectedProposal.firstName} ${selectedProposal.lastName}` ||
                          "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedProposal.email || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Funding Required:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedProposal.isNeedFund
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {selectedProposal.isNeedFund ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Proposal Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Proposal Information
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="mt-2">
                      <span className="font-medium">Proposal Details:</span>
                      <p className="mt-2 text-gray-700 bg-gray-50 p-4 rounded-md">
                        {selectedProposal.proposalDetails ||
                          "No details provided."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Document Section */}
                {selectedProposal.supportingDocuments && (
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <File className="h-5 w-5 text-purple-600" />
                      Supporting Documents
                    </h2>
                    <div className="mt-2">
                      <iframe
                        src={selectedProposal.supportingDocuments}
                        title="Document Preview"
                        className="w-full h-64 border rounded-md"
                        frameBorder="0"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        <a
                          href={selectedProposal.supportingDocuments}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Open document in new tab
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Registration Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-red-600" />
                    Submission Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Privacy Agreement:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          selectedProposal.agreePrivacy
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {selectedProposal.agreePrivacy
                          ? "Accepted"
                          : "Not Accepted"}
                      </span>
                    </div>
                    {selectedProposal.createdAt && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Submission Date:</span>
                        <span>
                          {new Date(
                            selectedProposal.createdAt
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {selectedProposal.updatedAt && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">Last Updated:</span>
                        <span>
                          {new Date(
                            selectedProposal.updatedAt
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
                <p>No proposal data available.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}

export default ViewProposal;
