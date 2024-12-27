import CustomModal from "./CustomModal";
import { Button } from "./ui/button";
import { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { ScrollArea } from "./ui/scroll-area";
import { updateFarmOnboardApproval } from "../api/farmOnboard";
import { toast } from "../hooks/use-toast";
import {
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  Trees,
  FileText,
  Info,
} from "lucide-react";

interface ViewFarmBoardingProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedProject?: any;
  onUpdateProject: (update: (prev: any[]) => any[]) => void;
  farmData?: any[];
}

function ViewFarmBoarding({
  isOpen,
  toggleModal,
  selectedProject,
  onUpdateProject,
  farmData,
}: ViewFarmBoardingProps) {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  // Handle approval of farm onboarding
  const handleApproval = async (approved: boolean) => {
    if (!selectedProject || !selectedProject._id) return;
    setLoading2(true);
    try {
      const res = await updateFarmOnboardApproval(
        selectedProject._id,
        approved
      );
      if (res.status === 200) {
        farmData = (farmData ?? []).map((project) => {
          if (project._id === selectedProject._id) {
            project.approvedByAdmin = approved;
          }
          return project;
        });
        onUpdateProject(() => [...(farmData ?? [])]);
        toggleModal();
        toast({
          title: approved
            ? "Farm Onboarding Approved"
            : "Farm Onboarding Rejected",
          description: approved
            ? "Your farm onboarding request has been approved."
            : "Your farm onboarding request has been rejected.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Failed to update project approval", error);
    } finally {
      setLoading2(false);
    }
  };

  // Handle rejection of farm onboarding
  const handleRejection = async (approved: boolean) => {
    if (!selectedProject || !selectedProject._id) return;
    setLoading1(true);
    try {
      const res = await updateFarmOnboardApproval(
        selectedProject._id,
        approved
      );
      if (res.status === 200) {
        farmData = (farmData ?? []).map((project) => {
          if (project._id === selectedProject._id) {
            project.approvedByAdmin = false;
          }
          return project;
        });
        onUpdateProject(() => [...(farmData ?? [])]);
        toggleModal();
        toast({
          title: approved
            ? "Farm Onboarding Approved"
            : "Farm Onboarding Rejected",
          description: approved
            ? "Your farm onboarding request has been approved."
            : "Your farm onboarding request has been rejected.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Failed to update project rejection", error);
    } finally {
      setLoading1(false);
    }
  };

  return (
    <CustomModal
      isOpen={isOpen}
      heading="Farm Onboarding Details"
      toggleModal={toggleModal}
    >
      <div className="relative">
        <ScrollArea className="h-[70vh] overflow-y-auto">
          <div className="px-6 py-4">
            {selectedProject ? (
              <div className="flex flex-col gap-6">
                {/* Contact Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    Contact Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Name:</span>
                      <span>{selectedProject.name || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Phone:</span>
                      <span>{selectedProject.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span>{selectedProject.email || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Farm Details */}
                <div className="bg-white rounded-lg border p-4 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                    Farm Details
                  </h2>
                  <div className="grid gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Organization:</span>
                      <span>{selectedProject.organization || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Location:</span>
                      <span>{selectedProject.address || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Coordinates:</span>
                      <span>{selectedProject.coordinates || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Area:</span>
                      <span>{selectedProject.area || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Vegetation Type:</span>
                      <span>{selectedProject.vegetationType || "N/A"}</span>
                    </div>
                  </div>
                </div>

                {/* Document Section */}
                {selectedProject.document && (
                  <div className="bg-white rounded-lg border p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                      Submitted Document
                    </h2>
                    <div className="mt-2">
                      <iframe
                        src={selectedProject.document}
                        title="Document Preview"
                        className="w-full h-64 border rounded-md"
                        frameBorder="0"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        <a
                          href={selectedProject.document}
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

                {/* Approve/Reject Buttons */}
                {!selectedProject.approvedByAdmin &&
                  !selectedProject.isRejected && (
                    <div className="flex justify-end gap-4 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => handleRejection(false)}
                        disabled={loading1}
                        className="bg-red-500 text-white hover:bg-red-600 flex items-center gap-2"
                      >
                        {loading1 ? (
                          <>
                            <RiLoader2Line className="animate-spin" />{" "}
                            Rejecting...
                          </>
                        ) : (
                          "Reject"
                        )}
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => handleApproval(true)}
                        disabled={loading2}
                        className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
                      >
                        {loading2 ? (
                          <>
                            <RiLoader2Line className="animate-spin" />{" "}
                            Approving...
                          </>
                        ) : (
                          "Approve"
                        )}
                      </Button>
                    </div>
                  )}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>No farm data available.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </CustomModal>
  );
}

export default ViewFarmBoarding;
