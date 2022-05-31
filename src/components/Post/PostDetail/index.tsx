import React from 'react';
import {View} from 'react-native';
import PostImage from '../PostImage';
import PostUser from '../PostUser';
import PostBody from '../PostBody';

function PostDetail() {
  return (
    <View>
      <PostImage />
      <PostUser />
      <PostBody />
    </View>
  );
}

export default PostDetail;
