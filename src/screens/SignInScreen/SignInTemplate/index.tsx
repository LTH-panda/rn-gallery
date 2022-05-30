import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {BottomButton, Header, PaddingTeamplte} from 'components/Shared';
import {AuthForm} from 'components/Auth';

function SignInTemplate() {
  return (
    <SafeAreaView
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}
      edges={['top']}>
      <Header left="back" />
      <PaddingTeamplte>
        <AuthForm />
      </PaddingTeamplte>
      <BottomButton text="로그인" />
    </SafeAreaView>
  );
}

export default SignInTemplate;
