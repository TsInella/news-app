import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style = {styles.main}>
        <Text style = {styles.text}>Список дел</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        paddingTop:50,
        height:100,
        backgroundColor: '#3a5a40'
    },
    text:{
        fontSize:16,
        color: 'white',
        fontStyle:'bold',
        textAlign: 'center'
    }
})

