import supabase from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteSchedule = async (scheduleId: number) => {
  const response = await supabase.from('schedule').delete().eq('id', scheduleId);
  return response.data;
};

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedule'] });
    },
  });
};
