import React, { useState } from 'react';
import {Text, View, Button, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

//для тудулиста
const CustomButton = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default function Form({ addHandler }) {
    const [text, setValue] = useState('');
  
    const onchange = (text) => {
      setValue(text);
    };
  
    return (
      <ImageBackground source={require('../assets/backimg1.jpg' )} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onchange}

        />
        <CustomButton title='Добавить' onPress={() => addHandler(text)} />
      </View>
    </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
height:'35%'
    },
      background: {
          resizeMode: 'cover',
          justifyContent: 'center',
        },
        
    input: {
      borderBottomWidth: 3,
      color: 'black',
      fontWeight: 'bold',
      borderColor: '#344e41',
      bottom: 20,
      marginVertical: 20,
      marginHorizontal: '20%',
      width: '60%',
    },
    button: {
      backgroundColor: '#344e41',
      padding: 10,
      bottom: 15,
      width:'50%',
      marginLeft: 90,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
      boxShadow: '0 5px 15px 0 rgba(11, 99, 246, 1)',
      transition: '0.5s',
    },
    buttonText: {
      color: '#fff',
    },
  })

