import { QUERY_KEYS } from '@/libs/constants/QUERY_KEYS';
import { EggInterface } from '@/libs/types';
import { useQuery } from '@tanstack/react-query';

const getEggs = async () => {
  const data = localStorage.getItem(QUERY_KEYS.EGGS);
  return JSON.parse(data ?? '[]') as EggInterface[];
};

// TODO: Repeat 있는 Eggs(Chicken)을 추적해서 해당 기간에 Egg로 존재하는지 판단하는 로직
const getEggsInRange = async (startDate: string, endDate: string) => {
  const data = await getEggs();
  return data.filter((egg: EggInterface) => {
    return (
      egg.startDate &&
      egg.endDate &&
      new Date(egg.startDate) >= new Date(startDate) &&
      new Date(egg.endDate) <= new Date(endDate)
    );
  });
};

export const useGetEggs = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EGGS],
    queryFn: getEggs,
  });
};

export const useGetEggsInRange = (startDate: string, endDate: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.EGGS, startDate, endDate],
    queryFn: () => getEggsInRange(startDate, endDate),
  });
};
