import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Image} from 'react-native';
import { colors } from '../../constants/colors';

export const ArticleDetails = ({item}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={item?.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={[styles.title]} numberOfLines={2}>{item.title}</Text>
        <Text style={[styles.title]}>{'description'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 15,
    width: '100%',
    height: '40%',
  },

  title: {},

  image: {flex: 1},
});
