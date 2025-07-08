import { Auth } from '@supabase/auth-ui-react';
import supabase from '@/common/utils/client';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import * as s from './style.css';

const LoginPage = () => {
  return (
    <div className={s.Container}>
      <div className={s.Title}>
        <h1>깨알 로그인</h1>
      </div>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  );
};
export default LoginPage;
