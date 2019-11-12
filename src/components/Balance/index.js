import React, { useContext, useEffect } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';
import BalanceContext from '../../context/balance/balanceContext';

const Balance = () => {
  const balanceContext = useContext(BalanceContext);

  const { balance, getBalance } = balanceContext;

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Balance</Text>
      <Text style={balance >= 0 ? styles.balanceGreen : styles.balanceRed}>
        R$ {balance}
      </Text>
    </View>
  );
};

export default Balance;
