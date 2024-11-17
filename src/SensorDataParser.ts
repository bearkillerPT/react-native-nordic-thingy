import type { Base64 } from 'react-native-ble-plx';
import { Buffer } from 'buffer';

export const parseTemperatureData = (data: Base64): number => {
  // The integer part of the Temperature is in the first byte and is an int
  // The decimal part of the Temperature is in the second byte and is an unsigned int
  const tempBytes = Buffer.from(data, 'base64');
  const integerPart = tempBytes.readInt8(0);
  const decimalPart = tempBytes.readUInt8(1);
  return integerPart + decimalPart / 100;
};

export const parseHumidity = (data: Base64) => {
  // Humidity is an unsigned int measured in hPa
  const tempBytes = Buffer.from(data, 'base64');
  return tempBytes.readUInt8(0);
};

export const parsePressure = (data: Base64) => {
  // The integer part of the Pressure is in the first 4 byte and is an int32
  // The decimal part of the Pressure is in the fifth byte and is an unsigned int
  const tempBytes = Buffer.from(data, 'base64');
  const integerPart = tempBytes.readInt32LE(0);
  const decimalPart = tempBytes.readUInt8(4);
  return integerPart + decimalPart / 10;
};

export const parseBatteryLevel = (data: Base64) => {
  // Battery level is an unsigned int measured in percentage
  const tempBytes = Buffer.from(data, 'base64');
  return tempBytes.readInt8(0);
};
