import {Text} from 'react-native';
import React from 'react';
import styleUtils from 'styles/style-utils';
import {StyledInput} from 'components/Shared';
import {AuthFormBlock} from './style';

type AuthFormProps = {
  register?: boolean;
};

function AuthForm({register}: AuthFormProps) {
  return (
    <AuthFormBlock>
      <Text style={[styleUtils.h2]}>아이디</Text>
      <StyledInput placeholder="email" style={[styleUtils.mgBot]} />
      <Text style={[styleUtils.h2]}>비밀번호</Text>
      <StyledInput placeholder="password" />
      {register && (
        <>
          <Text style={[styleUtils.h2, styleUtils.mgTop]}>비밀번호 확인</Text>
          <StyledInput placeholder="password confirm" />
        </>
      )}
    </AuthFormBlock>
  );
}

export default AuthForm;
