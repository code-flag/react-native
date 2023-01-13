
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppBottomNavigation from './src/navigations/bottom-nav';
import { Provider as ReduxProvider} from 'react-redux';
import configureStore from './src/stores/configure-store';

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
    <PaperProvider>   
        <AppBottomNavigation />
      <StatusBar style='auto' />
    </PaperProvider>
    </ReduxProvider>
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
