import { useGetUser } from '@/common/apis/useGetUser';
import { QUERY_KEYS } from '@/libs/constants/QUERY_KEYS';
import { EggInterface } from '@/libs/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postEggs = async (egg: Omit<EggInterface, 'id' | 'createdAt' | 'updatedAt'>) => {
  const data = localStorage.getItem(QUERY_KEYS.EGGS);
  const eggs = JSON.parse(data ?? '[]') as EggInterface[];
  eggs.push({
    ...egg,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  console.log(eggs);
  localStorage.setItem(QUERY_KEYS.EGGS, JSON.stringify(eggs));
  return eggs;
};

export const usePostEggs = () => {
  const queryClient = useQueryClient();
  const { data: user } = useGetUser();
  return useMutation({
    mutationFn: (egg: Omit<EggInterface, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
      if (!user?.id) {
        console.log(egg);
        throw new Error('User not found');
      }
      return postEggs({
        ...egg,
        userId: user.id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.EGGS] });
    },
  });
};
