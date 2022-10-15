import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Date Time Picker');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'windows')
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) +'/' + tempDate.getFullYear();
    let fTime_a;
    let fTime_b;
    if (tempDate.getHours() < 10) {
    fTime_a = `0${tempDate.getHours()}`
    } else {
    fTime_a = tempDate.getHours();
    }

    if (tempDate.getMinutes() < 10) {
    fTime_b = `0${tempDate.getMinutes()}`;
    } else {
    fTime_b = tempDate.getMinutes();
    }

    let fTime = 'Pukul  ' + fTime_a + ':' + fTime_b;
    setText (fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  const ShowMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 28, color:'#FFFFFF'}} > {text}</Text>
      <View style={{ margin: 28}}>
        <Button title='Kalender'  onPress={() => ShowMode('date')} />
      </View>
      <View style ={{ margin: 28}}>
        <Button title='Jam' onPress={() => ShowMode('time')} />
        </View>

        {show && (
          <DateTimePicker
            testID='DateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
        />)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
