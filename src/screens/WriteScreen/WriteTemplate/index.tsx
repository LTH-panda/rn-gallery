import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {ActionHeader, BottomButton, PaddingTeamplte} from 'components/Shared';
import {WriteForm} from 'components/Write';

function WriteTemplate() {
  return (
    <SafeAreaView
      edges={['top']}
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}>
      <ActionHeader left="exit" />
      <PaddingTeamplte>
        <WriteForm />
      </PaddingTeamplte>
      <BottomButton text="글 작성" />
    </SafeAreaView>
  );
}

export default WriteTemplate;
