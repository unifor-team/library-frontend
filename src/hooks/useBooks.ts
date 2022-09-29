import { api } from '../utils/api';
import { TBooks } from '../types/hooks/useBooks';

const useBooks = () => {
  const getAllBooks = async (): Promise<TBooks[] | null> => {
    try {
      const books = await api.get('/books/getAllBooks');
      return books.data;
    } catch (err) {
      return null;
    }
  }
  return { getAllBooks };
};

export default useBooks;
