import { useMarketsData } from '../store/selector';
import { MarketDetailModel } from '../types';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Pagination } from 'src/components/pagination';
import { usePagination } from 'src/lib/hooks';

const itemsPerPage = 10;

function MarketsContainer() {
  const marketData = useMarketsData();

  const { sliceData, currentPage, handlePageChange } = usePagination<MarketDetailModel>(
    marketData,
    itemsPerPage,
  );

  const marketCardGenerator = (markets: MarketDetailModel[]) => {
    return markets.map(item => (
      <Grid key={item.id} item xs={6}>
        <Card variant='outlined' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              {item.title}
            </Typography>
            <Typography variant='h5' component='div'>
              {item.title_fa}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {item.tradable}
            </Typography>
            <Typography variant='body2'>{item.title}</Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {marketCardGenerator(sliceData)}
      </Grid>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Pagination
          items={marketData}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </Container>
  );
}

export default MarketsContainer;
