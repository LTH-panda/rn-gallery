import {FlatList, View} from 'react-native';
import React from 'react';
import FeedItem from '../FeedItem';
import {styles} from './style';

function FeedList() {
  const data = [
    {
      desc: 'test',
      user: {
        name: 'lth',
        image: 'undefined',
      },
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedItem desc={item.desc} user={item.user} />}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      contentContainerStyle={[styles.container]}
    />
  );
}

export default FeedList;
