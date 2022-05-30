import {Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {FeedImageBlock} from './style';

type FeedImageProps = {
  image: string;
};

function FeedImage({image}: FeedImageProps) {
  const {width} = useWindowDimensions();
  return (
    <FeedImageBlock style={{width: '100%', height: width}}>
      <Image
        style={{width: '100%', height: '100%'}}
        // eslint-disable-next-line global-require
        source={image ? {uri: image} : require('assets/images/post_image.jpg')}
        resizeMode="cover"
      />
    </FeedImageBlock>
  );
}

export default FeedImage;
