import { create } from 'zustand';
import MarketsStoreModel from './types';

export const useMarketsStore = create<MarketsStoreModel>(set => ({
  data: [],

  actions: {
    setData: data => set({ data }),
  },
}));
