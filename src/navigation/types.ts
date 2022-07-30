import {IArticle} from '../api/types';

export type MainStack = {
  News: undefined;
  ArticleDetails: {
    articleDetails: IArticle;
  };
  Settings: undefined;
};

export type GlobalParams = MainStack;
