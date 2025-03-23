import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Navigate } from "react-router";
import NotesPage from './pages/NotesPage';
import NoteViewPage from './pages/NoteViewPage';
import NoteEditPage from './pages/NoteEditPage';
import { mockNotes } from './constants/mockData';
import { Note } from './types/note';

const App = () => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const handleSave = (oldTitle: string, newTitle: string, newContent: string) => {
    setNotes(notes.map(note => 
      note.title === oldTitle ? { ...note, title: newTitle, content: newContent } : note
    ));
  };

  const handleDelete = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const NoteViewWrapper = () => {
    const { noteId } = useParams<{ noteId: string }>();
    const navigate = useNavigate();
    const note = notes.find(n => n.id === noteId);
    if (!note) return null;
    return (
      <NoteViewPage 
        title={note.title}
        content={note.content}
        date={note.createdAt}
        onDelete={(id) => {
          handleDelete(id);
          navigate('/notes');
        }}
      />
    );
  };

  const NoteEditWrapper = () => {
    const { noteId } = useParams<{ noteId: string }>();
    const note = notes.find(n => n.id === noteId);
    if (!note) return null;
    return (
      <NoteEditPage 
        title={note.title}
        content={note.content}
        onSave={handleSave}
      />
    );
  };

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/notes" replace />} />
        <Route path="/notes" element={<NotesPage notes={notes} setNotes={setNotes} />} />
        <Route path="/notes/:noteId" element={<NoteViewWrapper />} />
        <Route path="/notes/:noteId/edit" element={<NoteEditWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
