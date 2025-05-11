export interface DailyProduction {
  date: string;
  name: string; // For chart label
  count: number;
}

export interface MachineDetail {
  id: string;
  name: string;
  status: string;
  output: number;
  lastUpdated: string; // ISO date string
}

export interface MachineOption {
  value: string;
  label: string;
}

export interface ProductionData {
  dailyProduction: DailyProduction[];
  machineDetails: MachineDetail[];
  availableMachines: MachineOption[];
}