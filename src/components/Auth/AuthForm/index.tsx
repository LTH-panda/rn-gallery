import {Text, TextInput} from 'react-native';
import React, {useCallback} from 'react';
import styleUtils from 'styles/style-utils';
import styleInput from 'styles/style-input';
import useLogin from 'hooks/queries/useLogin';
import useRegister from 'hooks/queries/useRegister';
import {BottomButton} from 'components/Shared';
import useAuthForm from 'hooks/useAuthForm';
import {AuthFormBlock} from './style';

type AuthFormProps = {
  isRegister?: boolean;
};

function AuthForm({isRegister}: AuthFormProps) {
  const {
    username,
    email,
    password,
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
  } = useAuthForm();
  const {mutate: login, isLoading: loginLoading} = useLogin();
  const {mutate: register, isLoading: registerLoading} = useRegister();

  const isLoading = loginLoading || registerLoading;

  const onPress = useCallback(() => {
    if (isLoading) return;

    if (isRegister) {
      register({
        username,
        email,
        password,
      });
    } else {
      login({
        identifier: username,
        password,
      });
    }
  }, [username, email, password]);

  return (
    <>
      <AuthFormBlock>
        <Text style={[styleUtils.h2]}>아이디</Text>
        <TextInput
          style={[styleInput.borderBot, styleUtils.mgBot]}
          placeholder="username"
          value={username}
          onChangeText={onChangeUsername}
        />
        {isRegister && (
          <>
            <Text style={[styleUtils.h2]}>이메일</Text>
            <TextInput
              style={[styleInput.borderBot, styleUtils.mgBot]}
              placeholder="email"
              value={email}
              onChangeText={onChangeEmail}
            />
          </>
        )}
        <Text style={[styleUtils.h2]}>비밀번호</Text>
        <TextInput
          style={[styleInput.borderBot, styleUtils.mgBot]}
          placeholder="password"
          value={password}
          onChangeText={onChangePassword}
        />
      </AuthFormBlock>
      <BottomButton
        onPress={onPress}
        text={isRegister ? '회원가입' : '로그인'}
      />
    </>
  );
}

export default AuthForm;
