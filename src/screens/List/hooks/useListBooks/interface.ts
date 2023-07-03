import { BookDto } from '../../../../domain';

export interface UseListBooksResult {
  books: BookDto[];
  loading: boolean;
}
