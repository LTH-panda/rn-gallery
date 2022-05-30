import useGoBack from 'hooks/useGoBack';
import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styleUtils from 'styles/style-utils';
import {ActionHeaderBlock} from './style';

type ActionHeaderProps = {
  text?: string;
  left?: 'exit' | 'back';
  right?: string;
};

function ActionHeader({text, left, right}: ActionHeaderProps) {
  const {navigateGoBack} = useGoBack();

  return (
    <ActionHeaderBlock>
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
    </ActionHeaderBlock>
  );
}

export default ActionHeader;
