import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../../../constants/colors';
import {Trans} from '../../../../localization';
import {commonStore} from '../../../../store';
import styles from './styles';

interface Props {
  showThemeModal: boolean;
  setShowThemeModal: (showThemeModal: boolean) => void;
  isLightTheme: boolean;
}

export const ThemeModal = ({
  showThemeModal,
  setShowThemeModal,
  isLightTheme,
}: Props) => {
  const themes = [
    {title: Trans('Light'), code: 'Light'},
    {title: Trans('Dark'), code: 'Dark'},
  ];
  const {theme, setTheme} = commonStore();

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
    setShowThemeModal(false);
  };

  const onBackdropPress = () => {
    setShowThemeModal(false);
  };

  return (
    <Modal
      isVisible={showThemeModal}
      style={styles.modal}
      animationInTiming={800}
      onBackdropPress={onBackdropPress}>
      <View
        style={[styles.modalContainer, !isLightTheme && styles.modalDarkMode]}>
        {themes.map((selectedTheme, index) => {
          const isSelected = theme === selectedTheme.code;
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.7}
              onPress={() => handleChangeTheme(selectedTheme.code)}
              style={[
                styles.button,
                isSelected && {backgroundColor: colors.yellow},
              ]}>
              <Text
                style={[
                  styles.buttonText,
                  !isLightTheme && {color: colors.white},
                  isSelected && {color: colors.white},
                ]}>
                {selectedTheme.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};
