# react-native-nordic-thingy
This library is a WIP! For now I've a working example with a simple hook that connects to a Nordic Thingy device and monitors its temperature but I plan to add most other sensors! I also intend to check if it's possible to target other nordic devices other than the one I have (the Thingy 52).
Remember, you NEED a developmenc client to run the expo exmaple app. Even though this library doesn't include any native code, it uses react-native-ble-plx to manage the BLE connection and monitoring. Make sure to read their short installation guide before you start on your own application (you need to add the plugin to app.json).

## Installation
Right now this library is not published to NPM, so you'll have to install it from source.

## Usage
```js
import useThingySensors from 'react-native-nordic-thingy';

// ...
const { temperature, isConnected, error } = useThingySensors('DeviceName');
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
