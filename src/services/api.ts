import type { ProductionData } from './types';

export const fetchProductionData = async (): Promise<ProductionData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential API error
  // if (Math.random() > 0.8) { // Uncomment to test error state
  //   throw new Error('Failed to fetch production data: Simulated API Error');
  // }

  const response = await fetch('/mockData.json'); // Fetches from public folder
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};