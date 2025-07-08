import supabase from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteChicken = async (chickenId: number) => {
  const response = await supabase.from('chicken').delete().eq('id', chickenId);
  return response.data;
};

export const useDeleteChicken = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteChicken,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chickens'] });
    },
  });
};
