import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Utility function to load state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const storedState = localStorage.getItem("calculatorState");
    return storedState ? JSON.parse(storedState) : undefined; // Return parsed state if exists
  } catch (e) {
    console.error("Failed to load state from localStorage", e);
    return undefined;
  }
};

// Utility function to save state to localStorage
const saveStateToLocalStorage = (state: any) => {
  try {
    localStorage.setItem("calculatorState", JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state to localStorage", e);
  }
};

interface VehicleData {
  id: number | string;
  vehicleType: string;
  months: number;
  milesPerYear: number;
  fuelEfficiency?: number;
}

interface FlightData {
  id: number;
  distance: number;
}

export interface CalculatorState {
  vehicleData: VehicleData[];
  naturalgas: number;
  electricity: number;
  flight: FlightData[];
  waste: number;
  isCalculated: boolean;
  totalEmissions: number;
}

// Load state from local storage on app initialization
const initialState: CalculatorState = loadStateFromLocalStorage() || {
  vehicleData: [],
  naturalgas: 7,
  electricity: 877,
  flight: [],
  waste: 3,
  isCalculated: false,
  totalEmissions: 0,
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
      } else {
        state.vehicleData.push(action.payload);
      }

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    updateVehicleData: (state, action: PayloadAction<VehicleData>) => {
      const index = state.vehicleData.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      if (index !== -1) {
        state.vehicleData[index] = action.payload;
      }

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    removeVehicalData: (state, action: PayloadAction<number>) => {
      state.vehicleData = state.vehicleData.filter(
        (vehicle) => vehicle.id !== action.payload
      );

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    changeNaturalGas: (state, action: PayloadAction<number>) => {
      state.naturalgas = action.payload;

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    changeElectricity: (state, action: PayloadAction<number>) => {
      state.electricity = action.payload;

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    addFlightData: (state, action: PayloadAction<FlightData>) => {
      const flight = state.flight.find(
        (flight) => flight.id === action.payload.id
      );
      if (flight) {
        const index = state.flight.findIndex(
          (flight) => flight.id === action.payload.id
        );
        state.flight[index] = action.payload;
      } else {
        state.flight.push(action.payload);
      }

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },

    updateFlightData: (state, action: PayloadAction<FlightData>) => {
      const index = state.flight.findIndex(
        (flight) => flight.id === action.payload.id
      );
      if (index !== -1) {
        state.flight[index] = action.payload;
      }

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },

    removeFlightData: (state, action: PayloadAction<number>) => {
      state.flight = state.flight.filter(
        (flight) => flight.id !== action.payload
      );

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },

    changeWaste: (state, action: PayloadAction<number>) => {
      state.waste = action.payload;

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
    updateCalculatedState: (state, action: PayloadAction<number>) => {
      state.isCalculated = true;
      state.totalEmissions = action.payload;

      // Save updated state to localStorage
      saveStateToLocalStorage(state);
    },
  },
});

export const {
  addVehicleData,
  updateVehicleData,
  removeVehicalData,
  changeNaturalGas,
  changeElectricity,
  addFlightData,
  updateFlightData,
  removeFlightData,
  changeWaste,
  updateCalculatedState,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
