import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('screen');
import { useRef } from 'react';
import { DotIndicator } from 'react-native-indicators';

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "1",
    "title": "Информация и действие в одном приложении",
    "description": "Достижение целей стало проще с нашим приложением для саморазвития",
    "image": "https://cdn-icons-png.freepik.com/512/6858/6858360.png?ga=GA1.1.863853503.1716414990"
  },
  {
    "key": "2",
    "title": "Инсайты для лучшей версии тебя",
    "description": "Саморазвитие с легкостью: статьи и задачи в одном месте",
    "image": "https://cdn-icons-png.freepik.com/512/6858/6858255.png?ga=GA1.1.863853503.1716414990"
  },
  {
    "key": "3",
    "title": "Улучши себя шаг за шагом",
    "description": "Трансформируй свою жизнь с нашим приложением!",
    "image": "https://cdn-icons-png.freepik.com/512/860/860511.png?ga=GA1.1.863853503.1716414990"
  },
  {
    "key": "4",
    "title": "Статьи, которые вдохновляют. Список дел, который помогает",
    "description": "Путь к лучшей жизни начинается здесь.",
    "image": "https://cdn-icons-png.freepik.com/512/1324/1324895.png"
  }
]

const Indicator = ({scrollX}) =>{
    
    return <View style ={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
        {DATA.map((_, i) => {
            const inputRange = [(i-1) *width, i* width, (i + 1)* width ]
            const scale = scrollX.interpolate({
                inputRange, 
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp' 
               })
               const opacity = scrollX.interpolate({
                inputRange, 
                outputRange: [0.5, 1, 0.8],
                extrapolate: 'clamp' 
               })
            return <Animated.View

            key = {`indicator-${i}`}
            style ={{height: 10, width:10, borderRadius:5, backgroundColor: '#333', margin:10, backgroundColor: '#fff', opacity, transform:[{scale,}]}}
            />
        })}
    </View>
}

const BackDrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
     inputRange: bgs.map((_, i) => i*width), 
     outputRange: bgs.map((bg) => bg)
    })
    return <Animated.View
    style ={[
        StyleSheet.absoluteFillObject,
        {
            backgroundColor,
            }]}/>
}
     
const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(Animated.divide(
    Animated.modulo(scrollX, width),
    new Animated.Value(width)
),1);

const rotate = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: ['35deg', '0deg', '35deg']
})
const translateX = YOLO.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [0, -height, 0]
})
   return <Animated.View 
     style = {{
        width: height,
        height: height, 
        backgroundColor: '#fff', 
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{
            rotate,
        },
        {
            translateX,
        }
        ,],
    }}
   />

}

export default function IntroCarousel({navigation}) {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const loadScene = () => {
        navigation.navigate('MainPage');
    }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX = {scrollX}/>
      <Square scrollX = {scrollX}/>
        <Animated.FlatList
        data = {DATA}
        keyExtractor = {item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset:{x: scrollX}}}],
            {useNativeDriver: false}
        )}
        contentContainerStyle ={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
            return(
            <View style = {{width, alignItems: 'center', padding: 20}}>
                <View style = {{flex: .7,  justifyContent: 'center'}}>
                <TouchableOpacity onPress={loadScene}>
                <Image 
                source={{uri: item.image}}
                style = {{width: width/2, height: width/2, resizeMode:'contain'}}/>
             </TouchableOpacity>
                
                </View>
                <View style ={{flex: .3}}>
                    <Text style ={{color: '#fff',fontWeight: '800', fontSize: 28, marginBottom: 10}}>{item.title}</Text>
                    <Text style = {{fontWeight: '300'}}>{item.description}</Text>


                </View>
            </View>
        )
        }}
        />
        <Indicator scrollX = {scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});