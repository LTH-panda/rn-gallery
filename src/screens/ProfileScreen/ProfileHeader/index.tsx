import {Pressable, Text} from 'react-native';
import React, {useCallback} from 'react';
import {Header} from 'components/Shared';
import styleUtils from 'styles/style-utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/type';

type ProfileHeaderProps = {
  name: string;
};

function ProfileHeader({name}: ProfileHeaderProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const navigateSetting = useCallback(() => navigation.navigate('Setting'), []);

  return (
    <Header>
      <Text style={[styleUtils.h1]}>{name}</Text>
      <Pressable onPress={navigateSetting}>
        <Icon name="menu" size={24} />
      </Pressable>
    </Header>
  );
}

export default ProfileHeader;
