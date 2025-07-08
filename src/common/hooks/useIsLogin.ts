import { useSession } from '@/common/apis/useSession';

const useIsLogin = () => {
  const { data: session, isLoading } = useSession();

  const isLogin = !isLoading && session !== null;
  return { isLogin, isLoading };
};

export default useIsLogin;
