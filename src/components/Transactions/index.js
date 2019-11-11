import React, { useContext, useEffect } from 'react';

import { View, Text, Button, FlatList } from 'react-native';

import styles from './styles';
import BalanceContext from '../../context/balance/balanceContext';

const Transactions = () => {
  const balanceContext = useContext(BalanceContext);

  const { transactions, getTransactions, addTransaction } = balanceContext;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <Button
          style={styles.button}
          title="Add"
          onPress={() => addTransaction(-10)}
        />
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={trans => trans.toString()}
      />
    </View>
  );
};

export default Transactions;
