import { useMarketsStore } from './store';

// ! Export atomic selectors states to prevent subscribe to unnecessary state data

export const useMarketsActions = () => useMarketsStore(state => state.actions);

export const useMarketsData = () => useMarketsStore(state => state.data);
