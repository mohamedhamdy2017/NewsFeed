import request from './request';

export const newsApi = {
  allNews: ({pageNumber = 0, pageSize = 10}) => {
    return request.get('/top-headlines?country=us', {
      params: {
        pageNumber,
        pageSize,
      },
    });
  },
};
