import React from 'react';
import MainPage from './screens/MainPage'
import FullInfo from './screens/FullInfo'
import IntroCarousel from './screens/IntroCarousel';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ToDoList from './screens/ToDoList';

const Stack = createNativeStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name = 'Main'
            component = {MainPage}
            options = {
                {
                title: 'Главная страница',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#344e41',
                    height: '100',
                },
                headerTitleStyle:{
                    fontWeight:'400',
                    color: '#dad7cd'
                }
                 
                }
            }
            />
             <Stack.Screen
            name = 'FullInfo'
            component = {FullInfo}
            options = {
                {
                    
                title: 'Статьи',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#344e41',
                    height: '100',
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color: '#dad7cd'
                }
                }
                
            }
            />
        
            <Stack.Screen
            name = 'ToDoList'
            component = {ToDoList}
            options = {
                {
                title: 'ToDoList',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#344e41',
                    height: '100',
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color: '#dad7cd'
                }
                }   
            }
            />
            <Stack.Screen
            name = 'IntroCarousel'
            component = {IntroCarousel}
            options = {
                {
                
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#344e41',
                    height: '100',
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color: '#dad7cd'
                }
                }   
            }
            />
        </Stack.Navigator>
    </NavigationContainer>;
}