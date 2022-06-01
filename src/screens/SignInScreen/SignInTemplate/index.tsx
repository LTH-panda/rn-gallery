import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {ActionHeader} from 'components/Shared';
import {AuthForm} from 'components/Auth';

function SignInTemplate() {
  return (
    <SafeAreaView
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}
      edges={['top']}>
      <ActionHeader left="back" />
      <AuthForm />
    </SafeAreaView>
  );
}

export default SignInTemplate;
