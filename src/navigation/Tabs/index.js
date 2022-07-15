import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab} from './Tab';
import styles from '../styles';
import {News} from '../../screens/News';
import {Settings} from '../../screens/Settings';

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
          return <Tab iconName="newspaper" label="News" focused={focused} />;
        },
      }}
    />

    <BottomTab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({focused}) => {
          return <Tab iconName="cog" label="Settings" focused={focused} />;
        },
      }}
    />
  </BottomTab.Navigator>
);
