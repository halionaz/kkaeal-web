import { Auth } from '@supabase/auth-ui-react';
import supabase from '@/common/utils/client';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const LoginPage = () => {
  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
};
export default LoginPage;
