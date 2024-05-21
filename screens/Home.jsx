import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Alert,
  Text,
  View, 
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl } from 'react-native';
  
import { Post } from '../components/Post';
import axios from 'axios';

export const HomeScreen = ({navigation}) => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPosts = () => {
    setIsLoading(true);

    axios
      .get('https://66461b6051e227f23aadcf46.mockapi.io/users')
      .then(({data}) => {
      setItems(data);
    })

      .catch((err) =>{
      console.log(err);
      Alert.alert('Ошибка','Не удалось получить статьи')
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  React.useEffect(fetchPosts, []);

  if(isLoading){
    return(
       <View 
       style = {{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(237, 237, 233)',
    }}>
      <ActivityIndicator size = "large"/>
      <Text style = {{marginTop:15 }}>Загрузка...</Text>
    </View>
    );
  }

  return (
    <View style = {{backgroundColor: 'rgb(237, 237, 233)'}}>
      <FlatList
      refreshControl={<RefreshControl refreshing={isLoading}  onRefresh={fetchPosts} />}
        data = {items}
        renderItem = {({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
            <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
          </TouchableOpacity>
        )}
        
      />
    </View>
  );
};

