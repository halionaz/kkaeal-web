import supabase from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postChicken = async (title: string) => {
  const { data } = await supabase.from('chicken').insert({ title: title });
  return data;
};

export const usePostChicken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postChicken,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chickens'] });
    },
  });
};
