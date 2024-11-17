# react-native-nordic-thingy

This library is a WIP!
Remember, you NEED a developmenc client to run the expo exmaple app / to integrate this library into your project. Even though this library is written purely in javascript, it uses react-native-ble-plx to manage the BLE connection and data collection. Make sure to read their short installation guide before you start on your own application (you'll need to add permissions and their plugin to app.json).
The list of supported sensors is currently limited to:
- temperature
- humidity
- pressure
- batteryLevel

## Installation

Right now this library is not published to NPM, so you'll have to install it from source.

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
import { useThingySensors } from 'react-native-nordic-thingy';

// ...
const { sensorData, isConnected, error } = useThingySensors('DeviceName');
```

## TODO

- [ ] Add more sensors and data parsers
- [ ] Add more documentation
- [ ] Resaerch about background mode
- [ ] Resaerch about other nordic devices

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

GLWTS(Good Luck With That Shit)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
