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

export function EmissionsCalculator() {
  return (
    <Tabs defaultValue="vehicle" className="w-full">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
        <TabsTrigger value="naturalGas">Natural Gas</TabsTrigger>
        <TabsTrigger value="electricity">Electricity</TabsTrigger>
        <TabsTrigger value="fuelOil">Fuel Oil</TabsTrigger>
        <TabsTrigger value="waste">Waste</TabsTrigger>
        <TabsTrigger value="calculate">Calculate</TabsTrigger>
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
      <TabsContent value="calculate">
        <Waste />
      </TabsContent>
    </Tabs>
  );
}
