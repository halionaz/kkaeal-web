import DesktopLayout from '@/common/components/DesktopLayout';
import MainPage from '@/pages/MainPage';
import { Route, Routes } from 'react-router';

const Router = () => {
  return (
    <Routes>
      <Route element={<DesktopLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
