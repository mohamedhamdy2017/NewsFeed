import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  RefreshControl,
  ActivityIndicator,
  I18nManager,
} from 'react-native';

import styles from './styles';
import {Article} from './components/Article';
import {useNews} from './hooks/useNews';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GlobalParams} from '../../navigation/types';
import {IArticle} from '../../api/types';
import {commonStore} from '../../store';
import {Trans} from '../../localization';
import {colors} from '../../constants/colors';

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

  const {theme} = commonStore();
  const isLightMode = theme === 'Light';
  const isRTL = I18nManager.isRTL;
  
  React.useEffect(() => {
    setData(news);
  }, [news]);

  const keyExtractor = item => item.id;

  const handleArticlePress = item => {
    navigate('ArticleDetails', {articleDetails: item});
  };

  const renderItem = ({item}) => (
    <Article
      item={item}
      handleArticlePress={handleArticlePress}
      isLightMode={isLightMode}
    />
  );

  const ListFooterComponent = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator size={'large'} style={styles.loadingMore} />;
    }
    return null;
  };

  const ListEmptyComponent = () => (
    <Text style={styles.noResult}>No Results</Text>
  );

  const onChangeText = (text: string) => {
    setQuery(text);
  };

  const onSubmitEditing = () => {
    refetchSearch();
    if (query.trim().length > 0) {
      return setData(searchData?.articles);
    } else {
      setData(news);
    }
  };

  return (
    <SafeAreaView style={!isLightMode ? styles.darkMode : styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder={Trans('search')}
          placeholderTextColor={'gray'}
          value={query}
          onChangeText={onChangeText}
          style={[
            styles.input,
            isRTL && {textAlign: 'right'},
            !isLightMode && {color: colors.white},
          ]}
          returnKeyType="done"
          onSubmitEditing={onSubmitEditing}
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
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
};
