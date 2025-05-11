import { useQuery } from '@tanstack/react-query'; // 1. Changed import
import { fetchProductionData } from '../services/api';
import type { ProductionData } from '../services/types';

export const useProductionData = () => {
  return useQuery<ProductionData, Error, ProductionData, readonly ['productionData']>({ // 2. Changed to options object
    queryKey: ['productionData'], // queryKey is now an array
    queryFn: fetchProductionData, // queryFn is the fetcher function
  });
};

