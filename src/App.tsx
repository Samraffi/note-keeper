import { BrowserRouter, Routes, Route } from "react-router";
import NotesPage from './pages/NotesPage';
import NoteViewPage from './pages/NoteViewPage';
import NoteEditPage from './pages/NoteEditPage';
import { mockNote } from './constants/mockData';

const App = () => {
  const handleSave = (title: string, content: string) => {
    console.log('Сохранение', { title, content });
  };
  const { title, content, createdAt } = mockNote; 

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route 
          path="notes/:noteId" 
          element={
            <NoteViewPage 
              title={title}
              content={content}
              date={createdAt}
            />
          }
        />
        <Route 
          path="notes/:noteId/edit" 
          element={
            <NoteEditPage 
              title={title}
              content={content}
              onSave={handleSave}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
