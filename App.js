import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { gStyle } from './styles/style';
import MainPage from './navigate'


const fonts = () => Font.loadAsync({
  'p-light': require('./assets/fonts/Poppins-Light.ttf'),
  'p-bold': require('./assets/fonts/Poppins-Bold.ttf')

});
export default function App() {
const [font, setFont] = useState(false);

if(font){
  return(
    <MainPage/>
  )
} else{
  return(
    <AppLoading startAsync = {fonts} onFinish = {() => setFont(true)} onError={console.warn}/>
  )
}
}

//const styles = StyleSheet.create({

//})

