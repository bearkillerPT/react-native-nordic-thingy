import type { Base64 } from "react-native-ble-plx";


export const parseTemperatureData = (data: Base64): number => {
    const tempBytes = Buffer.from(data, "base64");
    // The integer part of the Temperature is in the first byte and is an int
    // The decimal part of the Temperature is in the second byte and is an unsigned int
    const integerPart = tempBytes.readInt8(0);
    const decimalPart = tempBytes.readUInt8(1);
    return integerPart + decimalPart / 100;
}