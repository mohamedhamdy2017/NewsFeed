import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

import {NavigationRoot} from './navigation';

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
      <NavigationRoot />
    </QueryClientProvider>
  );
};

export default App;
