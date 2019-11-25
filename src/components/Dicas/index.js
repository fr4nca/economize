import React from 'react';
import { View, Text } from 'react-native';

import Dialog from 'react-native-dialog';
import styles from './styles';

const DicasDialog = ({ visible, setVisible, dica }) => {
  return (
    <View>
      <Dialog.Container wrapperStyle={styles.container} visible={visible}>
        <Dialog.Title>{dica}</Dialog.Title>
        <Dialog.Button
          style={styles.button}
          label="Ok"
          color="#fff"
          onPress={() => {
            setVisible(false);
          }}
        />
      </Dialog.Container>
    </View>
  );
};

export default DicasDialog;
