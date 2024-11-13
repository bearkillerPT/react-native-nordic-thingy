import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-nordic-thingy' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// Check if the native module is linked and available, or throw an error if not
const NordicThingy = NativeModules.NordicThingy
  ? NativeModules.NordicThingy
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );