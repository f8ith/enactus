import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Button, Incubator, DateTimePicker } from 'react-native-ui-lib';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const { TextField } = Incubator

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <TextField flex text60 placeholder={'Event title'} floatingPlaceholder maxLength={30} />
      <TextField flex placeholder={'Event description'} floatingPlaceholder maxLength={30} style={{ marginBottom: 10 }} />
      <TextField flex placeholder={'Meetup location'} floatingPlaceholder maxLength={30} />
      <DateTimePicker
        // @ts-expect-error
        containerStyle={{ marginVertical: 20 }}
        title={'Date'}
        placeholder={'Select a date'}
        dateFormat={'MMM D, YYYY'}
      />
      <DateTimePicker
        mode={'time'}
        // @ts-expect-error
        title={'Time'}
        placeholder={'Select time'}
      />
      <Button
        style={{ marginRight: 10, height: 50 }}
        text60
        label="Create event"
        size={Button.sizes.medium}
        backgroundColor="#ff5050"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
