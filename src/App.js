import React from 'react';
import {News} from './screens/News';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      retry: false,
    },
  },
});

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <News />
    </QueryClientProvider>
  );
};

export default App;
