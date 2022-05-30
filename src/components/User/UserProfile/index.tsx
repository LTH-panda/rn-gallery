import React from 'react';
import {FlatList} from 'react-native';
import UserGridItem from '../UserGridItem';
import UserInfo from '../UserInfo';
import {styles} from './style';

function UserProfile() {
  const data = [1, 2, 3, 4, 5];
  return (
    <FlatList
      data={data}
      renderItem={() => <UserGridItem />}
      ListHeaderComponent={() => <UserInfo />}
      contentContainerStyle={[styles.container]}
      numColumns={3}
    />
  );
}

export default UserProfile;
