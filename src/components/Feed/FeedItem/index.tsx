import React from 'react';
import styleUtils from 'styles/style-utils';
import {User} from 'api/user-api/type';
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
  return (
    <FeedItemBlock style={[styleUtils.boxShadow]}>
      <FeedHeader user={user} id={id} />
      <FeedImage image={image} />
      <FeedSummary desc={desc} />
    </FeedItemBlock>
  );
}

export default FeedItem;
