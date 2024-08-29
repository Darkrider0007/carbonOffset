import React, { useState, useEffect } from "react";

type ElectricityProps = {
    addInput: (input: number) => void;
};

function Electricity({ addInput }: ElectricityProps) {
    const [monthlyConsumption, setMonthlyConsumption] = useState<number>(() => {
        const savedConsumption = localStorage.getItem('electricityMonthlyConsumption');
        return savedConsumption ? parseInt(savedConsumption) : 0;
    });

    useEffect(() => {
        const annualConsumption = monthlyConsumption;
        addInput(annualConsumption);

        localStorage.setItem('electricityMonthlyConsumption', monthlyConsumption.toString());
    }, [monthlyConsumption, addInput]);

    const handleMonthlyConsumptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMonthlyConsumption(isNaN(value) ? 0 : value);
    };

    return (
        <div>
            <h1 className="text-3xl mb-8">
                Annual Carbon Emissions from Electricity
            </h1>
            <h1 className="text-xs">Monthly Consumption (kWh/month)</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={monthlyConsumption}
                onChange={handleMonthlyConsumptionChange}
            />
        </div>
    );
}

export default Electricity;
