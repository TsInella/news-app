import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet } from 'react-native';
 //лист айтем для туду листа (для удаления задачи)
export default function ListItem({el, deleteHandler}) {
  return (
    <TouchableHighlight onPress={() => deleteHandler(el.key)}>
        <Text style = {styles.text}>{el.text}</Text>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
    text:{
        padding:20,
        textAlign: 'center',
        backgroundColor:'#fafafa',
        borderRadius:5,
    }
})
