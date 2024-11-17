import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#748cab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '100%',
    flexGrow: 1,
    marginTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#1d2d44',
    borderRadius: 10,
    alignItems: 'center',
    gap: 20,
  },
  statusContainer: {
    width: 125,
    height: 125,
    borderRadius: '50%',
    backgroundColor: '#748cab',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#f0ebd8',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  errorContainer: {
    width: '95%',
    padding: 10,
    backgroundColor: '#e76f51',
    alignItems: 'center',
    borderRadius: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
