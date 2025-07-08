import { Outlet, useNavigate } from 'react-router';

import useIsLogin from '@/common/hooks/useIsLogin';
import { useEffect } from 'react';

const GuestLayout = () => {
  const { isLogin, isLoading } = useIsLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isLogin) {
      navigate('/');
    }
  }, [isLogin, isLoading, navigate]);

  if (isLoading) return null;

  return <Outlet />;
};
export default GuestLayout;
