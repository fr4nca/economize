import React, { useContext, useEffect, useState } from 'react';

import BalanceContext from '~/context/balance/balanceContext';
import DicasContext from '~/context/dicas/dicasContext';

import { View, StatusBar } from 'react-native';

import Balance from '~/components/Balance';

import styles from './styles';
import Transactions from '~/components/Transactions';
import DicasDialog from '~/components/Dicas';

const Dashboard = () => {
  const balanceContext = useContext(BalanceContext);
  const { balance } = balanceContext;

  const dicasContext = useContext(DicasContext);
  const { dicaTexto, dicaAtual, setDica, getDica, getDicaAtual } = dicasContext;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (balance) {
      if (balance >= 500 && balance < 1000 && dicaAtual != 0) {
        setDica(0);
        getDica();
        setVisible(true);
      } else if (balance >= 1000 && balance < 2000 && dicaAtual != 1) {
        setDica(1);
        getDica();
        setVisible(true);
      } else if (balance >= 2000 && balance < 3500 && dicaAtual != 2) {
        setDica(2);
        getDica();
        setVisible(true);
      } else if (balance >= 3500 && balance < 5000 && dicaAtual != 3) {
        setDica(3);
        getDica();
        setVisible(true);
      } else if (balance >= -500 && balance < 0 && dicaAtual != 4) {
        setDica(4);
        getDica();
        setVisible(true);
      } else if (balance >= -1000 && balance < -500 && dicaAtual != 5) {
        setDica(5);
        getDica();
        setVisible(true);
      } else if (balance < -1000 && dicaAtual != 6) {
        setDica(6);
        getDica();
        setVisible(true);
      }
    }
  }, [balance]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Balance />
      <Transactions />
      <DicasDialog visible={visible} setVisible={setVisible} dica={dicaTexto} />
    </View>
  );
};

export default Dashboard;
