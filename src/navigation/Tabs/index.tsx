import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../styles';

import {Tab} from './Tab';

import {Settings} from '../../screens//Settings';
import {News} from '../../screens/News';
import {Trans} from '../../localization';

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
