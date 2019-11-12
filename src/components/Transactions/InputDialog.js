import React, { useState } from 'react';
import { View } from 'react-native';

import Dialog from 'react-native-dialog';
import styles from './styles';

const InputDialog = ({ visible, closeDialog, addTransaction }) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Enter transaction value</Dialog.Title>
        <Dialog.Input
          wrapperStyle={styles.textInput}
          keyboardType="numeric"
          value={value}
          onChangeText={text => setValue(text)}
        />
        <Dialog.Button
          style={styles.button}
          label="Add"
          onPress={() => addTransaction(value)}
          color="#fff"
        />
        <Dialog.Button
          label="Close"
          onPress={() => closeDialog(false)}
          color="#7159c1"
        />
      </Dialog.Container>
    </View>
  );
};

export default InputDialog;
