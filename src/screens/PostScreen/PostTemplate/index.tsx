import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {ActionHeader} from 'components/Shared';
import {FlatList} from 'react-native';
import {PostDetail} from 'components/Post';
import {CommentItem} from 'components/Comment';

function PostTemplate() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SafeAreaView
      edges={['top']}
      style={[styleUtils.fullScreen, styleUtils.bgWhite]}>
      <ActionHeader left="back" />
      <FlatList
        ListHeaderComponent={PostDetail}
        data={data}
        renderItem={() => <CommentItem />}
      />
    </SafeAreaView>
  );
}

export default PostTemplate;
