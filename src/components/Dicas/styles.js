import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
    borderRadius: 50,
    backgroundColor: '#7159c1',
    padding: 8,
  },
  buttonText: {
    color: '#fff',
  },
  closeButton: {
    color: '#7159c1',
  },
  textInput: {
    borderColor: '#7159c1',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  container: {
    padding: -30,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginLeft: 10,
  },
});
