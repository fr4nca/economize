import React from 'react';
import { View, StatusBar } from 'react-native';

import Balance from '~/components/Balance';

import styles from './styles';
import Transactions from '~/components/Transactions';

const Dashboard = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Balance />
    <Transactions />
  </View>
);

export default Dashboard;
