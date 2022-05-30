import React from 'react';
import styleUtils from 'styles/style-utils';
import {ImageView, UserInfoBlock} from './style';
import UserImage from '../UserImage';
import UserSummary from '../UserSummary';

function UserInfo() {
  return (
    <UserInfoBlock style={[styleUtils.boxShadow, styleUtils.mgBot]}>
      <ImageView>
        <UserImage image="image" />
      </ImageView>
      <UserSummary />
    </UserInfoBlock>
  );
}

export default UserInfo;
