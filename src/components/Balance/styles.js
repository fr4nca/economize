import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    marginTop: 50,
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -8,
  },
  balanceRed: {
    fontSize: 50,
    marginTop: 10,
    color: 'red',
  },
  balanceGreen: {
    fontSize: 50,
    marginTop: 10,
    color: 'green',
  },
});
