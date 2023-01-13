import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, MD3Colors } from 'react-native-paper';
import AppAvatar from '../atoms/avatar';
import car from '../../assets/images/car.png'

const MyComponent = () => (
  <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" description="" left={() => <AppAvatar uri={car} style={styles.avatar}/>} />
    <Divider />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" style={styles.avatar} />}
    />
  </List.Section>
);

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "#f4ffff",
        borderRadius: '50%',
        padding: 10
    }
})

export default MyComponent;