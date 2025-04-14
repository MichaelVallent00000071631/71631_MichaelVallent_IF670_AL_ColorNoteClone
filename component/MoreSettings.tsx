import { Button, ScrollView, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MoreSettings = ({ navigation }) => {
  return (
    <>
    <ScrollView style={{ padding: 10 }}>
        <Text>
            Note color
        </Text>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}

            items={[
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
                { label: 'Cyan', value: 'cyan' },
                { label: 'Magenta', value: 'magenta' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'White', value: 'white' },
            ]} />
        <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </ScrollView>
    </>
  );
};

export default MoreSettings;