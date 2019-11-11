import React from 'react';

import { ImageBackground, StatusBar, Text } from 'react-native';
import BalanceCard from '~/components/BalanceCard';

import styles from './styles';

const Dashboard = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Text style={styles.title}>Economize</Text>
    <BalanceCard />
  </ImageBackground>
);

export default Dashboard;
