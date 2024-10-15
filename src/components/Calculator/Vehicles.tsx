import { useState, useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Input } from "../ui/input";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue
} from "../ui/select";

type VehicleFormData = {
    vehicles: { milesPerYear: string; fuelEfficiency: string }[];
};

type VehicleProps = {
    addInput: (input: number) => void;
};

function Vehicle({ addInput }: VehicleProps) {
    const savedVehicles = localStorage.getItem("vehicles");
    const defaultVehicles = savedVehicles ? JSON.parse(savedVehicles) : [{ milesPerYear: "", fuelEfficiency: "" }];

    const savedNumVehicles = localStorage.getItem("numVehicles");
    const defaultNumVehicles = savedNumVehicles ? parseInt(savedNumVehicles, 10) : 1;

    const { control, setValue, getValues } = useForm<VehicleFormData>({
        defaultValues: {
            vehicles: defaultVehicles
        }
    });

    const [numVehicles, setNumVehicles] = useState<number>(defaultNumVehicles);
    const [customVehicleCount, setCustomVehicleCount] = useState<number | null>(null);
    const [isCustom, setIsCustom] = useState<boolean>(false);

    // Use useWatch to properly observe changes in vehicles
    const vehicles = useWatch({
        control,
        name: "vehicles",
        defaultValue: defaultVehicles
    });

    // Save changes to localStorage whenever vehicles or numVehicles change
    useEffect(() => {
        localStorage.setItem("vehicles", JSON.stringify(vehicles));
        localStorage.setItem("numVehicles", numVehicles.toString());
    }, [vehicles, numVehicles]);

    const handleNumVehiclesChange = (value: string) => {
        const intValue = parseInt(value, 10);
        if (intValue === 16) {
            setIsCustom(true);
        } else {
            setNumVehicles(intValue);
            const currentVehicles = getValues("vehicles");

            let newVehicles = [...currentVehicles];
            if (intValue > currentVehicles.length) {
                for (let i = currentVehicles.length; i < intValue; i++) {
                    newVehicles.push({ milesPerYear: "", fuelEfficiency: "" });
                }
            } else if (intValue < currentVehicles.length) {
                newVehicles = currentVehicles.slice(0, intValue);
            }

            setValue("vehicles", newVehicles);
            setIsCustom(false);
        }
    };

    const handleCustomVehicleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value > 0) {
            setCustomVehicleCount(value);
        }
    };

    const handleCustomSubmit = () => {
        if (customVehicleCount && customVehicleCount > 0) {
            setNumVehicles(customVehicleCount);
            const currentVehicles = getValues("vehicles");

            let newVehicles = [...currentVehicles];
            if (customVehicleCount > currentVehicles.length) {
                for (let i = currentVehicles.length; i < customVehicleCount; i++) {
                    newVehicles.push({ milesPerYear: "", fuelEfficiency: "" });
                }
            } else if (customVehicleCount < currentVehicles.length) {
                newVehicles = currentVehicles.slice(0, customVehicleCount);
            }

            setValue("vehicles", newVehicles);
            setIsCustom(false);
        }
    };

    // Automatically calculate emissions as form changes
    useEffect(() => {
        let totalEmissions = 0;
        vehicles.forEach((vehicle) => {
            const miles = parseFloat(vehicle.milesPerYear) || 0;
            const efficiency = parseFloat(vehicle.fuelEfficiency) || 0;
            if (efficiency > 0) {
                totalEmissions += miles / efficiency;
            }
        });
        addInput(totalEmissions);
    }, [vehicles, addInput]);

    return (
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg w-full">
            <h1 className="text-4xl font-md mb-8">Vehicle Emissions</h1>

            <h2 className="text-lg font-semibold mb-4 text-gray-700">Number of Vehicles</h2>
            {isCustom ? (
                <div className="my-4">
                    <Input
                        className="mb-4 p-3 border-2 rounded-lg shadow-sm focus:ring-4 focus:ring-green-200 transition-all"
                        placeholder="Enter custom number of vehicles"
                        type="number"
                        value={customVehicleCount || ""}
                        onChange={handleCustomVehicleCountChange}
                    />
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                        onClick={handleCustomSubmit}
                    >
                        Submit
                    </button>
                </div>
            ) : (
                <Select
                    value={numVehicles.toString()}
                    onValueChange={handleNumVehiclesChange}
                >
                    <SelectTrigger className="w-full border-2 rounded-lg shadow-sm p-3 bg-white hover:bg-green-50 transition-all">
                        <SelectValue placeholder="Select number of vehicles" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 rounded-lg">
                        {Array.from({ length: 5 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1}
                            </SelectItem>
                        ))}
                        <SelectItem value="16">Custom</SelectItem>
                    </SelectContent>
                </Select>
            )}

            {!isCustom &&
                vehicles.map((_, index) => (
                    <div key={index} className="mt-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-md font-semibold text-gray-600">Vehicle {index + 1}</h2>

                        <h3 className="text-sm text-gray-500 mt-2">Miles per year</h3>
                        <Controller
                            control={control}
                            name={`vehicles.${index}.milesPerYear`}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className="my-2 p-3 border-2 rounded-lg shadow-sm focus:ring-4 focus:ring-green-200 transition-all"
                                    placeholder="0"
                                    type="number"
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/^0+(?=\d)/, ""); // Remove leading zeros
                                        field.onChange(value);
                                    }}
                                />
                            )}
                        />

                        <h3 className="text-sm text-gray-500 mt-2">Fuel Efficiency (miles/gallon)</h3>
                        <Controller
                            control={control}
                            name={`vehicles.${index}.fuelEfficiency`}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className="my-2 p-3 border-2 rounded-lg shadow-sm focus:ring-4 focus:ring-green-200 transition-all"
                                    placeholder="0"
                                    type="number"
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/^0+(?=\d)/, ""); // Remove leading zeros
                                        field.onChange(value);
                                    }}
                                />
                            )}
                        />
                    </div>
                ))}
        </div>
    );
}

export default Vehicle;
