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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 50,
    padding: 10,
    elevation: 10,
  },

  containerFocused: {
    position: 'absolute',
    backgroundColor: '#5E9761',
    borderRadius: 50,
    padding: 10,
    elevation: 10,
    top: -15,
    borderColor: '#ffff',
    borderWidth: 5,
  },
});
