import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {ActionHeader} from 'components/Shared';
import {FeedList} from 'components/Feed';

function FeedTemplate() {
  return (
    <SafeAreaView style={[styleUtils.bgWhite, styleUtils.fullScreen]}>
      <ActionHeader text="Gallery" />
      <FeedList />
    </SafeAreaView>
  );
}

export default FeedTemplate;
