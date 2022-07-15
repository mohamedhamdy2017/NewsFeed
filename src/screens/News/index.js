import * as React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';

import {Article} from './components/Article';
import styles from './styles'

export const News = () => {
  const keyExtractor = item => item.id;

  const renderItem = ({item}) => (
    <Article item={item} handleStoryPress={() => {}} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={[{},{}]}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};
