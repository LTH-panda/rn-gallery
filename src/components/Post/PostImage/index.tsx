/* eslint-disable global-require */
import {Image} from 'react-native';
import React from 'react';
import {PostImageView} from './style';

function PostImage() {
  return (
    <PostImageView>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('assets/images/post_image.jpg')}
        resizeMode="cover"
      />
    </PostImageView>
  );
}

export default PostImage;
