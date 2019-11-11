import React, { useContext, useEffect, useState } from 'react';

import { View, Text, TouchableHighlight, FlatList } from 'react-native';

import styles from './styles';

import BalanceContext from '../../context/balance/balanceContext';
import Transaction from '../Transaction';
import TransactionModal from './TransactionModal';

const Transactions = () => {
  const balanceContext = useContext(BalanceContext);
  const { transactions, getTransactions, addTransaction } = balanceContext;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getTransactions();
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const handleAddTransaction = value => {
    addTransaction(value);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableHighlight style={styles.button} title="+" onPress={openModal}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
      <TransactionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addTransaction={handleAddTransaction}
      />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Transaction trans={item} />}
        keyExtractor={trans => trans.toString()}
      />
    </View>
  );
};

export default Transactions;
