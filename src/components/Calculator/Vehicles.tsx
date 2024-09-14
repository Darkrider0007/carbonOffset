import { useEffect, useState } from "react"

type VehicleProps = {
    addInput: (input: number) => void
}

function Vehicle({ addInput }: VehicleProps) {
    const [milesPerYear, setMilesPerYear] = useState<number>(() => {
        const savedMiles = localStorage.getItem('milesPerYear');
        return savedMiles ? parseInt(savedMiles) : 0;
    });
    const [fuelEfficiency, setFuelEfficiency] = useState<number>(() => {
        const savedFuelEfficiency = localStorage.getItem('fuelEfficiency');
        return savedFuelEfficiency ? parseInt(savedFuelEfficiency) : 0;
    });

    useEffect(() => {
        if (fuelEfficiency !== 0) {
            addInput(milesPerYear / fuelEfficiency);
        }
        // Save the values to localStorage whenever they change
        localStorage.setItem('milesPerYear', milesPerYear.toString());
        localStorage.setItem('fuelEfficiency', fuelEfficiency.toString());
    }, [milesPerYear, fuelEfficiency, addInput]);

    const handleMilesPerYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMilesPerYear(isNaN(value) ? 0 : value);
    };

    const handleFuelEfficiencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setFuelEfficiency(isNaN(value) ? 0 : value);
    };

    return (
        <div>
            <h1 className="text-3xl mb-8">
                Annual Household Vehicles Emissions
            </h1>
            <h1 className="text-xs">Miles per month per Vehicle (miles)</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={milesPerYear}
                onChange={handleMilesPerYearChange}
            />

            <h1 className="text-xs">Fuel Efficiency (miles/gallon)</h1>
            <input
                className="my-4 p-2 rounded-md w-80 border border-black"
                placeholder="0"
                value={fuelEfficiency}
                onChange={handleFuelEfficiencyChange}
            />
        </div>
    )
}

export default Vehicle;
