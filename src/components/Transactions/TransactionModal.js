import React from 'react';

import { Modal, Text } from 'react-native';

const TransactionModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <Text>Oi</Text>
    </Modal>
  );
};

export default TransactionModal;
