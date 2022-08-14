import React from 'react';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {Stacks} from './Stacks';
import {commonStore} from '../store';

export const NavigationRoot = () => {
  const {theme} = commonStore();

  return (
    <NavigationContainer theme={theme === 'Light' ? DefaultTheme : DarkTheme}>
      <Stacks />
    </NavigationContainer>
  );
};
