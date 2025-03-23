import { BrowserRouter, Routes, Route } from "react-router";
import Notes from './Notes';
import NotePage from './NotePage';
import EditNote from './EditNote';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route 
          path="/notes/:noteId" 
          element={
            <NotePage 
              title={mockNote.title}
              content={mockNote.content}
              date={mockNote.createdAt}
            />
          }
        />
        <Route 
          path="/notes/:noteId/edit" 
          element={
            <EditNote 
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
