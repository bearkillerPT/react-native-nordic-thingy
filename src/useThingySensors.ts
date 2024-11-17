import { useState, useEffect } from 'react';
import {
  connectToDeviceAndMonitorSensors,
  requestPermissions,
  startScanAndFindDeviceId,
  stopScan,
} from './BLEManager'; // Assuming these functions are in your BLEManager.ts

// Custom hook to handle the Thingy device's sensor data (e.g., temperature)
export function useThingySensors(deviceName: string) {
  const [temperature, setTemperature] = useState<number | null>(null); // Store the temperature value
  const [isConnected, setIsConnected] = useState<boolean>(false); // Store the connection status
  const [error, setError] = useState<string | null>(null); // Store any errors that occur during connection or subscription

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
        await connectToDeviceAndMonitorSensors(deviceId, (value: number) => {
          setTemperature(value); // Update the temperature value when data arrives
        });

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
      setTemperature(null); // Optionally clear temperature data when the component unmounts
    };
  }, [deviceName]); // Re-run the effect if the device name changes

  return {
    temperature,
    isConnected,
    error,
  };
}
