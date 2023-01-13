import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import AppHeader from './app-bar';
import CardSwiper from '../components/molecules/card-swiper';
import MyComponent from '../components/molecules/list-item';
import HomeScreen from '../screens/home';
import AlbumScreen from '../screens/album';
import AppModal from '../components/molecules/modal';
import { Image } from 'react-native';
import CounterScreen from '../screens/story-2'

const HomeRoute = () =>{
  return (
    <>
    <AppHeader title="Home"/>
    <HomeScreen />
    </>
  )
} 

const AlbumsRoute = () => {
  return (
    <>
    <AppHeader title="Album"/>
    <AlbumScreen />
    </>
  )
}  

const ChatRoute = () =>{
  return (
    <>
    <AppHeader title="Chat" />
    <AppModal />
    </>
  )
}  ;

const StoryRoute = () => <CounterScreen />;

const AppBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' , unfocusedIcon: 'card-outline'},
    { key: 'chat', title: 'Chats', focusedIcon: 'chat' , unfocusedIcon: 'chat-outline'},
    { key: 'story', title: 'Stories', focusedIcon: 'camera', unfocusedIcon: 'camera-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    chat: ChatRoute,
    story: StoryRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default AppBottomNavigation;