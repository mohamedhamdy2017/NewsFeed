import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

import I18n from './localization';
import {commonStore} from './store';
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
  const {language} = commonStore();
  React.useEffect(() => {
    I18n.locale = language || 'ar';
  }, [language]);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationRoot />
    </QueryClientProvider>
  );
};

export default App;
