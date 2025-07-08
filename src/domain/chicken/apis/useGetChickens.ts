import supabase from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getChickens = async () => {
  const { data } = await supabase.from('chicken').select();
  return data;
};

export const useGetChickens = () => {
  return useQuery({
    queryKey: ['chickens'],
    queryFn: getChickens,
  });
};
