import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type FeedActionsProps = {
  id: number;
};

function FeedActions({id}: FeedActionsProps) {
  return (
    <Pressable>
      <Icon name="more-vert" size={20} />
    </Pressable>
  );
}

export default FeedActions;
