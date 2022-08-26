import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

import ChatList from './ChatList';

const UserChatButton = ({navigation, user, message, Date, id}) => {
  return (
    <Pressable
      style={styles.Pressable}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Message', {
          itemId: id,
          otherParam: 'anything you want here',
        });
      }}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={{
                uri: user.imageUrl,
              }}
            />
            <View style={styles.column}>
              <Text style={styles.nickname}>{`${user.nickname}`}</Text>
              <Text style={styles.lastMessage}>{`${message}`}</Text>
            </View>
          </View>
          <Text style={styles.date}>{Date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const Chats = ({navigation}) => {
  return (
    <View style={styles.view13}>
      <UserChatButton
        user={{
          nickname:
            ChatList[0].sender.firstName + ' ' + ChatList[0].sender.lastName,
          imageUrl: ChatList[0].sender.profileImage,
        }}
        navigation={navigation}
        id={0}
        Date={ChatList[0].messages[ChatList[0].messages.length - 1].date}
        message={ChatList[0].messages[ChatList[0].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            ChatList[1].sender.firstName + ' ' + ChatList[1].sender.lastName,
          imageUrl: ChatList[1].sender.profileImage,
        }}
        navigation={navigation}
        id={1}
        Date={ChatList[1].messages[ChatList[1].messages.length - 1].date}
        message={ChatList[1].messages[ChatList[1].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            ChatList[2].sender.firstName + ' ' + ChatList[2].sender.lastName,
          imageUrl: ChatList[2].sender.profileImage,
        }}
        navigation={navigation}
        id={2}
        Date={ChatList[2].messages[ChatList[2].messages.length - 1].date}
        message={ChatList[2].messages[ChatList[2].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            ChatList[3].sender.firstName + ' ' + ChatList[3].sender.lastName,
          imageUrl: ChatList[3].sender.profileImage,
        }}
        navigation={navigation}
        id={3}
        Date={ChatList[3].messages[ChatList[3].messages.length - 1].date}
        message={ChatList[3].messages[ChatList[3].messages.length - 1].text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Pressable: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  view: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 18,
    paddingLeft: 18,
    marginHorizontal: 2,
    justifyContent: 'space-between',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  row2: {
    paddingLeft: 12,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  image: {
    alignSelf: 'center',
    width: 37,
    height: 37,
    borderRadius: 32,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 8,
  },
  nickname: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
  lastMessage: {
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 14,
    color: 'gray',
  },
  view13: {
    fontWeight: '600',
    fontSize: 19,
    backgroundColor: 'black',
  },
  date: {fontSize: 11, marginRight: 16, color: 'gray', alignSelf: 'center'},
});

export default Chats;
