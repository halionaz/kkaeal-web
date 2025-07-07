import supabase from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getSchedule = async () => {
  const { data } = await supabase.from('schedule').select();
  return data;
};

export const useGetSchedule = () => {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: getSchedule,
  });
};
