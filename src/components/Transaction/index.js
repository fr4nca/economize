import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Transaction = ({ trans }) => {
  return (
    <View style={styles.trans}>
      <Text style={trans >= 0 ? styles.textGreen : styles.textRed}>
        {trans}
      </Text>
    </View>
  );
};

export default Transaction;
