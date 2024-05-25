import React, { useState } from 'react';
import {Button, Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import FormList from '../components/FormList';

export default function MainPage({navigation}) {
    const [news, setNews] = useState([
        {name: 'Статья', anons: 'Wow', full: 'Article if cool', key: '1', img: 'https://img.freepik.com/free-vector/flat-illustration-of-person-being-shamed-or-blamed_23-2149329989.jpg?w=996&t=st=1716556914~exp=1716557514~hmac=8382b4ef0c565b631fb368be23336e260379d55feebcb265d3325560e012015b'},
        {name: 'Статья2', anons: 'Wow', full: 'Article if cool', key: '2', img: 'https://img.freepik.com/free-vector/self-confidenceconcept-illustration_114360-6475.jpg?w=740&t=st=1716556956~exp=1716557556~hmac=24196252ad4de1392cff2edca68629d2b65c5acce961ca402bd1629475f72f17'},
        {name: 'Статья3', anons: 'Wow', full: 'Article if cool', key: '3', img: 'https://img.freepik.com/free-vector/customer-behavior-concept-illustration_114360-7395.jpg?w=740&t=st=1716556974~exp=1716557574~hmac=53db45ea4174021cfd6787cb8add5b60e95f1767c9129f7a76c15d8bc857ea97'}

    ])

const [modalWindow, setModalWindow] = useState(false);

const addArticle = (article) => {
    setNews((list) => {
        article.key = Math.random().toString();
        return[
            article,
            ...list
        ]
    })
    setModalWindow(false)
}

  return(
    <View style = {gStyle.main}>
        <Modal visible = {modalWindow}>
            <View style = {gStyle.main}>
            <Ionicons name="close-circle-sharp" size={30} color="#2a4035" style = {styles.iconClose} onPress={() => setModalWindow(false)} />
            <Text style = {styles.title}>Форма добавления статьи</Text>
           <FormList addArticle = {addArticle}/>
            </View>
        </Modal>

        <View style={styles.iconContainer}>
        <Text style = {styles.titleIcon}>Добавить статью: </Text>
        <Ionicons name="add-circle" size={30} color="#588157" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
        <Text style = {styles.titleIcon}>ToDoList: </Text>
        <Ionicons name="square-sharp" size={30} color="#6b9c6a" style={styles.iconToDo} />
        </View>

        <Text style = {[styles.title, styles.header]}>Саморазвитие</Text>
        <FlatList 
        data = {news}
        renderItem={({item})=> (
            <TouchableOpacity style = {styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                <Image style = {styles.image}source = {{
                    uri: item.img
                }}/>
                <Text style = {gStyle.title}>{item.name}</Text>
                <Text style = {styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
        )
    }   
        />
    </View>
  )
}

const styles = StyleSheet.create({
    titleIcon:{
        fontFamily: 'p-bold',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#403d39',
        bottom: 5,
        marginRight: 15,
        right: 10
    },
    iconContainer: {
        flexDirection: 'row', // Расположение элементов в строку
        justifyContent: 'space-between', // Распределение пространства между элементами
        alignItems: 'center', // Выравнивание элементов по центру
        marginVertical: 2, // Вертикальный отступ
        paddingHorizontal: 30 // Горизонтальный отступ
      },
    iconToDo:{
        textAlign: 'center',
        marginBottom:10,
        right:20
    },
    iconAdd:{
        textAlign: 'center',
        marginBottom:10,
        right:20

    },
    iconClose:{
        textAlign: 'center',
        marginBottom:10,
    },
    image:{
        width: '100%',
        height: 200,
    },
    header:{
        marginBottom:10,
        
    },
    item:{
        width: '100%',
        marginBottom: 20,

    },
    title:{
        fontFamily: 'p-bold',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#344e41'
    },
    anons:{
        fontFamily: 'p-bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop:10,
        fontWeight: 'bold',
        color: '#5c6b64'
    }
    }
)


