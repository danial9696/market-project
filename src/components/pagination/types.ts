export default interface Props {
  items: any[];
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
  currentPage: number;
}
