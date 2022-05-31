import {Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomModal, Button} from 'components/Shared';
import {ModalContentView} from './style';

type FeedActionsProps = {
  id: number;
};

function FeedActions({id}: FeedActionsProps) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable onPress={() => setVisible(true)}>
        <Icon name="more-vert" size={20} />
      </Pressable>
      <BottomModal visible={visible} handleVisible={() => setVisible(false)}>
        <ModalContentView>
          <Button text="공유하기" full bgWhite mgBot />
          <Button text="삭제하기" full bgWhite />
        </ModalContentView>
      </BottomModal>
    </>
  );
}

export default FeedActions;
