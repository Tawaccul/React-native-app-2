import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TouchableHighlight, Image, View } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
   


  return (
   <TouchableHighlight onPress={() => deleteHandler(el.key) }> 
       <Text style={styles.text}>{el.text}</Text>
    
   </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
   text: {
     padding: 10,
     textAlign: 'center',
     borderRadius: 5,
     backgroundColor: '#fafafa',
     borderWidth: 1, 
     marginTop: 10,
     width: '60%',
     marginLeft: '20%', 
   }
});