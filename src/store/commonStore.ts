import AsyncStorage from '@react-native-async-storage/async-storage';
import create, {GetState, SetState} from 'zustand';
import {persist, StoreApiWithPersist} from 'zustand/middleware';

export type LangType = 'en' | 'ar';

type ICommonStore = {
  language: LangType;
  setLanguage: (language: LangType) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

export const commonStore = create<
  ICommonStore,
  SetState<ICommonStore>,
  GetState<ICommonStore>,
  StoreApiWithPersist<ICommonStore>
>(
  persist<
    ICommonStore,
    SetState<ICommonStore>,
    GetState<ICommonStore>,
    StoreApiWithPersist<ICommonStore>
  >(
    set => ({
      language: 'ar',
      setLanguage: (language: LangType) => set({language}),
      theme: 'Light',
      setTheme: (theme: string) => set({theme}),
    }),
    {
      getStorage: () => AsyncStorage,
      name: 'common-store',
    },
  ),
);
