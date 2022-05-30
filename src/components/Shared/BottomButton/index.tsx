import {Pressable, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styleUtils from 'styles/style-utils';
import {BottomButtonBlock} from './style';

type BottomButtonProps = {
  text: string;
  onPress: () => void;
};

function BottomButton({text, onPress}: BottomButtonProps) {
  const {bottom} = useSafeAreaInsets();
  return (
    <Pressable onPress={onPress}>
      <BottomButtonBlock style={{paddingBottom: bottom * 1.5}}>
        <Text style={[styleUtils.ftWhite, styleUtils.h2]}>{text}</Text>
      </BottomButtonBlock>
    </Pressable>
  );
}

export default BottomButton;
