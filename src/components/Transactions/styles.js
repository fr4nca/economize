import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
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
