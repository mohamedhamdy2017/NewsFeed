import {Alert} from 'react-native';
import {useInfiniteQuery, useQuery} from 'react-query';
import {newsApi} from '../../../api/news';

interface Params {
  query: string;
}

export const useNews = ({query}: Params) => {
  const pageSize = 10;
  const {
    data: news,
    isLoading,
    refetch,
    fetchNextPage: fetchNext,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['allNews'],
    ({pageParam = 0}) => newsApi.allNews({pageNumber: pageParam, pageSize}),
    {
      select: data =>
        data.pages.reduce((prev, cur) => prev.concat(cur.articles), []),
      keepPreviousData: true,
      onError: err => Alert.alert(err),
      getNextPageParam: (lastPage, allpages) => {
        if (lastPage?.articles?.length === pageSize) {
          return allpages.length;
        }
      },
    },
  );

  const {data: searchData, refetch: refetchSearch} = useQuery(
    [`${query}`],
    () => newsApi.search(query),
  );

  const fetchNextPage = () => {
    if (isFetchingNextPage || isLoading) return;
    fetchNext();
  };

  return {
    news,
    isLoading,
    fetchNextPage,
    refetch,
    isFetchingNextPage,
    searchData,
    refetchSearch,
  };
};
