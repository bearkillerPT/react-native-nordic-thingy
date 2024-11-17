import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from './stylesheets/App';
import { useThingySensors } from 'react-native-nordic-thingy';
import SensorDetails from './components/SensorDetails';

const deviceName = 'Sala';

const MyThingyDeviceComponent: React.FC = () => {
  const { sensorData, isConnected, error } = useThingySensors(deviceName);
  //const { sensorData, isConnected, error } = {
  //  isConnected: true,
  //  error: null,
  //  sensorData: {
  //    temperature: 20,
  //    humidity: 20,
  //    pressure: 20,
  //    batteryLevel: 20,
  //  },
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
            <SensorDetails sensorData={sensorData} />
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
