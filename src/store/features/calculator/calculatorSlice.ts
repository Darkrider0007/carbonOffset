import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VehicleData {
  id: number | string;
  vehicleType: string;
  months: number;
  milesPerYear: number;
  fuelEfficiency?: number;
}

export interface CalculatorState {
  vehicleData: VehicleData[];
  naturalgas: number;
  electricity: number;
  fueloil: number;
  waste: number;
}

const initialState: CalculatorState = {
  vehicleData: [],
  naturalgas: 7,
  electricity: 877,
  fueloil: 83,
  waste: 3,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addVehicleData: (state, action: PayloadAction<VehicleData>) => {
      const vehicle = state.vehicleData.find(
        (vehicle) => vehicle.id === action.payload.id
      );
      if (vehicle) {
        const index = state.vehicleData.findIndex(
          (vehicle) => vehicle.id === action.payload.id
        );
        state.vehicleData[index] = action.payload;
        return;
      }
      state.vehicleData.push(action.payload);
    },
    updateVehicleData: (state, action: PayloadAction<VehicleData>) => {
      const index = state.vehicleData.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      state.vehicleData[index] = action.payload;
    },
    removeVehicalData: (state, action: PayloadAction<number>) => {
      state.vehicleData = state.vehicleData.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    },
    changeNaturalGas: (state, action: PayloadAction<number>) => {
      state.naturalgas = action.payload;
    },
    changeElectricity: (state, action: PayloadAction<number>) => {
      state.electricity = action.payload;
    },
    changeFuelOil: (state, action: PayloadAction<number>) => {
      state.fueloil = action.payload;
    },
    changeWaste: (state, action: PayloadAction<number>) => {
      state.waste = action.payload;
    },
  },
});

export const {
  addVehicleData,
  updateVehicleData,
  removeVehicalData,
  changeNaturalGas,
  changeElectricity,
  changeFuelOil,
  changeWaste,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
