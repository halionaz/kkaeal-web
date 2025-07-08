import supabase from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postSchedule = async (title: string) => {
  const { data } = await supabase.from('chicken').insert({ title: title });
  return data;
};

export const usePostSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chicken'] });
    },
  });
};
