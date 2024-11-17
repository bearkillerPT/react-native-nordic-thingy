# react-native-nordic-thingy
This library is a WIP! For now I've a working example with a simple hook that connects to a Nordic Thingy device and monitors its temperature but I plan to add most other sensors! I also intend to check if it's possible to target other nordic devices other than the one I have (the Thingy 52).

## Installation
### NPM
```sh
npm install react-native-nordic-thingy react-native-ble-plx
```
### Yarn
```sh
yarn add react-native-nordic-thingy react-native-ble-plx
```

## Usage


```js
import useThingySensors from 'react-native-nordic-thingy';

// ...
const { temperature, isConnected, error } = useThingySensors('DeviceName');
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

GLWTS(Good Luck With That Shit)

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
