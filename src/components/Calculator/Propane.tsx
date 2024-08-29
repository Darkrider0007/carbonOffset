import React, { useState, useEffect } from "react";

type PropaneProps = {
    addInput: (input: number) => void;
};

function Propane({ addInput }: PropaneProps) {
    const [monthlyConsumption, setMonthlyConsumption] = useState<number>(() => {

        const savedConsumption = localStorage.getItem('propaneMonthlyConsumption');
        return savedConsumption ? parseInt(savedConsumption) : 0;
    });

    useEffect(() => {
        const annualConsumption = monthlyConsumption;
        addInput(annualConsumption);

        localStorage.setItem('propaneMonthlyConsumption', monthlyConsumption.toString());
    }, [monthlyConsumption, addInput]);

    const handleMonthlyConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMonthlyConsumption(isNaN(value) ? 0 : value);
    };

    return (
        <div>
            <h1 className="text-3xl mb-8">
                Annual Carbon Emissions from Propane
            </h1>
            <h1 className="text-xs">Monthly Consumption (gallons/month)</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={monthlyConsumption}
                onChange={handleMonthlyConsumptionChange}
            />
        </div>
    );
}

export default Propane;
