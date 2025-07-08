import { Route, Routes } from 'react-router';

import AuthLayout from '@/common/components/AuthLayout';
import GuestLayout from '@/common/components/GuestLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
