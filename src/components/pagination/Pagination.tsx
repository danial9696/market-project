import { Pagination } from '@mui/material';
import Props from './types';

const CustomPagination = (props: Props) => {
  const totalPages = Math.ceil(props.items.length / props.itemsPerPage);

  const handlePageChange = (event: any, newPage: number) => {
    props.onPageChange(newPage);
  };

  return (
    <Pagination
      count={totalPages}
      page={props.currentPage}
      onChange={handlePageChange}
      color='primary'
    />
  );
};

export default CustomPagination;
