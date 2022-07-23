import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

export const ArticleDetails = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute();
  const {articlaDetails} = params;

  const handleBack = () => {
    goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleBack}
        style={styles.back}>
        <Icon name="arrow-left" size={25} style={{alignSelf: 'center'}} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={{uri: articlaDetails?.urlToImage || ''}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={[styles.author]}>
            {`Author : ${articlaDetails?.author}`}
          </Text>
          <Text style={[styles.author]}>
            {`Created At : ${moment(articlaDetails?.publishedAt).format(
              'YYYY-MM-DD',
            )}`}
          </Text>
          <Text style={[styles.title]}>{articlaDetails?.title}</Text>
          <Text style={[styles.title]}>{articlaDetails?.description}</Text>
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
  title: {fontSize: 18, marginVertical: 15, lineHeight: 25},
  image: {width: '100%', height: '60%'},
  back: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    marginLeft: 20,
  },
});
