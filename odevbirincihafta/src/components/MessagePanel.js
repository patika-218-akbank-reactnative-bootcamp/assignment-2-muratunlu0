import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView, Button, View, Text, StyleSheet} from 'react-native';
// import TopBar from './TopBarMessage';
// import ChatList from './ChatList';

function MessagePanel({route, navigation}) {
  /* 2. Get the param */
  // const {itemId} = route.params;
  // const {otherParam} = route.params;
  return (
    <View>
      {/* <TopBar
        Nickname={
          ChatList[0].sender.firstName + ' ' + ChatList[0].sender.lastName
        }
      /> */}
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'black',
    //   }}>
    //   <Text>Details Screen</Text>
    //   <Text>itemId: {JSON.stringify(itemId)}</Text>
    //   <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
  );
}

export default MessagePanel;
