import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const BalanceCard = () => (
  <View style={styles.card}>
    <Text style={styles.title}>Balance</Text>
    <Text style={styles.balance}>R$ 198,00</Text>
  </View>
);

export default BalanceCard;
