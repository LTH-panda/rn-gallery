import {Button, PaddingTeamplte} from 'components/Shared';
import useNavigateAuth from 'hooks/useNavigateAuth';
import React from 'react';
import {Pressable, Text} from 'react-native';
import {ActionsBlock, DescBlock, DescText, SurfingButton} from './style';

function WelcomeTemplate() {
  const {navigateRegister, navigateSignIn, navigateMainTab} = useNavigateAuth();

  return (
    <PaddingTeamplte>
      <DescBlock>
        <DescText>Welcome</DescText>
      </DescBlock>
      <ActionsBlock>
        <Button onPress={navigateRegister} text="회원가입" primary full mgBot />
        <Button onPress={navigateSignIn} text="로그인" full mgBot />
        <Pressable onPress={navigateMainTab}>
          <SurfingButton>
            <Text>둘러보기</Text>
          </SurfingButton>
        </Pressable>
      </ActionsBlock>
    </PaddingTeamplte>
  );
}

export default WelcomeTemplate;
