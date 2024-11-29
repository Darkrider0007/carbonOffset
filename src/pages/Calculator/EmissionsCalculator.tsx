import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Electricity from "./StepOfTheCalculator/Electricity";
import FuelOil from "./StepOfTheCalculator/FuelOil";
import NaturalGas from "./StepOfTheCalculator/NaturalGas";
import Vehicles from "./StepOfTheCalculator/Vehicles";
import Waste from "./StepOfTheCalculator/Waste";

export function EmissionsCalculator() {
  return (
    <Tabs defaultValue="vehicle" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
        <TabsTrigger value="naturalGas">Natural Gas</TabsTrigger>
        <TabsTrigger value="electricity">Electricity</TabsTrigger>
        <TabsTrigger value="fuelOil">Fuel Oil</TabsTrigger>
        <TabsTrigger value="waste">Waste</TabsTrigger>
      </TabsList>
      <TabsContent value="vehicle">
        <Vehicles />
      </TabsContent>
      <TabsContent value="naturalGas">
        <NaturalGas />
      </TabsContent>
      <TabsContent value="electricity">
        <Electricity />
      </TabsContent>
      <TabsContent value="fuelOil">
        <FuelOil />
      </TabsContent>
      <TabsContent value="waste">
        <Waste />
      </TabsContent>
    </Tabs>
  );
}
