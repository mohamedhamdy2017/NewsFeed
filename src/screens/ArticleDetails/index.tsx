import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  I18nManager,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {GlobalParams} from '../../navigation/types';
import {commonStore} from '../../store';

type Props = NativeStackScreenProps<GlobalParams, 'ArticleDetails'>;

export const ArticleDetails = ({navigation: {goBack}, route}: Props) => {
  const {articleDetails} = route.params;
  const {theme} = commonStore();
  const isRTL = I18nManager.isRTL;
  const isLightTheme = theme === 'Light';
  const handleBack = () => {
    goBack();
  };
  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkMode]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleBack}
        style={styles.back}>
        <Icon
          name={isRTL ? 'arrow-right' : 'arrow-left'}
          size={25}
          color={!isLightTheme ? colors.yellow : colors.black}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={{uri: articleDetails?.urlToImage || ''}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text
            style={[styles.author, !isLightTheme && {color: colors.yellow}]}>
            {`Author : ${articleDetails?.author}`}
          </Text>
          <Text
            style={[styles.author, !isLightTheme && {color: colors.yellow}]}>
            {`Created At : ${moment(articleDetails?.publishedAt).format(
              'YYYY-MM-DD',
            )}`}
          </Text>
          <Text style={[styles.title, !isLightTheme && {color: colors.yellow}]}>
            {articleDetails?.title}
          </Text>
          <Text style={[styles.title, !isLightTheme && {color: colors.yellow}]}>
            {articleDetails?.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  darkMode: {
    backgroundColor: colors.black,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: 150,
  },
  content: {
    padding: 15,
    width: '100%',
    height: '50%',
  },
  author: {fontSize: 18, marginTop: 10},
  title: {
    fontSize: 18,
    marginVertical: 15,
    lineHeight: 25,
    color: colors.black,
  },
  image: {width: '100%', height: '60%'},
  back: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    marginLeft: 20,
    marginBottom: 10,
  },
});
