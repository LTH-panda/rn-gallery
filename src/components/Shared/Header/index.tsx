import useGoBack from 'hooks/useGoBack';
import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styleUtils from 'styles/style-utils';
import {HeaderBlock} from './style';

type HeaderProps = {
  text?: string;
  left?: 'exit' | 'back';
  right?: string;
};

function Header({text, left, right}: HeaderProps) {
  const {navigateGoBack} = useGoBack();

  return (
    <HeaderBlock>
      {left && (
        <Pressable onPress={navigateGoBack}>
          {left === 'back' ? (
            <Icon name="arrow-back" size={20} />
          ) : (
            <Icon name="close" size={20} />
          )}
        </Pressable>
      )}
      <Text style={[styleUtils.h2]}>{text}</Text>
      {right && (
        <Pressable>
          <Text style={[styleUtils.h2]}>{right}</Text>
        </Pressable>
      )}
    </HeaderBlock>
  );
}

export default Header;
