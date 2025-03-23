import { Note } from '../types/note';

export const mockNote: Note = {
  id: '1',
  title: 'Тестовая заметка',
  content: 'Содержание тестовой заметки...',
  createdAt: '21 марта, 2025'
};

export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Первая заметка',
    content: 'Содержание первой заметки...',
    createdAt: '21 марта, 2025'
  },
  {
    id: '2',
    title: 'Вторая заметка',
    content: 'Содержание второй заметки...',
    createdAt: '21 марта, 2025'
  }
];
