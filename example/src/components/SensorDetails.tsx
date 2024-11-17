import { View, Text, ScrollView } from 'react-native';
import Styles from '../stylesheets/SensorDetails';
import { SensorDataUnits } from 'react-native-nordic-thingy';
import type { SensorData } from 'react-native-nordic-thingy';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SensorDetails = ({ sensorData }: { sensorData: SensorData }) => {
  return (
    <View style={Styles.rootContainer}>
      <Text style={Styles.title}>Sensor Details</Text>
      <ScrollView style={Styles.sensorsContainer}>
        {Object.keys(sensorData).map((sensor) => {
          const sensorKey = sensor as keyof typeof sensorData;
          const sensorUnit = SensorDataUnits[sensorKey];
          return (
            <View style={Styles.sensorEntry} key={sensor}>
              <Text style={Styles.sensorEntryText}>{capitalize(sensor)}</Text>
              <Text style={Styles.sensorEntryText}>
                {sensorData[sensorKey]
                  ? `${sensorData[sensorKey]}${sensorUnit}`
                  : 'N/A'}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SensorDetails;
