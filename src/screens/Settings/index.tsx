import * as React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors';

import {commonStore} from '../../store';
import {Trans} from '../../localization';
import {ThemeModal} from './components/ThemeModal';
import {LanguagesModal} from './components/ThemeModal/LanguagesModal';

export const Settings = () => {
  const [showLanguageModal, setShowLanguageModal] = React.useState(false);
  const [showThemeModal, setShowThemeModal] = React.useState(false);
  const {theme} = commonStore();

  const isLightTheme = theme === 'Light';

  const accountData = [
    {title: 'Languages', onPress: () => setShowLanguageModal(true)},
    {title: 'Theme', onPress: () => setShowThemeModal(true)},
  ];

  return (
    <SafeAreaView
      style={theme !== 'Light' ? styles.darkMode : styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLB-_baEMOVys0Dl1UwJUPds0FFIz6haS9L11-Ia5xQ&s',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      {accountData.map((item, index) => {
        return (
          <TouchableOpacity
            key={index.toString()}
            activeOpacity={0.7}
            onPress={item.onPress}
            style={styles.titleContainer}>
            <Text
              style={[styles.title, !isLightTheme && {color: colors.yellow}]}>
              {Trans(item.title)}
            </Text>
          </TouchableOpacity>
        );
      })}

      {showLanguageModal && (
        <LanguagesModal
          showLanguagesModal={showLanguageModal}
          setShowLanguagesModal={setShowLanguageModal}
          isLightTheme={isLightTheme}
        />
      )}
      {showThemeModal && (
        <ThemeModal
          showThemeModal={showThemeModal}
          setShowThemeModal={setShowThemeModal}
          isLightTheme={isLightTheme}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  darkMode: {
    backgroundColor: colors.black,
  },
  modalDarkMode: {
    borderWidth: 1,
    borderColor: colors.yellow,
    backgroundColor: colors.black,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  image: {
    width: '100%',
    height: 150,
    marginVertical: 20,
  },
  titleContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    color: colors.black,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 70,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 18,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.black,
    fontSize: 20,
  },
});
