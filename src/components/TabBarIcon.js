import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const icons = {
  Home: 'home',
  List: 'format-list-bulleted',
  User: 'account',
  Shop: 'shopify',
};

export default function TabBarIcon({name, focused}) {
  return (
    <View style={focused ? styles.containerFocused : styles.container}>
      <View style={focused ? styles.wrapperFocused : styles.wrapper}>
        <Icon
          name={icons[name]}
          size={24}
          color={focused ? '#F1F1F1' : '#5E9761'}
          style={styles.icon}
        />
      </View>
      {focused && <Text style={styles.text}>{name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerFocused: {
    alignContent: 'center',
    justifyContent: 'center',
    top: -5,
  },
  wrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  wrapperFocused: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E9761',
    borderRadius: 50,
    borderColor: '#ffff',
    borderWidth: 5,
    width: 50,
    height: 50,
  },
  text: {
    textAlign: 'center',
    color: '#C2C2C2',
  },
});
