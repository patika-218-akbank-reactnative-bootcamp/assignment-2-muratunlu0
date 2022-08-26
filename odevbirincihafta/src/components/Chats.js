import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

const chatList = [
  {
    sender: {
      firstName: 'Esra',
      lastName: 'Yılmaz',
    },
    messages: [
      {
        text: 'kanka yarın buluşuyoruzz 😎',
        timestamp: '53125632456342',
      },
      {
        text: 'heyy Muraad',
        timestamp: '53125632456342',
      },
      {
        text: 'kanka yarın buluşuyoruzz 😎',
        timestamp: '53125632456342',
      },
      {
        text: 'kanka yarın buluşuyoruzz 😎',
        timestamp: '53125632456342',
      },
    ],
  },
  {
    sender: {
      firstName: 'Berk',
      lastName: 'Deniz',
    },
    messages: [
      {
        text: 'Okulu kafaya takmamak lazım',
        timestamp: '53125632456342',
      },
      {
        text: 'heyy Muraad 2',
        timestamp: '53125632456342',
      },
      {
        text: 'Okulu kafaya takmamak lazım',
        timestamp: '53125632456342',
      },
      {
        text: 'Okulu kafaya takmamak lazım',
        timestamp: '53125632456342',
      },
    ],
  },
  {
    sender: {
      firstName: 'Ponçik',
      lastName: 'Bayan',
    },
    messages: [
      {
        text: 'Yeni insanları tanımak...',
        timestamp: '53125632456342',
      },
      {
        text: 'heyy Muraad 3',
        timestamp: '53125632456342',
      },
      {
        text: 'Yeni insanları tanımak...',
        timestamp: '53125632456342',
      },
      {
        text: 'Yeni insanları tanımak...',
        timestamp: '53125632456342',
      },
    ],
  },
  {
    sender: {
      firstName: 'Zeynep',
      lastName: 'Çiçek',
    },
    messages: [
      {
        text: 'Kızgın değilim 😤',
        timestamp: '53125632456342',
      },
      {
        text: 'heyy Muraad 4',
        timestamp: '53125632456342',
      },
      {
        text: 'Kızgın değilim 😤',
        timestamp: '53125632456342',
      },
      {
        text: 'Kızgın değilim 😤',
        timestamp: '53125632456342',
      },
    ],
  },
];

const UserChatButton = ({user, message, Date}) => {
  return (
    <Pressable style={styles.Pressable}>
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

const Chats = () => {
  return (
    <View style={styles.view13}>
      <UserChatButton
        user={{
          nickname:
            chatList[0].sender.firstName + ' ' + chatList[0].sender.lastName,
          imageUrl:
            'https://img.wattpad.com/04ad7d37f06664571ea6476267ec0fe74e0346da/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64774f52477064625072726b35673d3d2d38362e313537376134323366373833383934343531323432303631373430342e6a7067?s=fit&w=720&h=720',
        }}
        Date="7:27 PM"
        message={chatList[0].messages[chatList[0].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            chatList[1].sender.firstName + ' ' + chatList[1].sender.lastName,
          imageUrl:
            'https://foto.haberler.com/galeri/2017/11/01/instagram-in-siradisi-fenomenleri-710426_4267_70_b.jpg',
        }}
        Date="5:38 PM"
        message={chatList[1].messages[chatList[1].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            chatList[2].sender.firstName + ' ' + chatList[2].sender.lastName,
          imageUrl:
            'https://galeri13.uludagsozluk.com/726/sozluk-yazarlarinin-asik-oldugu-kiz-tipi_1873752.jpg',
        }}
        Date="3:36 PM"
        message={chatList[2].messages[chatList[2].messages.length - 1].text}
      />
      <UserChatButton
        user={{
          nickname:
            chatList[3].sender.firstName + ' ' + chatList[3].sender.lastName,
          imageUrl:
            'https://i.pinimg.com/736x/bf/f1/1d/bff11de83086515bdf280818ec8c3458.jpg',
        }}
        Date="1:17 PM"
        message={chatList[3].messages[chatList[3].messages.length - 1].text}
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
