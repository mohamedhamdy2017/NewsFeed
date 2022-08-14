import React from 'react';
import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import {colors} from 'src/constants/colors';
import {commonStore} from 'src/store';
import styles from './styles';
import Modal from 'react-native-modal';
import RNRestart from 'react-native-restart';

interface Props {
  showLanguagesModal: boolean;
  setShowLanguagesModal: (showLanguagesModal: boolean) => void;
  isLightTheme: boolean;
}

const languages = [
  {title: 'English', code: 'en'},
  {title: 'عربي', code: 'ar'},
];

export const LanguagesModal = ({
  showLanguagesModal,
  setShowLanguagesModal,
  isLightTheme,
}: Props) => {
  const {language, setLanguage} = commonStore();

  const handleChangeLanguage = code => {
    setLanguage(code);
    I18nManager.forceRTL(code === 'ar');
    setTimeout(() => {
      RNRestart.Restart();
    }, 10);
  };

  const onBackdropPress = () => {
    setShowLanguagesModal(false);
  };

  return (
    <Modal
      isVisible={showLanguagesModal}
      style={styles.modal}
      animationInTiming={800}
      onBackdropPress={onBackdropPress}>
      <View
        style={[styles.modalContainer, !isLightTheme && styles.modalDarkMode]}>
        {languages.map((selectedTheme, index) => {
          const isSelected = language === selectedTheme.code;
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.7}
              onPress={() => handleChangeLanguage(selectedTheme.code)}
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
