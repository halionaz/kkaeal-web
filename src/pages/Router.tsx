import { Route, Routes } from 'react-router';

import AuthLayout from '@/common/components/Layouts/AuthLayout';
import GuestLayout from '@/common/components/Layouts/GuestLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import Layout from '@/common/components/Layouts/Layout';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;
