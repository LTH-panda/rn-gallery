import React from 'react';
import {BottomButton, ActionHeader, PaddingTeamplte} from 'components/Shared';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {AuthForm} from 'components/Auth';

function RegisterTemplate() {
  return (
    <SafeAreaView
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}
      edges={['top']}>
      <ActionHeader left="back" />
      <PaddingTeamplte>
        <AuthForm register />
      </PaddingTeamplte>
      <BottomButton text="회원가입" />
    </SafeAreaView>
  );
}

export default RegisterTemplate;
