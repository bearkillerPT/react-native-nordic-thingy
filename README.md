# React Native Nordic Thingy  

This library is a WIP!
Remember, you NEED a developmenc client to run the expo exmaple app / to integrate this library into your project. Even though this library is written purely in javascript, it uses react-native-ble-plx to manage the BLE connection and data collection. Make sure to read their short installation guide before you start on your own application (you'll need to add permissions and their plugin to app.json).
The list of supported sensors is currently limited to:
- Temperature;
- Humidity;
- Pressure;
- Battery Level.

## Installation

This library hasn't yet been published to NPM yet, so you'll have to install it from source.

### NPM

```bash
npm install react-native-nordic-thingy@https://github.com/bearkillerPT/react-native-nordic-thingy
```

### Yarn

```bash
yarn add react-native-nordic-thingy@https://github.com/bearkillerPT/react-native-nordic-thingy
```

## Usage

```js
import { useThingySensors, SensorDataUnits } from 'react-native-nordic-thingy';

// ...
const { sensorData, isConnected, error } = useThingySensors('DeviceName');
```

## Documentation
### useThingySensors
The `useThingySensors` hook returns an object with the following properties:

- `sensorData`: An object containing the sensor data;
- `isConnected`: A boolean indicating whether the device is connected to the BLE manager;
- `error`: A string containing any error message that occurred during the connection or data collection process.

### SensorDataUnits
The `SensorDataUnits` object contains the units for each sensor.

### type SupportedSensors
The `SupportedSensors` type is a union of the supported sensors.

### type SensorData
The `SensorData` type is an object in which the keys are the supported sensors and the values are numbers or `null`.


## TODO

- [ ] Add more sensors and data parsers
- [ ] Add more documentation
- [ ] Research about background mode
- [ ] Research about other nordic devices

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

GLWTS(Good Luck With That Shit)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
