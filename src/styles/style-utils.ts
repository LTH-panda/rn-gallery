import {StyleSheet} from 'react-native';

const styleUtils = StyleSheet.create({
  bgWhite: {
    backgroundColor: '#fff',
  },
  fullScreen: {
    flex: 1,
  },
  h1: {
    fontFamily: 'Jalnan',
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
  ftWhite: {
    color: '#fff',
  },
  mgBot: {
    marginBottom: 40,
  },
  mgTop: {
    marginTop: 40,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styleUtils;
