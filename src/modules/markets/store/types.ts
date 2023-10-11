import { MarketDetailModel } from '../types';

export default interface MarketsStoreModel {
  data: MarketDetailModel[];
  actions: {
    setData: (data: MarketDetailModel[]) => void;
  };
}
