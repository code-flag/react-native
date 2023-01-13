import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    position: 'absolute',
                    resizeMode: 'cover',
                    zIndex: 10,
                    height: '100%',
                    width: '100%',
                    }}>
      <Image source={require('../assets/images/p1.jpg')} style={{
                    height: '100%',
                    width: '100%',
                    }}/>
      </View>
  
    </View>
  );
}

export default HomeScreen;