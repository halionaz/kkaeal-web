import { Outlet } from 'react-router';

import * as s from './style.css';

const DesktopLayout = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DesktopLayout;
