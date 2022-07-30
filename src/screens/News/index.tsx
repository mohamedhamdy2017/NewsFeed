import * as React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import {Article} from './components/Article';
import {useNews} from './hooks/useNews';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GlobalParams} from '../../navigation/types';

type Props = NativeStackScreenProps<GlobalParams, 'News'>;

export const News = ({navigation: {navigate}}: Props) => {
  const [query, setQuery] = React.useState();

  const {news, isFetchingNextPage, fetchNextPage, refetch, isLoading} =
    useNews();

  const keyExtractor = item => item.id;

  const handleArticlePress = item => {
    navigate('ArticleDetails', {articleDetails: item});
  };

  const renderItem = ({item}) => (
    <Article item={item} handleArticlePress={handleArticlePress} />
  );

  const ListFooterComponent = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator size={'large'} style={styles.loadingMore} />;
    }
    return null;
  };

  const onChangeText = text => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder={'Search here ...'}
          placeholderTextColor={'gray'}
          value={query}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          onEndReached={fetchNextPage}
          refreshControl={
            <RefreshControl onRefresh={refetch} refreshing={isLoading} />
          }
          ListFooterComponent={ListFooterComponent}
        />
      </View>
    </SafeAreaView>
  );
};
