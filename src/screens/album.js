import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import CardSwiper from '../components/molecules/card-swiper';

const AlbumScreen = ({ navigation }) => {
  const image = {uri : '../assets/images/car.png'};
  return (
    <>
      <ImageBackground source={require('../assets/images/logo.jpg')} resizeMode="cover" style={{width: '100%', height: '100%',  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View >
      <CardSwiper />
      </View>
      </ImageBackground>
    </>
  );
}

export default AlbumScreen;