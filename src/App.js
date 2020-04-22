import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Home, ListMarket, User, Shop} from './screens';
import {TabBarIcon} from './components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              return <TabBarIcon name={route.name} focused={focused} />;
            },
          })}
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Shop" component={Shop} />
          <Tab.Screen name="List" component={ListMarket} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
