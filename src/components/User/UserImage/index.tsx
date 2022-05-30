import {Image} from 'react-native';
import React from 'react';
import {UserImageBlock} from './style';

type UserImageProps = {
  image: string | undefined;
};

function UserImage({image}: UserImageProps) {
  return (
    <UserImageBlock>
      <Image
        style={{width: '100%', height: '100%', borderRadius: 100}}
        source={
          // eslint-disable-next-line global-require
          image ? {uri: image} : require('assets/images/default_profile.jpg')
        }
      />
    </UserImageBlock>
  );
}

export default UserImage;
