import { View, Text } from 'react-native';
import Styles from '../stylesheets/SensorDetails';

const SensorDetails = ({ temperature }: { temperature: number | null }) => {
  return (
    <View style={Styles.rootContainer}>
      <Text style={Styles.title}>Sensor Details</Text>
      <View style={Styles.sensorsContainer}>
        <View style={Styles.sensorEntry}>
          <Text style={Styles.sensorEntryText}>Temperature</Text>
          <Text style={Styles.sensorEntryText}>
            {temperature ? `${temperature}°C` : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SensorDetails;
