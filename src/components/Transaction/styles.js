import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: 100 + '%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginLeft: 'auto',
  },
});
