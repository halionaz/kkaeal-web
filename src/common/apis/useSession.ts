import { useEffect } from 'react';
import supabase from '@/common/utils/client';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const getAuthSession = async () => {
  const data = await supabase.auth.getSession();
  return data.data.session;
};

export const useSession = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(['session'], session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient]);

  return useQuery({
    queryKey: ['session'],
    queryFn: getAuthSession,
  });
};
