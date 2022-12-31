import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, SafeAreaView, Button, TextInput, Image, View, TouchableWithoutFeedback } from 'react-native';

export default function Form( { addHandler }) {
    const [text, setValue] = useState(''); 
   
    const onChange = (text) => {
         setValue(text);

   };


  return (
   <View> 
       <TextInput style={styles.input} onChangeText={onChange} placeholder='Впиши задачу'></TextInput>
       <View width='60%' marginHorizontal='20%'>
        <Button title='Добавить задачу' onPress={() => addHandler(text)} />
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginHorizontal: '20%',
    marginVertical: 40,
    width: '60%',
  }, 
  button: {
    width: 300,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    color:'red',
    marginHorizontal: '20%',

  }
});