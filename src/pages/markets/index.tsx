import { useEffect } from 'react';
import service from 'src/api';
import Props from 'src/lib/types/pages/markets';
import MarketsContainer from 'src/modules/markets/components/Markets.container';
import { useMarketsActions } from 'src/modules/markets/store/selector';
import { MarketsModel } from 'src/modules/markets/types';

function Index(props: Props) {
  const marketsActions = useMarketsActions();
  useEffect(() => {
    // * We can use directly ZuStand actions
    marketsActions.setData(props.results);
  }, []);

  return <MarketsContainer />;
}

export default Index;

export async function getServerSideProps() {
  const response = await service.get<MarketsModel>('https://api.bitpin.ir/v1/mkt/markets/');

  return { props: { ...response } };
}
