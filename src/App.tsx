import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'navigations/RootStack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styleUtils from 'styles/style-utils';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styleUtils.fullScreen]}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
