import { BrowserRouter, Routes, Route } from "react-router";
import NotesPage from './pages/NotesPage';
import NoteViewPage from './pages/NoteViewPage';
import NoteEditPage from './pages/NoteEditPage';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const mockNote: Note = {
  id: '1',
  title: 'Тестовая заметка',
  content: 'Содержание тестовой заметки...',
  createdAt: '21 марта, 2025'
};

const App = () => {
  const handleSave = (title: string, content: string) => {
    console.log('Сохранение', { title, content });
  };

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route 
          path="notes/:noteId" 
          element={
            <NoteViewPage 
              title={mockNote.title}
              content={mockNote.content}
              date={mockNote.createdAt}
            />
          }
        />
        <Route 
          path="notes/:noteId/edit" 
          element={
            <NoteEditPage 
              title={mockNote.title}
              content={mockNote.content}
              onSave={handleSave}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
