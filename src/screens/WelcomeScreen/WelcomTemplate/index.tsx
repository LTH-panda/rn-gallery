import {Button, PaddingTeamplte} from 'components/Shared';
import useNavigateAuth from 'hooks/useNavigateAuth';
import React from 'react';
import {ActionsBlock, DescBlock, DescText} from './style';

function WelcomeTemplate() {
  const {navigateRegister, navigateSignIn} = useNavigateAuth();

  return (
    <PaddingTeamplte>
      <DescBlock>
        <DescText>Welcome</DescText>
      </DescBlock>
      <ActionsBlock>
        <Button onPress={navigateRegister} text="회원가입" primary full mgBot />
        <Button onPress={navigateSignIn} text="로그인" full />
      </ActionsBlock>
    </PaddingTeamplte>
  );
}

export default WelcomeTemplate;
