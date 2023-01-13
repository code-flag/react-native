import {useIsFocused} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {FAB, Portal, Title} from 'react-native-paper';
import base from './styles/base';


const MyFriends = (props) => {
  const isScreenFocused = useIsFocused();
  const [fabIsOpen, setFabIsOpen] = useState(false);

  return (
    <View style={base.centered}>
      <Title>MyFriends</Title>
      <Portal>
        <FAB.Group
          visible={isScreenFocused}
          open={fabIsOpen}
          onStateChange={({open}) => setFabIsOpen(open)}
          icon={fabIsOpen ? 'close' : 'account-multiple'}
          actions={[
            {
              icon: 'plus',
              label: 'Add new friend',
              onPress: () => {},
            },
            {
              icon: 'file-export',
              label: 'Export friend list',
              onPress: () => {},
            },
          ]}
        />
      </Portal>
    </View>
  );
};
export default MyFriends;