import {Text, TextInput} from 'react-native';
import React from 'react';
import styleUtils from 'styles/style-utils';
import styleInput from 'styles/style-input';
import {AuthFormBlock} from './style';

type AuthFormProps = {
  register?: boolean;
};

function AuthForm({register}: AuthFormProps) {
  return (
    <AuthFormBlock>
      <Text style={[styleUtils.h2]}>아이디</Text>
      <TextInput
        style={[styleInput.borderBot, styleUtils.mgBot]}
        placeholder="email"
      />
      <Text style={[styleUtils.h2]}>비밀번호</Text>
      <TextInput
        style={[styleInput.borderBot, styleUtils.mgBot]}
        placeholder="password"
      />
      {register && (
        <>
          <Text style={[styleUtils.h2]}>비밀번호 확인</Text>
          <TextInput
            style={[styleInput.borderBot, styleUtils.mgBot]}
            placeholder="password confirm"
          />
        </>
      )}
    </AuthFormBlock>
  );
}

export default AuthForm;
