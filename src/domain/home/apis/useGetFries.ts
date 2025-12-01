import { QUERY_KEYS } from '@/libs/constants/QUERY_KEYS';
import { FryInterface } from '@/libs/types';
import { useQuery } from '@tanstack/react-query';

const getFries = async () => {
  const data = localStorage.getItem(QUERY_KEYS.FRIES);
  return JSON.parse(data ?? '[]') as FryInterface[];
};

const getFriesInRange = async (startDate: string, endDate: string) => {
  const data = await getFries();
  return data.filter((fry: FryInterface) => {
    return (
      fry.startDate &&
      fry.endDate &&
      new Date(fry.startDate) >= new Date(startDate) &&
      new Date(fry.endDate) <= new Date(endDate)
    );
  });
};

export const useGetFriesInRange = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.FRIES, startDate, endDate],
    queryFn: () => getFriesInRange(startDate, endDate),
  });
};
