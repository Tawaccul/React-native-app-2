import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { gStyle } from './styles/style.js';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MainStack from './navigate';
import FullInfo from './components/FullInfo.js';

const fonts = () => Font.loadAsync({
   'Gt-med': require('./assets/fonts/GTWalsheimPro-Medium.ttf'),
   'bellota': require('./assets/fonts/BellotaText-Regular.ttf')
});

export default function App() {
  
  const [font, setFont] = useState(false);
  if(font) {
    return (
      <MainStack />
    );
  }else {
    return(
      <AppLoading 
      startAsync={ fonts } 
      onFinish={ () => setFont(true) } 
      onError={ console.warn }
      />
    );
  }
}
const styles = StyleSheet.create({
  
});
