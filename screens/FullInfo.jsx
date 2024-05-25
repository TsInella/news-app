
import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.main}>
        <Image style={styles.image} source={{ uri: route.params.img }} />
        <Text style={[gStyle.title, styles.title]}> {route.params.name}</Text>
        <Text style={styles.full}> {route.params.full}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  main: {
    height: '100%',
    backgroundColor: '#dad7cd',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'p-bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    color: '#344e41',
  },
  full: {
    fontFamily: 'p-bold',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    color: '#5c6b64',
    width: '104.8%',
    whiteSpace: 'nowrap',
  overflow: 'hidden',
  overflow: 'ellipsis',
  }
});