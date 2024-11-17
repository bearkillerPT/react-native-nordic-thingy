export type SupportedSensors =
  | 'temperature'
  | 'humidity'
  | 'pressure'
  | 'batteryLevel';

export type SensorData = {
  [key in SupportedSensors]: number | null;
};
