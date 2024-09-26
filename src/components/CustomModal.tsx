import React from "react";

interface CustomModalProps {
    heading?: string;
    isOpen: boolean;
    toggleModal: () => void;
    children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
    heading,
    isOpen,
    toggleModal,
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold">{heading || "Add Project"}</h2>
                    <button
                        onClick={toggleModal}
                        className="text-gray-600 hover:text-gray-900 text-2xl focus:outline-none"
                    >
                        &times;
                    </button>
                </div>
                <div
                    className="max-h-[70vh] overflow-y-auto"
                    style={{
                        scrollbarWidth: "none", /* For Firefox */
                        msOverflowStyle: "none", /* For Internet Explorer and Edge */
                    }}
                >
                    {/* Hide scroll bar in WebKit browsers */}
                    <style>
                        {`
                        /* Hide scroll bar in WebKit browsers (Chrome, Safari, etc.) */
                        .scroll-container::-webkit-scrollbar {
                            display: none;
                        }
                        `}
                    </style>
                    <div className="scroll-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
