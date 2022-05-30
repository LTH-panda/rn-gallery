import {Text, Pressable} from 'react-native';
import React from 'react';
import {ButtonBlock} from './style';

type ButtonProps = {
  text: string;
  onPress: () => void;
  primary?: boolean;
  full?: boolean;
  mgBot?: boolean;
};

function Button({text, onPress, primary, full, mgBot}: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <ButtonBlock
          pressed={pressed}
          primary={primary}
          full={full}
          mgBot={mgBot}>
          <Text style={primary && {color: '#fff'}}>{text}</Text>
        </ButtonBlock>
      )}
    </Pressable>
  );
}

export default Button;
