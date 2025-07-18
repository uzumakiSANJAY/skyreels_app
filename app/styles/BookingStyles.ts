import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    minWidth: 100,
  },
  submitButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  submitText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
});

export default styles;