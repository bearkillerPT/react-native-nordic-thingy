import type { SupportedSensors } from './types';

export const ServicesAndCharacteristics: {
  [key in SupportedSensors]: {
    serviceUUID: string;
    characteristicUUID: string;
  };
} = {
  temperature: {
    serviceUUID: 'EF680200-9B35-4933-9B10-52FFA9740042',
    characteristicUUID: 'EF680201-9B35-4933-9B10-52FFA9740042',
  },
  humidity: {
    serviceUUID: 'EF680200-9B35-4933-9B10-52FFA9740042',
    characteristicUUID: 'EF680203-9B35-4933-9B10-52FFA9740042',
  },
  pressure: {
    serviceUUID: 'EF680200-9B35-4933-9B10-52FFA9740042',
    characteristicUUID: 'EF680202-9B35-4933-9B10-52FFA9740042',
  },
  batteryLevel: {
    serviceUUID: '0000180f-0000-1000-8000-00805f9b34fb',
    characteristicUUID: '00002a19-0000-1000-8000-00805f9b34fb',
  },
};

export const SensorDataUnits = {
  temperature: '°C',
  humidity: '%',
  pressure: 'hPa',
  batteryLevel: '%',
};

export const NullSensorData = {
  temperature: null,
  humidity: null,
  pressure: null,
  batteryLevel: null,
};
