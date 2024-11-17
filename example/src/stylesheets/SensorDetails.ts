import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    maxHeight: '80%',
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0ebd8',
    backgroundColor: '#748cab',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    gap: 10,
    overflow: 'hidden',
  },
  title: {
    width: '100%',
    backgroundColor: '#1d2d44',
    borderBottomColor: '#f0ebd8',
    borderBottomWidth: 2,
    padding: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sensorsContainer: {
    marginHorizontal: 1,
    flexGrow: 1,
    gap: 5,
  },
  sensorEntry: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1d2d44',
    borderWidth: 2,
    borderColor: '#f0ebd8',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sensorEntryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
