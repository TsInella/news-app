import React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components/native';
import axios from 'axios';
import { Loading } from "../components/Loading";


const PostImage = styled.Image`
width:100%;
height:230px;
border-radius:12px;
margin-top: 40px;
`;

const PostText = styled.Text`
font-size: 16px;
font-weight: 500;
line-height: 24px;
`;


const FullPostScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();
    const {id, title} = route.params;
    
  React.useEffect(()=>{
    navigation.setOptions({
      title,
    })
    axios
    .get('https://66461b6051e227f23aadcf46.mockapi.io/users/'+ id)
    .then(({data}) => {
      setData(data)
    }).catch(err =>{
      console.log(err);
      Alert.alert('Ошибка','Не удалось получить статью')
    }).finally(() => {
      setIsLoading(false)
    })
  }, []);


  if(isLoading){
    return (
        <View style = {{flex:1, justifyContent:"center", alignItems:"center"}}>
           <Loading/>
        </View>
    )
  }

    return(
    <View style = {{padding:20, backgroundColor: 'rgb(182, 209, 217)', height: 720}}>
        <PostImage source = {{uri: data.imageUrl}}/>
         <PostText>{data.text}</PostText>
    </View>
    )
}

export default FullPostScreen; 