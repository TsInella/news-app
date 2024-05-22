import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList } from 'react-native';

import ToDoList from './screens/ToDoList';

export default function App() {
  return (
    <View>
      <ToDoList/>
    </View>
    
  )
}

const styles = StyleSheet.create({

})

