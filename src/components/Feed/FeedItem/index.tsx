import React from 'react';
import styleUtils from 'styles/style-utils';
import {User} from 'api/user-api/type';
import {Pressable} from 'react-native';
import useNavigateFeed from 'hooks/useNavigateFeed';
import {FeedItemBlock} from './style';
import FeedHeader from '../FeedHeader';
import FeedImage from '../FeedImage';
import FeedSummary from '../FeedSummary';

type FeedItemProps = {
  id: number;
  user: User;
  image: string;
  desc: string;
};

function FeedItem({id, user, image, desc}: FeedItemProps) {
  const {navigatePost} = useNavigateFeed();

  return (
    <FeedItemBlock style={[styleUtils.boxShadow]}>
      <FeedHeader user={user} id={id} />
      <Pressable onPress={navigatePost}>
        <FeedImage image={image} />
        <FeedSummary desc={desc} />
      </Pressable>
    </FeedItemBlock>
  );
}

export default FeedItem;
