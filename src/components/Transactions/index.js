import React, { useContext, useEffect, useState } from 'react';

import { View, Text, TouchableHighlight, FlatList } from 'react-native';

import styles from './styles';

import BalanceContext from '~/context/balance/balanceContext';
import Transaction from '../Transaction';
import InputDialog from './InputDialog';

const Transactions = () => {
  const balanceContext = useContext(BalanceContext);
  const { transactions, getTransactions, addTransaction } = balanceContext;

  const [addInput, setAddInput] = useState(false);

  useEffect(() => {
    getTransactions();
  }, []);

  const openModal = value => {
    setAddInput(value);
  };

  const add = value => {
    const trans = {
      value,
      id: transactions.length + 1,
    };
    addTransaction(trans);

    openModal(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableHighlight
          style={styles.button}
          title="+"
          onPress={() => openModal(true)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
      <InputDialog
        visible={addInput}
        closeDialog={openModal}
        addTransaction={add}
      />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Transaction trans={item} />}
        keyExtractor={trans => trans.id.toString()}
      />
    </View>
  );
};

export default Transactions;
