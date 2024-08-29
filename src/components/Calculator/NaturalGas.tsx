import React, { useState, useEffect } from "react";

type NaturalGasProps = {
    addInput: (input: number) => void;
};

function NaturalGas({ addInput }: NaturalGasProps) {
    const [monthlyConsumption, setMonthlyConsumption] = useState<number>(() => {
        // Retrieve from localStorage or default to 0
        const savedConsumption = localStorage.getItem('monthlyConsumption');
        return savedConsumption ? parseInt(savedConsumption) : 0;
    });

    useEffect(() => {
        const annualConsumption = monthlyConsumption;
        addInput(annualConsumption);

        localStorage.setItem('monthlyConsumption', monthlyConsumption.toString());
    }, [monthlyConsumption, addInput]);

    const handleMonthlyConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMonthlyConsumption(isNaN(value) ? 0 : value);
    };

    return (
        <div>
            <h1 className="text-3xl mb-8">
                Annual Natural Gas Emissions
            </h1>
            <h1 className="text-xs">Monthly Consumption (cubic feet)</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={monthlyConsumption}
                onChange={handleMonthlyConsumptionChange}
            />
        </div>
    );
}

export default NaturalGas;
