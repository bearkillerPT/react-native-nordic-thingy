import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from './stylesheets/App';
import useThingySensors from 'react-native-nordic-thingy';
import SensorDetails from './components/SensorDetails';

const deviceName = 'Sala';

const MyThingyDeviceComponent: React.FC = () => {
  const { temperature, isConnected, error } = useThingySensors(deviceName);
  //const { temperature, isConnected, error } = {
  //  temperature: null,
  //  isConnected: false,
  //  error: null,
  //};
  return (
    <>
      <StatusBar />
      <View style={Styles.rootContainer}>
        <View style={Styles.contentContainer}>
          <View
            style={[
              Styles.statusContainer,
              {
                backgroundColor: isConnected ? '#008000' : '#e76f51',
              },
            ]}
          >
            <Text style={Styles.statusText}>
              {isConnected ? 'Connected!' : 'Not connected'}
            </Text>
          </View>
          {!!error && (
            <View style={Styles.errorContainer}>
              <Text style={Styles.errorText}>{error}</Text>
            </View>
          )}
          {isConnected ? (
            <SensorDetails temperature={temperature} />
          ) : (
            <>
              <ActivityIndicator size="large" color="#f0ebd8" />
              <Text style={Styles.infoText}>
                Trying to connect to a Thingy with name: {deviceName}
              </Text>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default MyThingyDeviceComponent;
