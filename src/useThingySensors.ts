import { useState, useEffect } from 'react';
import { connectToDeviceAndMonitorSensors, stopScan } from './BLEManager'; // Assuming these functions are in your BLEManager.ts

// Custom hook to handle the Thingy device's sensor data (e.g., temperature)
export function useThingySensors(deviceId: string | null) {
  const [temperature, setTemperature] = useState<number | null>(null); // Store the temperature value
  const [isConnected, setIsConnected] = useState<boolean>(false); // Store the connection status
  const [error, setError] = useState<string | null>(null); // Store any errors that occur during connection or subscription

  useEffect(() => {
    // If deviceId is null, there's nothing to do
    if (!deviceId) return;

    // Function to connect and start monitoring the device
    const monitorDevice = async () => {
      try {
        // Call the BLEManager to connect and start monitoring
        await connectToDeviceAndMonitorSensors(deviceId, (value: number) => {
          setTemperature(value); // Update the temperature value when data arrives
        });

        setIsConnected(true); // Set connection status to true when connected successfully
      } catch (err) {
        setError(`Failed to connect or monitor sensors: ${err}`); // Set error state if anything goes wrong
      }
    };

    // Start monitoring the device if the deviceId is provided
    monitorDevice();

    // Cleanup function to stop scanning and disconnect
    return () => {
      stopScan(); // Stop scanning if necessary when the component unmounts
      setIsConnected(false); // Reset connection status on unmount
      setTemperature(null); // Optionally clear temperature data when the component unmounts
    };
  }, [deviceId]); // Re-run the effect if the deviceId changes

  return {
    temperature,
    isConnected,
    error,
  };
}
