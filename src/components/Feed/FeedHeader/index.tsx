import {Pressable, View} from 'react-native';
import React from 'react';
import {UserImage} from 'components/User';
import {User} from 'api/user-api/type';
import {FeedHeaderBlock, Image, Name, ProfileBlock} from './style';
import FeedActions from '../FeedActions';

type FeedHeaderProps = {
  user: User;
  id: number;
};

function FeedHeader({user, id}: FeedHeaderProps) {
  return (
    <FeedHeaderBlock>
      <Pressable>
        <ProfileBlock>
          <Image>
            <UserImage image={user.image} />
          </Image>
          <Name>{user.name}</Name>
        </ProfileBlock>
      </Pressable>
      <View style={{marginLeft: 'auto'}}>
        <FeedActions id={id} />
      </View>
    </FeedHeaderBlock>
  );
}

export default FeedHeader;
