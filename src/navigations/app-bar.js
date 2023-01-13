import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const AppHeader = ({title}) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => {
    return (
      <View style={{backgroundColor: 'black', color: 'orange', width: '50%', height: '100%', padding: 10, right: 0, top: 0}}>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    )
  };

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} style={styles.title} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header : {
    backgroundColor: "#ece6ed"
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
})

export default AppHeader;