import * as React from 'react';
import {
  View,
  Text,
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
import {IArticle} from '../../api/types';

type Props = NativeStackScreenProps<GlobalParams, 'News'>;

export const News = ({navigation: {navigate}}: Props) => {
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState<IArticle[]>([]);

  const {
    news,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
    isLoading,
    searchData,
    refetchSearch,
  } = useNews({query});

  React.useEffect(() => {
    setData(news);
  }, [news]);

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

  const handleSearch = () => {
    refetchSearch();
    if (query.trim().length > 0) {
      return setData(searchData?.articles);
    } else {
      setData(news);
    }
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
          returnKeyType="done"
          onSubmitEditing={handleSearch}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          onEndReached={fetchNextPage}
          refreshControl={
            <RefreshControl onRefresh={refetch} refreshing={isLoading} />
          }
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={() => <Text>NoResult</Text>}
        />
      </View>
    </SafeAreaView>
  );
};
