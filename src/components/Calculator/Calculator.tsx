import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    remoteWorkers: string;
    onsiteWorkers: string;
    travelingWorkers: string;
    additionalEmissions: string;
};

// Define types for offsets
type OffsetValues = {
    netNegativeImmediate: number;
    neutral5Years: number;
    neutral1Year: number;
    netNegative5Years: number;
};

const CarbonOffsetCalculator: React.FC = () => {
    const { register, handleSubmit, watch, reset, formState: { errors, isValid } } = useForm<FormData>({
        mode: 'onChange'
    });

    const [showResults, setShowResults] = useState(false);

    // Watch all fields for disabling the submit button
    const allFields = watch();

    // Constants from the new table for offset calculation
    const OFFSET_VALUES: { [key: string]: OffsetValues } = {
        remoteWorker: {
            netNegativeImmediate: 1.2,
            neutral5Years: 0.5,
            neutral1Year: 0.8,
            netNegative5Years: 0.75,
        },
        onsiteWorker: {
            netNegativeImmediate: 2.4,
            neutral5Years: 1,
            neutral1Year: 1.6,
            netNegative5Years: 1.5,
        },
        travelingWorker: {
            netNegativeImmediate: 4.8,
            neutral5Years: 2,
            neutral1Year: 3.2,
            netNegative5Years: 3,
        },
        additionalEmission: {
            netNegativeImmediate: 1.8,
            neutral5Years: 0.75,
            neutral1Year: 1.2,
            netNegative5Years: 1.125,
        },
    };

    // Calculation Functions for each offset category
    const calculateOffset = (type: string, multiplier: number): OffsetValues => {
        return {
            netNegativeImmediate: multiplier * OFFSET_VALUES[type].netNegativeImmediate,
            neutral5Years: multiplier * OFFSET_VALUES[type].neutral5Years,
            neutral1Year: multiplier * OFFSET_VALUES[type].neutral1Year,
            netNegative5Years: multiplier * OFFSET_VALUES[type].netNegative5Years,
        };
    };

    // Calculate total offsets for each category
    const totalRemoteOffset = calculateOffset('remoteWorker', Number(allFields.remoteWorkers || 0));
    const totalOnsiteOffset = calculateOffset('onsiteWorker', Number(allFields.onsiteWorkers || 0));
    const totalTravelingOffset = calculateOffset('travelingWorker', Number(allFields.travelingWorkers || 0));
    const totalEmissionOffset = calculateOffset('additionalEmission', Number(allFields.additionalEmissions || 0));

    // Combine all totals
    const totalOffset = {
        netNegativeImmediate:
            totalRemoteOffset.netNegativeImmediate +
            totalOnsiteOffset.netNegativeImmediate +
            totalTravelingOffset.netNegativeImmediate +
            totalEmissionOffset.netNegativeImmediate,
        neutral5Years:
            totalRemoteOffset.neutral5Years +
            totalOnsiteOffset.neutral5Years +
            totalTravelingOffset.neutral5Years +
            totalEmissionOffset.neutral5Years,
        neutral1Year:
            totalRemoteOffset.neutral1Year +
            totalOnsiteOffset.neutral1Year +
            totalTravelingOffset.neutral1Year +
            totalEmissionOffset.neutral1Year,
        netNegative5Years:
            totalRemoteOffset.netNegative5Years +
            totalOnsiteOffset.netNegative5Years +
            totalTravelingOffset.netNegative5Years +
            totalEmissionOffset.netNegative5Years,
    };

    // Handle form submission
    const onSubmit: SubmitHandler<FormData> = () => {
        setShowResults(true);
    };

    // Handle Reset
    const handleReset = () => {
        reset();
        setShowResults(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Carbon Offset Calculator</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Number of Remote Workers:</label>
                    <input
                        type="number"
                        min="0"
                        {...register("remoteWorkers", { required: true })}
                        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.remoteWorkers ? 'border-red-500' : ''}`}
                        disabled={showResults}
                    />
                    {errors.remoteWorkers && <p className="text-red-500 text-sm">This field is required</p>}
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Number of Onsite Workers:</label>
                    <input
                        type="number"
                        min="0"
                        {...register("onsiteWorkers", { required: true })}
                        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.onsiteWorkers ? 'border-red-500' : ''}`}
                        disabled={showResults}
                    />
                    {errors.onsiteWorkers && <p className="text-red-500 text-sm">This field is required</p>}
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Number of Traveling Workers:</label>
                    <input
                        type="number"
                        min="0"
                        {...register("travelingWorkers", { required: true })}
                        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.travelingWorkers ? 'border-red-500' : ''}`}
                        disabled={showResults}
                    />
                    {errors.travelingWorkers && <p className="text-red-500 text-sm">This field is required</p>}
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2">Additional Emissions (per CO2 MT / year):</label>
                    <input
                        type="number"
                        min="0"
                        {...register("additionalEmissions", { required: true })}
                        className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.additionalEmissions ? 'border-red-500' : ''}`}
                        disabled={showResults}
                    />
                    {errors.additionalEmissions && <p className="text-red-500 text-sm">This field is required</p>}
                </div>
                <div className="flex justify-center col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className={`mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isValid || showResults}
                    >
                        Submit
                    </button>
                    {showResults && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className="ml-4 mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </form>
            {showResults && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-semibold mb-4">Total Offset Token</h3>
                    <p className="text-lg">
                        <span className="font-semibold">Immediate Net Negative:</span> {totalOffset.netNegativeImmediate.toFixed(2)}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Neutral in 5 Years:</span> {totalOffset.neutral5Years.toFixed(2)}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Neutral in 1 Year:</span> {totalOffset.neutral1Year.toFixed(2)}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Net Negative in 5 Years:</span> {totalOffset.netNegative5Years.toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CarbonOffsetCalculator;
