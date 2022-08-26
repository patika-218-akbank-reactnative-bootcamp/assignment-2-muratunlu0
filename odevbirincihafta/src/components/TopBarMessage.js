import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet} from 'react-native';

const TopBarMessage = ({Nickname}) => {
  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text}>{Nickname}</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.margin}>
          <AntDesign name="search1" size={23} color="white" />
        </View>
        <View style={styles.margin}>
          <AntDesign name="ellipsis1" size={23} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#01816a',
    justifyContent: 'space-between',
  },
  view2: {display: 'flex', flexDirection: 'row'},
  text: {
    fontWeight: '600',
    fontSize: 19,
    color: 'white',
  },
  margin: {marginLeft: 17},
});

export default TopBarMessage;
