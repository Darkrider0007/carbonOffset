import CustomModal from "./CustomModal";
import { Button } from "./ui/button";
import { useState } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { ScrollArea } from "./ui/scroll-area";
import { updateFarmOnboardApproval } from "../api/farmOnboard";

interface ViewFarmBoardingProps {
    isOpen: boolean;
    toggleModal: () => void;
    selectedProject?: any;
    onUpdateProject: (update: (prev: any[]) => any[]) => void;
    farmData?: any[];
}

function ViewFarmBoarding({ isOpen, toggleModal, selectedProject, onUpdateProject, farmData }: ViewFarmBoardingProps) {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    // Handle approval of farm onboarding
    const handleApproval = async (approved: boolean) => {
        if (!selectedProject || !selectedProject._id) return;
        setLoading2(true);
        try {
            const res = await updateFarmOnboardApproval(selectedProject._id, approved);
            console.log("Project approval updated successfully");
            if (res.status === 200) {
                farmData = (farmData ?? []).map((project) => {
                    if (project._id === selectedProject._id) {
                        project.approvedByAdmin = approved;
                    }
                    return project;
                });
                onUpdateProject(() => [...(farmData ?? [])]);
                toggleModal();
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
            const res = await updateFarmOnboardApproval(selectedProject._id, approved);
            console.log("Project rejection updated successfully");
            if (res.status === 200) {
                farmData = (farmData ?? []).map((project) => {
                    if (project._id === selectedProject._id) {
                        project.approvedByAdmin = false;
                    }
                    return project;
                });
                onUpdateProject(() => [...(farmData ?? [])]);
                toggleModal();
            }
        } catch (error) {
            console.error("Failed to update project rejection", error);
        } finally {
            setLoading1(false);
        }
    };

    return (
        <CustomModal isOpen={isOpen} heading="Farm Onboarding" toggleModal={toggleModal}>
            <ScrollArea>
                {selectedProject ? (
                    <div className="flex flex-col gap-2 p-6">
                        {/* Contact Details */}
                        <h2 className="text-lg font-bold text-gray-700">Contact Details</h2>
                        <p><strong>Name:</strong> {selectedProject.name || "N/A"}</p>
                        <div className="flex flex-row gap-3">
                            <p><strong>Phone:</strong> {selectedProject.phone || "N/A"}</p>
                            <p><strong>Email:</strong> {selectedProject.email || "N/A"}</p>
                        </div>

                        {/* Project Details */}
                        <h2 className="text-lg font-bold text-gray-700">Farm Details</h2>
                        <p><strong>Organization:</strong> {selectedProject.organization || "N/A"}</p>
                        <p><strong>Location:</strong> {selectedProject.address || "N/A"}</p>
                        <p><strong>Coordinates:</strong> {selectedProject.coordinates || "N/A"}</p>
                        <div className="flex flex-row gap-3">
                            <p><strong>Area:</strong> {selectedProject.area || "N/A"}</p>
                            <p><strong>Vegetation Type:</strong> {selectedProject.vegetationType || "N/A"}</p>
                        </div>

                        {/* Document Section */}
                        {selectedProject.document && (
                            <div className="mt-2">
                                <h3 className="text-md font-semibold text-gray-700">Submitted Document</h3>
                                <iframe
                                    src={selectedProject.document}
                                    title="Document Preview"
                                    className="w-full h-64 border"
                                    frameBorder="0"
                                />
                                <p className="text-sm text-gray-600 mt-2">
                                    <a href={selectedProject.document} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        Open document in new tab
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* Approve/Reject Buttons */}
                        {!selectedProject.approvedByAdmin && (
                            <div className="flex justify-end gap-4 mt-6">
                                <Button
                                    variant="outline"
                                    onClick={() => handleRejection(false)}
                                    disabled={loading1}
                                    className="bg-red-500 text-white hover:bg-red-600"
                                >
                                    {loading1 ? (
                                        <>
                                            <RiLoader2Line className="animate-spin mr-2" /> Rejecting...
                                        </>
                                    ) : (
                                        "Reject"
                                    )}
                                </Button>
                                <Button
                                    variant="default"
                                    onClick={() => handleApproval(true)}
                                    disabled={loading2}
                                    className="bg-green-500 text-white hover:bg-green-600"
                                >
                                    {loading2 ? (
                                        <>
                                            <RiLoader2Line className="animate-spin mr-2" /> Approving...
                                        </>
                                    ) : (
                                        "Approve"
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="p-6">
                        <p>No farm data available.</p>
                    </div>
                )}
            </ScrollArea>
        </CustomModal>
    );
}

export default ViewFarmBoarding;
