import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useThingySensors } from '../src/useThingySensors';

const MyThingyDeviceComponent: React.FC = () => {
  const [deviceId, setDeviceId] = useState<string | null>('sala'); // Set the deviceId to 'sala' for testing
  const { temperature, isConnected, error } = useThingySensors(deviceId);

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

      <Button title="Reconnect" onPress={() => setDeviceId('NEW_DEVICE_ID')} />
    </View>
  );
};

export default MyThingyDeviceComponent;
