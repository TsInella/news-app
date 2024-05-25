
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import { gStyle } from '../styles/style';
//для статей форма заполнения
export default function FormList({ addArticle }) {
  return (
   <>
   
    <View>
      <Formik
        initialValues={{ name: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          console.log(values);
          addArticle(values);
          action.resetForm();
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Введите название!';
          }
          if (!values.anons) {
            errors.anons = 'Введите анонс!';
          }
          if (!values.full) {
            errors.full = 'Напишите статью!';
          }
          if (!values.img) {
            errors.img = 'Добавьте изображение!';
          }
          return errors;
        }}
      >
        {(props) => (
          <View style = {styles.main}>
            <TextInput
              value={props.values.name}
              style={styles.input}
              placeholder='Введите название'
              onChangeText={props.handleChange('name')}
            />
            <Text style={styles.errorText}>{props.errors.name}</Text>
            <TextInput
              value={props.values.anons}
              style={styles.input}
              placeholder='Введите анонс'
              onChangeText={props.handleChange('anons')}
            />
            <Text style={styles.errorText}>{props.errors.anons}</Text>
            <TextInput
              value={props.values.full}
              style={styles.inputArticle}
              placeholder='Напишите что-нибудь'
              multiline
              onChangeText={props.handleChange('full')}
            />
            <Text style={styles.errorText}>{props.errors.full}</Text>
            <TextInput
              value={props.values.img}
              style={styles.input}
              placeholder='Добавьте ссылку на изображение'
              onChangeText={props.handleChange('img')}
            />
            <Text style={styles.errorText}>{props.errors.img}</Text>
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Добавить</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    
  },
  main:{
    marginTop:10
  },
  input: {
    borderWidth: 2,
    padding: 5,
    height:'9%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: '#e0e1dd',
    borderRadius: 7,
    backgroundColor: '#dad7cd',
    marginTop: 5,
    fontStyle: 'p-bold'
  },
  inputArticle:{
    borderWidth: 2,
    padding: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: '#e0e1dd',
    borderRadius: 7,
    backgroundColor: '#dad7cd',
    marginTop: 4,
    fontStyle: 'p-bold'
  },
  button: {
    width:'60%',
    marginTop: 10,
    marginLeft: 62,
    backgroundColor: '#a3b18a',
    padding: 10,
    shadowColor: '#253224',
    shadowOffset: { width: 15, height: 17 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'p-bold',
    fontSize:16
  },
  errorText: {
    color: '#e76f51',
    marginBottom: 5
  }
});