/* eslint-disable global-require */
import {Image} from 'react-native';
import React from 'react';
import {ImageView, UserGridItemView} from './style';

function UserGridItem() {
  return (
    <UserGridItemView>
      <ImageView>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('assets/images/post_image.jpg')}
          resizeMode="cover"
        />
      </ImageView>
    </UserGridItemView>
  );
}

export default UserGridItem;
