import request from './request';
import {IArticles} from './types';

export const newsApi = {
  allNews: ({pageNumber = 0, pageSize = 10}): Promise<IArticles | any> => {
    return request.get('/top-headlines?country=us', {
      params: {
        pageNumber,
        pageSize,
      },
    });
  },
};
