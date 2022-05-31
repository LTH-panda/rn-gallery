import {Modal} from 'react-native';
import React from 'react';
import {Dim, ModalView} from './style';

type BottomModalProps = {
  children: React.ReactNode;
  visible: boolean;
  handleVisible: () => void;
};

function BottomModal({children, visible, handleVisible}: BottomModalProps) {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <Dim onPress={handleVisible} />
      <ModalView>{children}</ModalView>
    </Modal>
  );
}

export default BottomModal;
