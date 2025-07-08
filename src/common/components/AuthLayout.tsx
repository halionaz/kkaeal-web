import { Outlet, useNavigate } from 'react-router';

import useIsLogin from '@/common/hooks/useIsLogin';
import { useEffect } from 'react';

const AuthLayout = () => {
  const { isLogin, isLoading } = useIsLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate('/login');
    }
  }, [isLogin, isLoading, navigate]);

  if (isLoading) return null;

  return <Outlet />;
};
export default AuthLayout;
