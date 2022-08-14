import * as React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {IArticle} from '../../../../api/types';
import styles from './styles';

interface Props {
  item: IArticle;
  handleArticlePress: (item: IArticle) => void;
  isLightMode: boolean;
}

export const Article = ({item, handleArticlePress}: Props) => {
  const onPress = () => handleArticlePress(item);

  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.9} onPress={onPress}>
      <Image
        source={
          item?.urlToImage
            ? {uri: item?.urlToImage}
            : {
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLB-_baEMOVys0Dl1UwJUPds0FFIz6haS9L11-Ia5xQ&s',
              }
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
