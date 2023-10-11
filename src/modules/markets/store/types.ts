import { MarketsModel } from '../types';

export default interface MarketsStoreModel {
  data: MarketsModel[];
  actions: {
    setData: (data: MarketsModel[]) => void;
  };
}
