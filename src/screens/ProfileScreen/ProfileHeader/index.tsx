import {Text} from 'react-native';
import React from 'react';
import {Header} from 'components/Shared';
import styleUtils from 'styles/style-utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ProfileHeaderProps = {
  name: string;
};

function ProfileHeader({name}: ProfileHeaderProps) {
  return (
    <Header>
      <Text style={[styleUtils.h1]}>{name}</Text>
      <Icon name="menu" size={24} />
    </Header>
  );
}

export default ProfileHeader;
