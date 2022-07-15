import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stacks} from './Stacks';

export const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};
