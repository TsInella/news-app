import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground  } from 'react-native';

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
    <ImageBackground source={require('../assets/translucent-image.png' )} style={styles.background}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onchange}
        placeholder='Твоя задача на сегодня?'
        placeholderTextColor='black'
      />
      <CustomButton title='Add' onPress={() => addHandler(text)} />
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      
  input: {
    borderBottomWidth: 3,
    color: 'white',
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
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
});