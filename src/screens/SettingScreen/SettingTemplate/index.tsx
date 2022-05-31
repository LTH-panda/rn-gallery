import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActionHeader} from 'components/Shared';
import styleUtils from 'styles/style-utils';

function SettingTemplate() {
  return (
    <SafeAreaView style={[styleUtils.fullScreen, styleUtils.bgWhite]}>
      <ActionHeader left="back" />
    </SafeAreaView>
  );
}

export default SettingTemplate;
