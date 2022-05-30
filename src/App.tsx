import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'navigations/RootStack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
