import React from 'react';
import { View, Text } from 'react-native';
import useThingySensors from 'react-native-nordic-thingy';

const MyThingyDeviceComponent: React.FC = () => {
  const { temperature, isConnected, error } = useThingySensors('Sala');

  return (
    <View>
      {error && <Text>Error: {error}</Text>}

      {isConnected ? (
        <View>
          <Text>Connected to Thingy device!</Text>
          {temperature !== null ? (
            <Text>Temperature: {temperature}°C</Text>
          ) : (
            <Text>Waiting for temperature data...</Text>
          )}
        </View>
      ) : (
        <Text>Connecting...</Text>
      )}
    </View>
  );
};

export default MyThingyDeviceComponent;
