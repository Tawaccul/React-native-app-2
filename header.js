import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, View } from 'react-native';

export default function Header() {
   


  return (
   <View style={styles.main}> 
       <Text style={styles.text}> Список дел</Text>
    
   </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50, 
    height: 100,
    backgroundColor: '#000',
  }, 
  text: {
    fontSize: 18,
    color: 'red', 
    fontWeight: 'bold',
    textAlign: 'center',
  }
});