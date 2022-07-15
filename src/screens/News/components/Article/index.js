import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export const Article = ({item, handleStoryPress}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.9}
      onPress={() => handleStoryPress()}>
      <Image
        source={{uri: item?.urlToImage || ''}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
