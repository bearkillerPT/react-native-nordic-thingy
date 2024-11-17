import { useState, useEffect, useRef } from 'react';
import {
  connectToDeviceAndMonitorSensors,
  requestPermissions,
  startScanAndFindDeviceId,
  stopScan,
} from './BLEManager'; // Assuming these functions are in your BLEManager.ts
import type { SupportedSensors } from './types';
import { NullSensorData } from './consts';
import type { Subscription } from 'react-native-ble-plx';

// Custom hook to handle the Thingy device's sensor data (e.g., temperature)
export function useThingySensors(deviceName: string) {
  const [isConnected, setIsConnected] = useState<boolean>(false); // Store the connection status
  const [error, setError] = useState<string | null>(null); // Store any errors that occur during connection or subscription
  const [sensorData, setSensorData] = useState<{
    [key in SupportedSensors]: number | null;
  }>(NullSensorData); // Store the sensor data
  const sensorSubscriptions = useRef<{
    [key in SupportedSensors]: Subscription | null;
  }>(NullSensorData);

  const setSpecificSensorData =
    (sensor: SupportedSensors) => (value: number) => {
      setSensorData((prevState) => ({ ...prevState, [sensor]: value }));
    };

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    // Function to connect and start monitoring the device
    const monitorDevice = async () => {
      try {
        const deviceId = await startScanAndFindDeviceId(deviceName);
        console.log('deviceId', deviceId);
        // Call the BLEManager to connect and start monitoring
        sensorSubscriptions.current = await connectToDeviceAndMonitorSensors(
          deviceId,
          {
            temperature: setSpecificSensorData('temperature'),
            humidity: setSpecificSensorData('humidity'),
            pressure: setSpecificSensorData('pressure'),
            batteryLevel: setSpecificSensorData('batteryLevel'),
          }
        );

        setIsConnected(true); // Set connection status to true when connected successfully
      } catch (err) {
        setError(`Failed to connect or monitor sensors: ${err}`); // Set error state if anything goes wrong
      }
    };

    // Start monitoring the device if the deviceName is provided
    monitorDevice();

    // Cleanup function to stop scanning and disconnect
    return () => {
      stopScan(); // Stop scanning if necessary when the component unmounts
      setIsConnected(false); // Reset connection status on unmount
      setSensorData(NullSensorData); // Reset sensor data on unmount
      Object.values(sensorSubscriptions.current).forEach((subscription) => {
        subscription?.remove(); // Remove subscriptions on unmount
      });
    };
  }, [deviceName]); // Re-run the effect if the device name changes

  return {
    sensorData,
    isConnected,
    error,
  };
}
