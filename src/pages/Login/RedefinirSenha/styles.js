import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  body: {
    flex: 1,
    width: '100%',
    marginTop: '-8%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleContainer: {
    height: '15%',
    justifyContent: 'center'
  },
  title: {
    marginTop: 40,
    fontSize: 30,
    color: 'black',
    justifyContent: 'center',
  },
  inputContainer: {
    height: '40%',
    justifyContent: 'space-evenly',
  },
  input: {
    marginTop: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 200,
    fontSize: 23
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonBack: {
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 50
  },
  esqueciSenha: {
    marginTop: 10,
    width: '100%',
  },
  esqueciSenhaText: {
    textDecorationLine: 'underline',
  },
  buttonLogin: {
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 50
  },
  buttonText: {
      fontSize: 25,
      color: '#fff',
  },
  warningText: {
    fontSize: 16,
    width: 300,
    color: 'red',
    textAlign: 'center',
    marginTop: 100
  }
});

export default styles;