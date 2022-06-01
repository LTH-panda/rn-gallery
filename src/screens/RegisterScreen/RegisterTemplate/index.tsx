import React from 'react';
import {ActionHeader} from 'components/Shared';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {AuthForm} from 'components/Auth';

function RegisterTemplate() {
  return (
    <SafeAreaView
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}
      edges={['top']}>
      <ActionHeader left="back" />

      <AuthForm isRegister />
    </SafeAreaView>
  );
}

export default RegisterTemplate;
