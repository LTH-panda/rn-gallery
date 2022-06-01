import {Text, Pressable} from 'react-native';
import React from 'react';
import {ButtonBlock} from './style';

type ButtonProps = {
  text: string;
  onPress: () => void;
  primary?: boolean;
  bgWhite?: boolean;
  border?: boolean;
  full?: boolean;
  mgBot?: boolean;
};

function Button({
  text,
  onPress,
  primary,
  bgWhite,
  border,
  full,
  mgBot,
}: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <ButtonBlock
          pressed={pressed}
          border={border}
          full={full}
          mgBot={mgBot}
          style={[
            primary && {backgroundColor: '#5c7cfa'},
            bgWhite && {backgroundColor: '#fff'},
          ]}>
          <Text style={primary && {color: '#fff'}}>{text}</Text>
        </ButtonBlock>
      )}
    </Pressable>
  );
}

export default Button;
