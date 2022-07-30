import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {IArticle} from '../../../../api/types';
import styles from './styles';

interface Props {
  item: IArticle;
  handleArticlePress: (item: IArticle) => void;
}

export const Article = ({item, handleArticlePress}: Props) => {
  const onPress = () => handleArticlePress(item);

  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={onPress}>
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
