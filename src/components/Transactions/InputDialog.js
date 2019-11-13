import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Dialog from 'react-native-dialog';
import styles from './styles';

const InputDialog = ({ visible, closeDialog, addTransaction }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const submitValue = () => {
    if (value !== '') {
      addTransaction(value);
      setValue('');
      setError(false);
      return;
    }
    setError(true);
    setValue('');
  };

  return (
    <View>
      <Dialog.Container wrapperStyle={styles.container} visible={visible}>
        <Dialog.Title>Enter transaction value</Dialog.Title>
        <Dialog.Input
          wrapperStyle={styles.textInput}
          keyboardType="numeric"
          value={value}
          onChangeText={text => setValue(text)}
        />
        {error && (
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginTop: -10,
              marginLeft: 10,
            }}>
            Valor não pode ser vazio
          </Text>
        )}
        <Dialog.Button
          style={styles.button}
          label="Add"
          onPress={submitValue}
          color="#fff"
        />
        <Dialog.Button
          label="Close"
          onPress={() => {
            closeDialog(false);
            setValue('');
            setError(false);
          }}
          color="#7159c1"
        />
      </Dialog.Container>
    </View>
  );
};

export default InputDialog;
