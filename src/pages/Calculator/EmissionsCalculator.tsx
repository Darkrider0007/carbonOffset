import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Electricity from "../../components/Calculator/StepOfTheCalculator/Electricity";
import FuelOil from "../../components/Calculator/StepOfTheCalculator/FuelOil";
import NaturalGas from "../../components/Calculator/StepOfTheCalculator/NaturalGas";
import Vehicles from "../../components/Calculator/StepOfTheCalculator/Vehicles";
import Waste from "../../components/Calculator/StepOfTheCalculator/Waste";
import Calculate from "../../components/Calculator/StepOfTheCalculator/Calculate";

export function EmissionsCalculator() {
  return (
    <Tabs defaultValue="vehicle" className="w-full">
      {/* Tabs List */}
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        <TabsTrigger
          value="vehicle"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Vehicle
        </TabsTrigger>
        <TabsTrigger
          value="naturalGas"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Natural Gas
        </TabsTrigger>
        <TabsTrigger
          value="electricity"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Electricity
        </TabsTrigger>
        <TabsTrigger
          value="fuelOil"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Fuel Oil
        </TabsTrigger>
        <TabsTrigger
          value="waste"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Waste
        </TabsTrigger>
        <TabsTrigger
          value="calculate"
          className="text-sm md:text-base lg:text-lg py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
        >
          Calculate
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent value="vehicle" className="p-4 md:p-6 lg:p-10">
        <Vehicles />
      </TabsContent>
      <TabsContent value="naturalGas" className="p-4 md:p-6 lg:p-10">
        <NaturalGas />
      </TabsContent>
      <TabsContent value="electricity" className="p-4 md:p-6 lg:p-10">
        <Electricity />
      </TabsContent>
      <TabsContent value="fuelOil" className="p-4 md:p-6 lg:p-10">
        <FuelOil />
      </TabsContent>
      <TabsContent value="waste" className="p-4 md:p-6 lg:p-10">
        <Waste />
      </TabsContent>
      <TabsContent value="calculate" className="p-4 md:p-6 lg:p-10">
        <Calculate />
      </TabsContent>
    </Tabs>
  );
}
