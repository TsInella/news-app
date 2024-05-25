import React, { useState } from 'react';
import {Text, View, Button, Image, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';

//для тудулиста
export default function Form({route}) {
  return(
    <View style = {styles.main}>
      <Image style = {styles.image} source={{uri: route.params.img}}/>
        <Text style = {[gStyle.title,styles.title]}> {route.params.name}</Text>
        <Text style = {styles.full}> {route.params.full}</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    backgroundColor: '#dad7cd',
    height: '100%'
  },
  image:{
    width: '100%',
    height: 200,
  },
  header:{
    fontSize: 25,
    marginTop: 10,
  },
  title:{
    fontFamily: 'p-bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop:15,
    fontWeight: 'bold',
    color: '#344e41'
},
  full:{
  fontFamily: 'p-bold',
  fontSize: 16,
  textAlign: 'center',
  marginTop:15,
  fontWeight: 'bold',
  color: '#5c6b64',
  
  }
})

