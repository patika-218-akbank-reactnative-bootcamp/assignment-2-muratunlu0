import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.view}>
      <View style={styles.CameraView}>
        <AntDesign name="camera" size={22} color="#adadad" />
      </View>
      <View style={styles.CHATSView}>
        <Text style={styles.CHATS}>{'CHATS'}</Text>
      </View>
      <View style={styles.STATUSView}>
        <Text style={styles.STATUS}>{'STATUS'}</Text>
      </View>
      <View style={styles.CALLSView}>
        <Text style={styles.CALLS}>{'CALLS'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#01816a',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#adadad',
  },
  CameraView: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
  },
  CHATSView: {
    height: '100%',
    width: 100,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  STATUSView: {
    height: '100%',
    width: 100,
    justifyContent: 'center',
  },
  CALLSView: {
    height: '100%',
    width: 100,
    justifyContent: 'center',
  },
  CHATS: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    shadowColor: 'white',
    alignSelf: 'center',
  },
  STATUS: {
    fontWeight: '600',
    fontSize: 14,
    color: '#adadad',
    alignSelf: 'center',
  },
  CALLS: {
    fontWeight: '600',
    fontSize: 14,
    color: '#adadad',
    alignSelf: 'center',
  },
  margin: {marginLeft: 17},
});

export default Title;
