import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from '../Tabs';
import {ArticleDetails} from '../../screens/ArticleDetails';

const Stack = createStackNavigator();

export const Stacks = () => (
  <Stack.Navigator initialRouteName="News" screenOptions={{headerShown: false}}>
    <Stack.Screen name="News" component={Tabs} />
    <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
  </Stack.Navigator>
);
