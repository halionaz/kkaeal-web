import supabase from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getSchedule = async () => {
  const { data } = await supabase.from('chicken').select();
  return data;
};

export const useGetSchedule = () => {
  return useQuery({
    queryKey: ['chicken'],
    queryFn: getSchedule,
  });
};
