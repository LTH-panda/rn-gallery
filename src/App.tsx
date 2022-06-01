import {NavigationContainer} from '@react-navigation/native';
import {clearToken} from 'api/client';
import RootStack from 'navigations/RootStack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from 'stores';

const queryClient = new QueryClient();

function App() {
  clearToken();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
