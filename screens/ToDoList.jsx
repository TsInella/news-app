import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header'
import ListItem from '../components/ListItem';
import Form from '../components/Form'

export default function ToDoList() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Забрать кота с салона', key:'1'},
    {text: 'Купить кашу', key:'2'},
    {text: 'Выучить английский', key:'3'}

    
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        {text: text, key:Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return(
        list.filter(listOfItems => listOfItems.key != key)
      )
    })
  }
  return (
    <View>
      <Header/>
      <Form addHandler = {addHandler}/>
      <View>
        <FlatList 
        data = {listOfItems} 
        renderItem={({item}) => (
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})

