import { Outlet } from 'react-router';

import * as s from './style.css';

const Layout = () => {
  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
