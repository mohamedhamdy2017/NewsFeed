import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from 'src/constants/colors';
import {commonStore} from 'src/store';

export const Tab = ({iconName, label, focused}) => {
  const {theme} = commonStore();
  const isIOS = Platform.OS === 'ios';
  return (
    <View
      style={[
        styles.tab,
        focused && styles.isFocused,
        isIOS && {marginTop: 5},
      ]}>
      <Icon
        name={iconName}
        size={25}
        color={focused && theme !== 'Light' ? colors.yellow : colors.gray}
      />
      <Text
        style={[
          styles.label,
          focused && theme !== 'Light'
            ? {color: colors.yellow}
            : {color: colors.gray},
        ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  isFocused: {
    borderRadius: 30,
    padding: 10,
  },
  label: {
    marginLeft: 5,
    color: colors.blue,
    fontSize: 12,
  },
});
