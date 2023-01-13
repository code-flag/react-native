import * as React from 'react';
import { Avatar } from 'react-native-paper';

const AppAvatar = ({uri}) => (
    <Avatar.Image size={30} source={uri} />
);
  export default AppAvatar

//   '../assets/avatar.png'