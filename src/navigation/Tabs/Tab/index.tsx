import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {colors} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Tab = ({iconName, label, focused}) => {
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
        color={focused ? colors.blue : colors.gray}
      />
      <Text style={[styles.label, !focused && {color: colors.gray}]}>
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
