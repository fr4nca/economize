import React, { useContext } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import BalanceContext from '~/context/balance/balanceContext';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Transaction = ({ trans }) => {
  const balanceContext = useContext(BalanceContext);
  const { deleteTransaction } = balanceContext;

  const handleDeleteTransaction = transaction => {
    deleteTransaction(transaction);
  };

  return (
    <View style={styles.trans}>
      <Text style={trans.value >= 0 ? styles.textGreen : styles.textRed}>
        R$ {trans.value}
      </Text>
      <TouchableHighlight
        style={styles.button}
        title="+"
        onPress={() => handleDeleteTransaction(trans)}>
        <Icon name="trash" size={14} color="#fff" />
      </TouchableHighlight>
    </View>
  );
};

export default Transaction;
