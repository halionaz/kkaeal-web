import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from '@/pages/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // API 호출 실패 시 재시도 여부
      refetchOnMount: true, // 컴포넌트 마운트 시 데이터 요청 여부
      refetchOnReconnect: true, // 네트워크 재연결 시 데이터 요청 여부
      refetchOnWindowFocus: true, // 브라우저 포커스 시 데이터 요청 여부
      staleTime: 1000 * 10, // 10초 동안 데이터 살아있삼
      throwOnError: false, // 에러 발생 시 예외 던지기 여부
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
