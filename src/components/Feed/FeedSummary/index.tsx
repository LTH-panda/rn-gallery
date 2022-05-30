import {Text} from 'react-native';
import React from 'react';
import {FeedSummaryBlock} from './style';

type FeedSummaryProps = {
  desc: string;
};

function FeedSummary({desc}: FeedSummaryProps) {
  return (
    <FeedSummaryBlock>
      <Text>{desc}</Text>
    </FeedSummaryBlock>
  );
}

export default FeedSummary;
