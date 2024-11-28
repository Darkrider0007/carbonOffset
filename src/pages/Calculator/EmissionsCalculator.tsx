import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Vehicles from "./StepOfTheCalculator/Vehicles";

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
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
