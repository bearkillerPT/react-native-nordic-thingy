import { BleManager, Device } from 'react-native-ble-plx';
import { parseTemperatureData } from './SensorDataParser';
import { PermissionsAndroid, Platform, type Permission } from 'react-native';

const bleManager = new BleManager();

export const requestPermissions = async () => {
  const permissions: Permission[] = [];

  if (Platform.OS === 'android') {
    if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN)
      permissions.push(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);
    if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT)
      permissions.push(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);

    return await PermissionsAndroid.requestMultiple(permissions);
  }
  return [];
};

// Function to start scanning, connect to the device, and subscribe to the temperature notifications
export async function connectToDeviceAndMonitorSensors(
  deviceId: string,
  temperatureCallback: (value: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Start scanning for devices
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        reject(error);
        return;
      }

      // Once the device is found, check if it matches the provided deviceId
      if (device && device.id === deviceId) {
        console.log(`Found device: ${device.name}`);

        // Stop scanning once the device is found
        bleManager.stopDeviceScan();

        // Proceed to connect to the device
        device
          .connect()
          .then((connectedDevice) => {
            console.log(`Connected to device: ${connectedDevice.name}`);

            // Discover all services and characteristics
            return connectedDevice.discoverAllServicesAndCharacteristics();
          })
          .then((connectedDevice) => {
            console.log(
              `Discovered all services and characteristics for ${connectedDevice.name}`
            );

            // Subscribe to the temperature notifications by characteristic UUIDs
            subscribeToTemperatureNotifications(
              connectedDevice,
              temperatureCallback
            )
              .then(() => {
                resolve(); // Successfully subscribed
              })
              .catch((err) => {
                reject(err); // Error subscribing to notifications
              });
          })
          .catch((connError) => {
            reject(`Failed to connect to device: ${connError.message}`);
          });
      }
    });
  });
}

// Helper function to subscribe to temperature notifications from the specified characteristic UUIDs
function subscribeToTemperatureNotifications(
  device: Device,
  callback: (value: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    const serviceUUID = 'EF680200-9B35-4933-9B10-52FFA9740042';
    const characteristicUUID = 'EF680201-9B35-4933-9B10-52FFA9740042';

    // Monitor the characteristic for notifications
    device.monitorCharacteristicForService(
      serviceUUID,
      characteristicUUID,
      (error, characteristic) => {
        if (error) {
          reject(`Error monitoring characteristic: ${error.message}`);
          return;
        }

        if (characteristic) {
          // Here, you can parse the value of the characteristic
          callback(parseTemperatureData(characteristic.value ?? '0'));
        }
      }
    );

    // Resolve the promise once the subscription is successful
    resolve();
  });
}

// Function to stop the scan (used when it's not needed anymore)
export function stopScan(): void {
  bleManager.stopDeviceScan();
  console.log('Stopped scanning for devices');
}

export const startScanAndFindDeviceId = async (
  deviceName: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      console.log(error, device?.id, device?.name);
      if (error) {
        reject(error);
        return;
      }

      if (device && device.name === deviceName) {
        console.log(`Found device: ${device.name}`);
        resolve(device.id);
      }
    });
  });
};
