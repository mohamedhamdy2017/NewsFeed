import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../styles';
import {News} from 'src/screens/News';
import {Tab} from './Tab';
import {Trans} from 'src/localization';
import {Settings} from 'src/screens/Settings';

const BottomTab = createBottomTabNavigator();
const isIOS = Platform.OS === 'ios';

export const Tabs = () => (
  <BottomTab.Navigator
    initialRouteName="News"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: isIOS ? styles.tabContainer : styles.androidTabStyle,
    }}>
    <BottomTab.Screen
      name="News"
      component={News}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Tab iconName="newspaper" label={Trans('news')} focused={focused} />
          );
        },
      }}
    />

    <BottomTab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({focused}) => {
          return (
            <Tab iconName="cog" label={Trans('settings')} focused={focused} />
          );
        },
      }}
    />
  </BottomTab.Navigator>
);
