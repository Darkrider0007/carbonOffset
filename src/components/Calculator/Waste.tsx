import React, { useState, useEffect } from "react";

type WasteProps = {
    addInput: (input: number) => void;
};

function Waste({ addInput }: WasteProps) {
    const [numberOfPeople, setNumberOfPeople] = useState<number>(() => {
        const savedNumberOfPeople = localStorage.getItem('wasteNumberOfPeople');
        return savedNumberOfPeople ? parseInt(savedNumberOfPeople) : 0;
    });

    useEffect(() => {
        const annualEmissions = numberOfPeople;
        addInput(annualEmissions);

        localStorage.setItem('wasteNumberOfPeople', numberOfPeople.toString());
    }, [numberOfPeople, addInput]);

    const handleNumberOfPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setNumberOfPeople(isNaN(value) ? 0 : value);
    };

    return (
        <div>
            <h1 className="text-3xl mb-8">
                Annual Carbon Emissions from Waste
            </h1>
            <h1 className="text-xs">Number of People</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
            />
        </div>
    );
}

export default Waste;
