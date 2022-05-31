import {Text} from 'react-native';
import React from 'react';
import {UserImage} from 'components/User';
import {PostUserView, UserImageView} from './style';

function PostUser() {
  return (
    <PostUserView>
      <UserImageView>
        <UserImage />
      </UserImageView>
      <Text>이름</Text>
    </PostUserView>
  );
}

export default PostUser;
