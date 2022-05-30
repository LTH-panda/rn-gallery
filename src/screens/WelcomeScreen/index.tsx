import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import WelcomeTemplate from './WelcomTemplate';

function WelcomeScreen() {
  return (
    <SafeAreaView style={[styleUtils.fullScreen, styleUtils.bgWhite]}>
      <WelcomeTemplate />
    </SafeAreaView>
  );
}

export default WelcomeScreen;
