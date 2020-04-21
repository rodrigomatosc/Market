import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const icons = {
  Home: 'home',
  List: 'format-list-bulleted',
  User: 'account',
};

export default function TabBarIcon({name, focused}) {
  return (
    <View style={focused ? styles.containerFocused : styles.container}>
      <Icon
        name={icons[name]}
        size={focused ? 24 : 24}
        color={focused ? '#F1F1F1' : '#5E9761'}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 50,
    // padding: 10,
  },

  containerFocused: {
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E9761',
    borderRadius: 50,
    top: -15,
    borderColor: '#ffff',
    borderWidth: 5,
    width: 60,
    height: 60,
  },
});
