import { UserInterface } from '@/libs/types/auth';
import { useQuery } from '@tanstack/react-query';

const getUser = async () => {
  return {
    id: '1',
    name: 'John Doe',
  } as UserInterface;
  // const data = localStorage.getItem('user');
  // if (!data) return null;
  // return JSON.parse(data) as UserInterface;
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });
};
